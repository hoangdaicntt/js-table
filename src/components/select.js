import icons from "./icons";

export default class Select {
    constructor() {
    }

    init(table, container) {
        this.container = container;
        this.table = table;

        // this.inputHead = document.createElement('img');
        // this.inputHead.setAttribute('src', icons.uncheck);
        // this.container.querySelector('.dataTable thead>tr>th:first-child>.jstb-cellhead').prepend(this.inputHead);

        this.events();
    }

    loadInfo() {
        // this.container.querySelectorAll('.dataTable tbody>tr>td:first-child>.jstb-cell-view img').forEach(value => {
        //     value.remove();
        // })
        // this.container.querySelectorAll('.dataTable tbody>tr>td:first-child>.jstb-cell-view').forEach((value, key) => {
        //     const input = document.createElement('img');
        //     input.setAttribute('src', icons.uncheck);
        //     value.prepend(input);
        // })
    }

    events() {
        this.table.on('draw.dt', () => {
            this.loadInfo();
        });
    }
}
