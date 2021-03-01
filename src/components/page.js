import icons from "./icons";

export default class Paging {
    constructor() {
    }

    render() {
        return `<div class="jstable-paging-set">
                    <span class="jstable-paging-set-view">Số hàng hiển thị <a class="jstable-paging-set-current">10</a> <img src="${icons.arrowDown}"></span>
                    <ul class="jstable-paging-set-select"></ul>
                </div>`;
    }

    renderInfo() {
        return `<div class="jstable-info">
                <span class="jstable-info-current">0</span>
                <span class="jstable-info-text">/</span>
                <span class="jstable-info-max">0</span>
                <span class="jstable-info-text">toàn danh sách</span>
            </div>`;
    }

    init(table, container, options = {pages: []}) {
        this.container = container;
        this.table = table;
        this.elements = {
            currentLimit: this.container.querySelector('.jstable-paging-set-current'),
            select: this.container.querySelector('.jstable-paging-set-select'),
            selectAction: this.container.querySelector('.jstable-paging-set'),
            max: this.container.querySelector('.jstable-info-max'),
            current: this.container.querySelector('.jstable-info-current'),
        }
        //Create options limits
        for (let i = 0; i < options.pages.length; i++) {
            const li = document.createElement('li');
            li.innerText = options.pages[i];
            this.elements.select.appendChild(li);
            li.addEventListener("click", () => {
                this.onLimit(li, options.pages[i]);
            });
        }
        this.events();
    }

    toggleLimit(show) {
        this.elements.select.style.display = show ? 'block' : 'none';
    }

    onLimit(li, data) {
        this.elements.select.querySelectorAll('li').forEach(value => {
            value.classList.remove('active');
        });
        li.classList.add('active');
        this.elements.currentLimit.innerText = data;
        this.toggleLimit(false);
        this.table.page.len(data).draw();
    }

    loadInfo() {
        const info = this.table.page.info();
        this.elements.max.innerText = info.recordsTotal;
        this.elements.current.innerText = info.end;
    }

    setTable(tb) {
        this.table = tb;
    }

    events() {
        this.table.on('draw.dt', () => {
            this.loadInfo();
        });
        this.elements.selectAction.addEventListener('click', (evt) => {
            this.toggleLimit(true);
        });
        document.addEventListener('click', (evt) => {
            if (!evt.path.find(x => x === this.elements.selectAction)) {
                this.toggleLimit(false);
            }
        })
    }
}
