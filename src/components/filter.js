import icons from "./icons";

export default class Filter {
    constructor() {
    }

    render() {
        return ``;
    }


    init(table, container, options = {pages: []}) {
        this.container = container;
        this.table = table;
        this.elements = {}

        this.events();
    }


    loadInfo() {
        const info = this.table.page.info();
    }

    events() {
        this.table.on('draw.dt', () => {
            this.loadInfo();
        });

    }
}
