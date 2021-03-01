import icons from "./icons";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import JsSelect from "js-select-hd";

export default class Filter {
    constructor() {
    }

    render() {
        return `<div class="jstable-iyorty">
                <button class="jstable-iyorty2">
                    <span class="jstable-iyorty4">Bộ lọc</span>
                    <img class="jstable-iyorty3" src="${icons.filter}">
                </button>
                <div class="jstable-oeirueyr4">
                    <div class="jstable-jssleofir"></div>
                </div>
            </div>`;
    }


    init(table, container, options = {filters: []}) {
        this.container = container;
        this.table = table;
        this.elements = {
            btnFilter: this.container.querySelector('.jstable-iyorty2'),
            filterContent: this.container.querySelector('.jstable-oeirueyr4'),
            selectFilter: this.container.querySelector('.jstable-jssleofir'),
        }
        this.jsSelect = new JsSelect(this.elements.selectFilter, options.filters, {
            placeholder: 'Chọn tiêu chí lọc',
            typing: 'Tìm kiếm tiêu chí lọc...',
            search: false,
            canNull: true,
            maxRow: 5,
            canCloseDropdown: false
        });
        this.jsSelect.open();
        this.events();
    }


    loadInfo() {
        const info = this.table.page.info();
    }

    events() {
        this.table.on('draw.dt', () => {
            this.loadInfo();
        });
        this.jsSelect.onSelected((value) => {
            this.jsSelect.close();
            this.jsSelect.option.canCloseDropdown = true;
            console.log(value);
        });
    }
}
