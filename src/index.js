import * as $ from 'jquery';
import "datatables.net-dt";
import "datatables.net-colreorder-dt";
import Pagination from "./components/pagination";
import icons from "./components/icons";
import Paging from "./components/page";
import Column from "./components/column";
import Filter from "./components/filter";

export default class JsTable {
    constructor(dom, options) {
        this.pagination = new Pagination();
        this.paging = new Paging();
        this.column = new Column();
        this.filter = new Filter();

        this.initUI(dom);
        this.table = $('#' + this.idTable).DataTable({
            data: [],
            columns: options.columns,
            scrollX: true,
            colReorder: true
        });

        this.pagination.init(this.table, this.containerFooter);
        this.column.init(this.table, this.containerHead, {
            columns: options.columns
        });
        this.filter.init(this.table, this.containerHead, {
            filters: options.filters
        });
        this.paging.init(this.table, this.containerFooter, {
            pages: options.pages ? options.pages : [10, 20, 30, 50]
        });
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
                <div class="jstable-jhiypfey">
                    <span class="jstable-jhiypfey5">Bộ lọc lưu sẵn <img src="${icons.arrowDown}"></span>
                    <ul class="jstable-jhiypfeyr"></ul>
                </div>
                ${this.column.render()}
            </div>
        `;
        this.containerHead.innerHTML = this.templateHead;
    }

    setData(data) {
        this.table.clear();
        this.table.rows.add(data).draw();
    }
}
