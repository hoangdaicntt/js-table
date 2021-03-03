import * as $ from 'jquery';
import "datatables.net-dt";
import "datatables.net-colreorder-dt";
import Pagination from "./components/pagination";
import icons from "./components/icons";
import Paging from "./components/page";
import Column from "./components/column";
import Filter from "./components/filter";
import FilterBox from "./components/filterBox";
// import "dt-colresize";
import "dt-colresize/css/dataTables.colResize.css"
import "datatables.net-fixedcolumns-dt";
import "datatables.net-fixedcolumns-dt/css/fixedColumns.dataTables.min.css";
import "datatables.net-select-dt";
import "datatables.net-select-dt/css/select.dataTables.min.css";
import Select from "./components/select";

export default class JsTable {
    constructor(dom, options) {
        this.pagination = new Pagination();
        this.paging = new Paging();
        this.column = new Column();
        this.filter = new Filter();
        this.filterBox = new FilterBox();
        this.select = new Select();

        this.columns = options.columns;
        this.options = options;
        this.cellRenders = options.cellRenders;
        this.dom = dom;

        this.initComponents();
    }

    initComponents() {
        const dom = this.dom;
        this.initUI(dom);

        let totalWidth = 0;
        let maxWidth = this.container.clientWidth;
        let count = this.columns.filter(x => !x.hidden).length;
        this.columns.filter(x => !x.hidden).map((x) => totalWidth += x['data-width']);
        this.sizePadding = (maxWidth - totalWidth) / (count - 1);
        this.sizePadding = (this.sizePadding > 0 ? this.sizePadding : 16);

        this.table = $('#' + this.idTable).DataTable({
            data: [],
            columns: this.columns.map((x, index) => {
                const isEnd = index === this.columns.length - 1;
                x.width = x['data-width'] + (!isEnd ? this.sizePadding : 0);
                return x;
            }),
            colReorder: true,
            colResize: true,
            autoWidth: false,
            scrollX: true,
            fixedColumns: {
                leftColumns: 0
            },
            columnDefs: this.renderCells(),
            "ordering": false
        });
        this.table.currentDom = this.container;
        this.rerenderTh();
        this.pagination.init(this.table, this.containerFooter);
        this.column.init(this.table, this.containerHead, {
            columns: this.columns,
            updateTable: (columns, fixedColumns) => {
                this.updateTable(columns, fixedColumns)
            }
        });
        this.filter.init(this.table, this.containerHead, {
            filters: this.options.filters,
            filterBox: this.filterBox
        });
        this.filterBox.init(this.table, this.containerHead, {
            filters: this.options.filters
        });
        this.select.init(this.table, this.container);
        this.paging.init(this.table, this.containerFooter, {
            pages: this.options.pages ? options.pages : [10, 20, 30, 50]
        });

        this.events()
    }

    renderCells() {
        return this.columns.map((column, index) => {
            const isEnd = index === this.columns.length - 1;
            const result = {
                targets: index,
                render: (data, type, row) => {
                    return `
                        <div class="jstb-cell-view"><span style="width: ${column['data-width']}px" class="jstb-cell-data">${data}</span><span class="jstb-cell-space" style="width: ${!isEnd ? this.sizePadding : 0}px">${!isEnd ? this.sizePadding : 0}px</span></div>
                    `;
                },
            }
            const render = this.cellRenders.find(x => x.field === column.data);
            if (render) {
                result.render = (data, type, row) => {
                    return `
                        <div class="jstb-cell-view"><span style="width: ${column['data-width']}px" class="jstb-cell-data">${render.render(data, row)}</span><span class="jstb-cell-space" style="width: ${!isEnd ? this.sizePadding : 0}px">${!isEnd ? this.sizePadding : 0}px</span></div>
                    `;
                };
            }
            return result;
        });
    }

    updateTable(columns, fixedColumns = 0) {
        this.container.remove();
        this.columns = columns;
        this.table.destroy();

        this.pagination = new Pagination();
        this.paging = new Paging();
        this.column = new Column();
        this.filter = new Filter();

        this.initComponents();

        this.setData(this.data);
        this.setFiltersSaved(this.filtersSaved);

        if (this.onUpdateColumnsCallback) {
            this.onUpdateColumnsCallback(columns)
        }
    }

    rerenderTh() {
        this.container.querySelectorAll('.dataTable thead>tr>th').forEach((value, key, parent) => {
            const isEnd = (key % (this.columns.filter(x => !x.hidden).length - 1) === 0) && key > 0;
            const text = value.innerText;
            const col = this.columns[value.getAttribute('data-column-index').trim()]
            value.innerHTML = `
                <div class="jstb-cellhead"><span class="jstb-cellhead-data" style="width: ${col['data-width']}px">${text}</span><span style="width: ${!isEnd ? this.sizePadding : 0}px" class="jstb-cell-space">${!isEnd ? this.sizePadding : 0}px</span></div>
            `;
        })
    }

    setFiltersSaved(filtersSaved) {
        this.filtersSaved = filtersSaved;
        this.filter.updateFiltersSaved(this.filtersSaved);
    }

    onUpdateColumns(callback) {
        this.onUpdateColumnsCallback = callback;
    }

    onFilterChange(callback) {
        const next = (data) => {
            this.setData(data);
        }
        this.filterBox.onFilterChange(callback, next);
    }

    onUpdateFilterSaved(callback) {
        this.filter.onUpdateFilterSaved(callback);
    }

    initUI(dom) {
        this.container = document.createElement('div');
        this.containerTable = document.createElement('div');
        this.containerFooter = document.createElement('div');
        this.containerHead = document.createElement('div');
        this.tableElem = document.createElement('table');
        this.container.appendChild(this.containerHead);
        this.container.appendChild(this.containerTable);
        this.container.appendChild(this.containerFooter);
        this.containerTable.appendChild(this.tableElem);
        const main = document.querySelector(dom);
        main.appendChild(this.container);

        //
        this.idTable = 'js-table-' + parseInt(Math.random() * 100000).toString();
        this.tableElem.setAttribute('id', this.idTable);
        this.containerTable.className = 'table-container';
        this.containerFooter.className = 'table-container-footer';
        this.containerHead.className = 'table-container-head';
        this.container.className = 'jstable-container';

        //Phân trang
        this.templateFooter = `
            ${this.paging.renderInfo()}
            <div class="jstable-paging">
                ${this.paging.render()}
                ${this.pagination.render()}
                <div  class="jstable-paging-action">
                    <button  class="jstable-paging-acction-item">Xuất báo cáo</button>
                </div>
            </div>
        `;
        this.containerFooter.innerHTML = this.templateFooter;

        //Bộ lọc đầu trang
        this.templateHead = `
            ${this.filterBox.render()}
            <div class="jstable-jhiypfe">
                ${this.filter.renderSave()}
                ${this.column.render()}
            </div>
        `;
        this.containerHead.innerHTML = this.templateHead;
    }

    setData(data) {
        this.data = data;
        this.table.clear();
        this.table.rows.add(data).draw();
    }

    events() {

    }
}
