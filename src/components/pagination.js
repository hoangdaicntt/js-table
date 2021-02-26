import icons from "./icons";

export default class Pagination {
    constructor() {
    }

    render() {

        return `<div class="jstable-paging-nav">
                    <button  class="jstable-paging-nav-start"><img src="${icons.moveStart}"></button>
                    <button  class="jstable-paging-nav-prev"><img src="${icons.prev}"></button>
                    <span  class="jstable-paging-nav-text">Trang</span>
                    <input  class="jstable-paging-nav-input">
                    <span  class="jstable-paging-nav-text">/</span>
                    <span  class="jstable-paging-nav-page">0</span>
                    <button  class="jstable-paging-nav-next"><img src="${icons.next}"></button>
                    <button  class="jstable-paging-nav-end"><img src="${icons.moveEnd}"></button>
                </div>`;
    }

    init(table, container) {
        this.container = container;
        this.table = table;
        this.elements = {
            moveStart: this.container.querySelector('.jstable-paging-nav-start'),
            prev: this.container.querySelector('.jstable-paging-nav-prev'),
            next: this.container.querySelector('.jstable-paging-nav-next'),
            moveEnd: this.container.querySelector('.jstable-paging-nav-end'),
            input: this.container.querySelector('.jstable-paging-nav-input'),
            page: this.container.querySelector('.jstable-paging-nav-page'),
        }

        this.events();
    }

    loadInfo() {
        const info = this.table.page.info();
        this.elements.page.innerText = info.pages;
        this.elements.input.value = (info.page + 1);
    }

    events() {
        this.table.on('draw.dt', () => {
            this.loadInfo();
        });
        this.elements.moveEnd.addEventListener('click', () => {
            this.table.page('last').draw('page');
        });
        this.elements.moveStart.addEventListener('click', () => {
            this.table.page('first').draw('page');
        });
        this.elements.prev.addEventListener('click', () => {
            this.table.page('previous').draw('page');
        });
        this.elements.next.addEventListener('click', () => {
            this.table.page('next').draw('page');
        });
        this.elements.input.addEventListener('change', () => {
            this.table.page(parseInt(this.elements.input.value) - 1).draw('page');
        });
    }
}
