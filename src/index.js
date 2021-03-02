import * as $ from 'jquery';
import "datatables.net-dt";
import "datatables.net-colreorder-dt";
import Pagination from "./components/pagination";
import icons from "./components/icons";
import Paging from "./components/page";
import Column from "./components/column";
import Filter from "./components/filter";
// import "dt-colresize";
import "dt-colresize/css/dataTables.colResize.css"
import "datatables.net-fixedcolumns-dt";
import "datatables.net-fixedcolumns-dt/css/fixedColumns.dataTables.min.css";

export default class JsTable {
    constructor(dom, options) {
        this.pagination = new Pagination();
        this.paging = new Paging();
        this.column = new Column();
        this.filter = new Filter();

        this.columns = options.columns;
        this.options = options;
        this.dom = dom;

        this.initUI(dom);
        this.table = $('#' + this.idTable).DataTable({
            data: [],
            columns: this.columns,
            colReorder: true,
            colResize: true,
            autoWidth: false,
            scrollX: true,
            fixedColumns: {
                leftColumns: 0
            }
        });
        this.table.currentDom = this.container;

        this.pagination.init(this.table, this.containerFooter);
        this.column.init(this.table, this.containerHead, {
            columns: this.columns,
            updateTable: (columns, fixedColumns) => {
                this.updateTable(columns, fixedColumns)
            }
        });
        this.filter.init(this.table, this.containerHead, {
            filters: options.filters
        });
        this.paging.init(this.table, this.containerFooter, {
            pages: options.pages ? options.pages : [10, 20, 30, 50]
        });

        this.events()
    }

    updateTable(columns, fixedColumns = 0) {
        this.container.remove();
        this.columns = columns;
        this.table.destroy();

        this.pagination = new Pagination();
        this.paging = new Paging();
        this.column = new Column();
        this.filter = new Filter();

        this.initUI(this.dom);
        this.table = $('#' + this.idTable).DataTable({
            data: [],
            columns: this.columns,
            colReorder: true,
            colResize: true,
            autoWidth: false,
            scrollX: true,
            fixedColumns: {
                leftColumns: fixedColumns
            }
        });
        this.table.currentDom = this.container;

        this.pagination.init(this.table, this.containerFooter);
        this.column.init(this.table, this.containerHead, {
            columns: this.columns,
            updateTable: (columns, fixedColumns) => {
                this.updateTable(columns, fixedColumns)
            }
        });
        this.filter.init(this.table, this.containerHead, {
            filters: this.options.filters
        });
        this.paging.init(this.table, this.containerFooter, {
            pages: this.options.pages ? this.options.pages : [10, 20, 30, 50]
        });

        this.events()

        this.setData(this.data);
        this.setFiltersSaved(this.filtersSaved);

        if (this.onUpdateColumnsCallback) {
            this.onUpdateColumnsCallback(columns)
        }
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
        this.filter.onFilterChange(callback, next);
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
            ${this.filter.render()}
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
