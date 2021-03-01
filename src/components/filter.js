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
                    <div class="jstable-jssleofir3"></div>
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
            viewFilter: this.container.querySelector('.jstable-jssleofir3'),
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
            this.renderOption(value);
        });
        this.elements.btnFilter.addEventListener('click', () => {
            this.toggleFilterContent(true);
        });
    }

    toggleFilterContent(show) {
        this.elements.filterContent.style.display = show ? 'block' : 'none';
    }

    submit(value) {
        console.log(value);
        this.toggleFilterContent(false);
    }

    renderOption(option) {
        let result = {
            type: option.type,
            value: null
        };
        switch (option.type) {
            case 'selection': {
                const template = `
                    <div class="jstable-ufldpcmt">
                        <div class="jstable-ufldpcmt1">
                            <label class="jstable-ufldpcmt2">Là</label>
                        </div>
                        <div class="jstable-ufldpcmt4">
                            
                        </div>
                        <div class="jstable-ufldpcmt12">
                            <label>Đang chọn <span  class="jstable-ufldpcmt43">0</span>/<span  class="jstable-ufldpcmt44">0</span></label>
                            <button class="jstable-ufldpcm13">Chọn</button>
                        </div>
                    </div>
                `;
                this.elements.viewFilter.innerHTML = template;
                const optionsContainer = this.elements.viewFilter.querySelector('.jstable-ufldpcmt4');
                const btnResult = this.elements.viewFilter.querySelector('.jstable-ufldpcm13');
                const countTotal = this.elements.viewFilter.querySelector('.jstable-ufldpcmt44');
                const countSelected = this.elements.viewFilter.querySelector('.jstable-ufldpcmt43');
                // Render options
                const options = JSON.parse(JSON.stringify(option.options));
                countTotal.innerHTML = options.length;
                options.map(op => {
                    const div = document.createElement('div');
                    const img = document.createElement('img');
                    const span = document.createElement('span');
                    div.appendChild(img);
                    div.appendChild(span);
                    img.setAttribute('src', icons.uncheck);
                    span.innerText = op.name;
                    optionsContainer.appendChild(div);
                    div.addEventListener('click', () => {
                        op.checked = !op.checked;
                        if (op.checked) {
                            img.setAttribute('src', icons.checked);
                        } else {
                            img.setAttribute('src', icons.uncheck);
                        }

                        result.value = options.filter(x => !!x.checked);
                        countSelected.innerHTML = options.filter(x => !!x.checked).length;

                    });
                });
                btnResult.addEventListener('click', () => {
                    this.submit(result);
                });

                break;
            }
            case 'range': {
                const options = [
                    {id: '>=', name: 'Lớn hơn hoặc bằng'},
                    {id: '<=', name: 'Nhỏ hơn hoặc bằng'},
                    {id: '>', name: 'Nhỏ hơn'},
                    {id: '<', name: 'Lớn hơn'},
                    {id: '~', name: 'Khoảng'},
                    {id: '=', name: 'Bằng'},
                ];
                const template = `
                    <div class="jstable-ufldpcm">
                        <div class="jstable-ufldpcm1">
                            <label class="jstable-ufldpcm2">Điều khiện</label>
                            <div class="jstable-ufldpcm3"></div>
                        </div>
                        <div class="jstable-ufldpcm4">
                            <div class="jstable-ufldpcm5">
                                <input class="jstable-ufldpcm6 jstable-ufldpcm11" placeholder="Nhập số">
                            </div>
                            <div class="jstable-ufldpcm7">
                                <label class="jstable-ufldpcm8">Từ</label>
                                <input class="jstable-ufldpcm6 jstable-ufldpcm9" placeholder="Nhập số">
                                <label class="jstable-ufldpcm8">Đến</label>
                                <input class="jstable-ufldpcm6  jstable-ufldpcm10" placeholder="Nhập số">
                            </div>
                        </div>
                        <div class="jstable-ufldpcm12">
                            <button class="jstable-ufldpcm13">Chọn</button>
                        </div>
                    </div>
                `;
                this.elements.viewFilter.innerHTML = template;
                const select = this.elements.viewFilter.querySelector('.jstable-ufldpcm3');
                const inputType1 = this.elements.viewFilter.querySelector('.jstable-ufldpcm5');
                const inputType2 = this.elements.viewFilter.querySelector('.jstable-ufldpcm7');
                const input1 = this.elements.viewFilter.querySelector('.jstable-ufldpcm11');
                const input2 = this.elements.viewFilter.querySelector('.jstable-ufldpcm9');
                const input3 = this.elements.viewFilter.querySelector('.jstable-ufldpcm10');
                const btnResult = this.elements.viewFilter.querySelector('.jstable-ufldpcm13');
                const jsSelectRange = new JsSelect(select, options, {
                    placeholder: 'Chọn điều kiện',
                    search: false,
                    canNull: false,
                    maxRow: 5,
                });
                jsSelectRange.onSelected((value) => {
                    if (value.id === '~') {
                        inputType1.style.display = 'none';
                        inputType2.style.display = 'block';
                    } else {
                        inputType1.style.display = 'block';
                        inputType2.style.display = 'none';
                    }
                });
                input1.addEventListener('change', () => {
                    result.value = {
                        operator: jsSelectRange.value,
                        value: input1.value
                    }
                });
                input2.addEventListener('change', () => {
                    result.value = {
                        operator: jsSelectRange.value,
                        value: [input2.value, input3.value]
                    }
                });
                input3.addEventListener('change', () => {
                    result.value = {
                        operator: jsSelectRange.value,
                        value: [input2.value, input3.value]
                    }
                });
                btnResult.addEventListener('click', () => {
                    this.submit(result);
                });
                break;
            }
        }
    }
}
