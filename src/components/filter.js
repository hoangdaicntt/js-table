import icons from "./icons";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import JsSelect from "js-select-hd";

export default class Filter {
    constructor() {
        this.currentFilters = [];
    }

    render() {
        return `<div class="jstable-iyorty">
                <button class="jstable-iyorty2">
                    <span class="jstable-iyorty4">Bộ lọc</span>
                    <img class="jstable-iyorty3" src="${icons.filter}">
                    <img class="jstable-iyorty4f3" src="${icons.removeBG}">
                </button>
                <div class="jstable-oeirueyr4">
                    <div class="jstable-jssleofir"></div>
                    <div class="jstable-jssleofir3"></div>
                </div>
                <div class="jstable-jssleofird"></div>
                <button class="jstable-jssleofird32">Lưu bộ lọc</button>
            </div>` + this.renderModalFilter();
    }

    renderSave() {
        return `<div class="jstable-jhiypfey">
                    <span class="jstable-jhiypfey5">Bộ lọc lưu sẵn <img src="${icons.arrowDown}"></span>
                    <div class="jstable-jhiypfeyr">
                        <button class="jstable-jhiypfeyrvk">
                            <span>Danh sách bộ lọc lưu sẵn</span>
                            <img src="${icons.open}">
                        </button>
                        <ul class="jstable-jhiypfeyr3d"></ul>
                    </div>
                </div>`;
    }

    renderModalFilter() {
        return `
            <div class="jstable-yowxtedf2" style="display: none">
                    <div class="jstable-yowxte3"></div>
                    <div class="jstable-yowxte4">
                           <div class="jstable-yowxte5">
                               <h3 class="jstable-yowxte6"><img src="${icons.filterTop}"> Danh sách bộ lọc đã lưu</h3>
                               <button class="jstable-yowxte6">
                                    <span>Thêm mới bộ lọc</span>
                                    <img src="${icons.add}">
                               </button>      
                           </div>
                           <div class="jstable-yowxteds8">
                                <table>
                                    <thead class="jstable-yowxteee9">
                                        <th>Tên bộ lọc</th>
                                        <th>Ngày tạo</th>
                                        <th>Người tạo</th>
                                        <th>Mô tả</th>
                                        <th>Sửa/Xóa</th>
                                    </thead>
                                    <tbody class="jstable-yowxterhyo"></tbody>
                                </table>
                           </div>
                           <div class="jstable-yowxtee">
                               <button class="jstable-yowxteydrt">Đóng</button>
                           </div>
                    </div>
                </div>
        `
    }


    init(table, container, options = {filters: [], filtersSaved: []}) {
        this.container = container;
        this.table = table;
        this.filtersSaved = options.filtersSaved;
        this.elements = {
            btnFilter: this.container.querySelector('.jstable-iyorty2'),
            filterContent: this.container.querySelector('.jstable-oeirueyr4'),
            selectFilter: this.container.querySelector('.jstable-jssleofir'),
            viewFilter: this.container.querySelector('.jstable-jssleofir3'),
            renderFilter: this.container.querySelector('.jstable-jssleofird'),
            removeAllFilter: this.container.querySelector('.jstable-iyorty4f3'),
            saveAllFilter: this.container.querySelector('.jstable-jssleofird32'),
            buttonFilterSave: this.container.querySelector('.jstable-jhiypfeyrvk'),
            buttonOpenFilterSave: this.container.querySelector('.jstable-jhiypfey5'),
            listFilterSave: this.container.querySelector('.jstable-jhiypfeyr3d'),
            containerFilterSave: this.container.querySelector('.jstable-jhiypfeyr'),
            tableSaveFilter: this.container.querySelector('.jstable-yowxterhyo'),
            modalSaveFilter: this.container.querySelector('.jstable-yowxtedf2'),
            modalCloseSaveFilter: this.container.querySelector('.jstable-yowxteydrt'),
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
        this.renderFilterSaveList();
        this.events();
    }

    updateFiltersSaved(filtersSaved) {
        this.filtersSaved = filtersSaved;
        this.renderFilterSaveList();
    }

    renderFilterSaveList() {
        if (this.filtersSaved) {
            this.filtersSaved.map(value => {
                const li = document.createElement('li');
                const span = document.createElement('span');
                const img = document.createElement('img');
                this.elements.listFilterSave.appendChild(li);
                li.appendChild(span);
                li.appendChild(img);
                span.innerText = value.name;
                img.setAttribute('src', icons.edit);
                li.addEventListener('click', () => {
                    this.applyFilterSave(value);
                })
            });

            //render table
            this.filtersSaved.map(value => {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                const td5 = document.createElement('td');
                const img = document.createElement('img');
                this.elements.tableSaveFilter.appendChild(tr);
                img.setAttribute('src', icons.edit)
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                td5.appendChild(img);
                td1.innerText = value.name;
                td2.innerText = value.createdAt;
                td4.innerText = value.description;
                td3.innerHTML = `
                    <div class="jstb-sjjforp">
                        <img src="${value.createdBy.avatar}">
                        <div>
                            <p>${value.createdBy.name}</p>
                            <span>${value.createdBy.description}</span>
                        </div>
                    </div>
                `;
            })
        }
    }

    loadInfo() {
        const info = this.table.page.info();
    }

    renderCurrentFilters() {
        if (this.onFilterChangeCallback) {
            this.onFilterChangeCallback(this.currentFilters, this.onFilterChangeCallbackNext);
        }
        if (this.currentFilters.length > 0) {
            this.elements.removeAllFilter.style.display = 'block';
            this.elements.saveAllFilter.style.display = 'block';
        } else {
            this.elements.removeAllFilter.style.display = 'none';
            this.elements.saveAllFilter.style.display = 'none';
        }
        this.elements.renderFilter.innerHTML = '';
        this.currentFilters.map((value, index) => {
            const div = document.createElement('div');
            const span = document.createElement('span');
            const img = document.createElement('img');
            img.setAttribute('src', icons.remove);
            span.innerText = value.name;
            div.appendChild(span);
            div.appendChild(img);
            this.elements.renderFilter.appendChild(div);

            img.addEventListener('click', () => {
                this.currentFilters = this.currentFilters.filter(x => x !== value);
                this.renderCurrentFilters();
            });
        })
    }

    applyFilterSave(ft) {
        this.currentFilters = ft.filters;
        this.renderCurrentFilters();
        this.toggleFilterSaveContent(false);
    }

    events() {
        this.table.on('draw.dt', () => {
            this.loadInfo();
        });
        this.jsSelect.onSelected((value) => {
            this.jsSelect.close();
            this.jsSelect.option.canCloseDropdown = true;
            value ? this.renderOption(value) : null;
        });
        this.elements.btnFilter.addEventListener('click', (evt) => {
            if (evt.path.find(x => x === this.elements.removeAllFilter)) {
                return;
            }
            this.toggleFilterContent(true);
        });
        this.elements.buttonOpenFilterSave.addEventListener('click', (evt) => {
            this.toggleFilterSaveContent(true);
        });
        this.elements.buttonFilterSave.addEventListener('click', (evt) => {
            this.toggleModalSave(true);
        });
        this.elements.modalCloseSaveFilter.addEventListener('click', (evt) => {
            this.toggleModalSave(false);
        });
        this.elements.removeAllFilter.addEventListener('click', () => {
            this.currentFilters = [];
            this.renderCurrentFilters();
            this.toggleFilterContent(false);
        });
        this.elements.saveAllFilter.addEventListener('click', () => {

        });

        document.querySelector('body').addEventListener('click', (evt) => {
            if (!evt.path.find(x => (x === this.elements.filterContent) || (x === this.elements.btnFilter))) {
                this.toggleFilterContent(false);
            }
            if (!evt.path.find(x => (x === this.elements.listFilterSave) || (x === this.elements.buttonOpenFilterSave))) {
                this.toggleFilterSaveContent(false);
            }
        })
    }

    toggleFilterContent(show) {
        this.elements.filterContent.style.display = show ? 'block' : 'none';
    }

    toggleFilterSaveContent(show) {
        this.elements.containerFilterSave.style.display = show ? 'block' : 'none';
    }

    toggleModalSave(show) {
        this.elements.modalSaveFilter.style.display = show ? 'flex' : 'none';
    }

    submit(value) {
        console.log(value);
        this.currentFilters.push(value);
        this.toggleFilterContent(false);
        this.renderCurrentFilters();
        this.elements.viewFilter.innerHTML = '';
        this.jsSelect.setValue(null);
    }

    renderOption(option) {
        let result = {
            name: option.name,
            type: option.type,
            value: null
        };
        switch (option.type) {
            case 'option': {
                const template = `
                    <div class="jstable-ufldpcmt3">
                        <div class="jstable-ufldpcmt44"></div>
                        <div class="jstable-ufldpcmt12">
                            <label></label>
                            <button class="jstable-ufldpcm13">Chọn</button>
                        </div>
                    </div>
                `;
                this.elements.viewFilter.innerHTML = template;
                const optionsContainer = this.elements.viewFilter.querySelector('.jstable-ufldpcmt44');
                const btnResult = this.elements.viewFilter.querySelector('.jstable-ufldpcm13');

                const jsSelect = new JsSelect(optionsContainer, option.options, {
                    placeholder: option.name,
                    search: false,
                    canNull: true,
                    maxRow: 5,
                });
                jsSelect.onSelected((value) => {
                    result.value = value;
                });
                btnResult.addEventListener('click', () => {
                    this.submit(result);
                });
                break;
            }
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

    onFilterChange(callback, next) {
        this.onFilterChangeCallback = callback;
        this.onFilterChangeCallbackNext = next;
    }
}
