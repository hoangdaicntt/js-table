import icons from "./icons";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import JsSelect from "js-select-hd";
import FilterBox from "./filterBox";

export default class Filter {
    constructor() {
        this.currentFilters = [];
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
                </div>` + this.renderModalFilter();
    }

    renderModalFilter() {
        return `
            <div class="jstable-yowxtedf2" style="display: none">
                    <div class="jstable-yowxte3"></div>
                    <div class="jstable-yowxte4 w800 xview" style="display: none">
                           <div class="jstable-yowxte5">
                               <h3 class="jstable-yowxte6"><img src="${icons.filterTop}"> Danh sách bộ lọc đã lưu</h3>
                               <button class="jstable-yowxte6 opsue">
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
                    <div class="jstable-yowxte4 w800 xedit">
                           <div class="jstable-yowxte5">
                               <h3 class="jstable-yowxte6 editl"><img src="${icons.filterTop}"> <span>Chỉnh sửa bộ lọc</span></h3>
                               <img class="jstable-yowxte75 dor" src="${icons.close}">         
                           </div>
                           <div class="jstable-yowxteds8">
                                <div class="jstable-fyowxteds8">
                                    <label class="jstable-yowxtedds8">Tên bộ lọc <span>*</span></label>
                                    <input class="jstable-yowxtreds8" placeholder="Tên lọc">
                                </div>
                                <div class="jstable-fyowxteds8">
                                    <label class="jstable-yowxtedds8">Mô tả</label>
                                    <input class="jstable-yowxt5xreds8" placeholder="Viết mô tả">
                                </div>
                                <div class="jstable-filebox" style="background-image: url('${icons.bg}')"></div>
                           </div>
                           <div class="jstable-yowxtee">
                               <button class="jstable-yowxteydrto">Đóng</button>
                               <button class="jstable-yowxteydrsto">Tạo bộ lọc</button>
                           </div>
                    </div>
                </div>
        `
    }


    init(table, container, options = {filters: [], filtersSaved: []}) {
        this.container = container;
        this.table = table;
        this.filtersSaved = options.filtersSaved;
        this.filterBox = options.filterBox;
        this.elements = {
            buttonFilterSave: this.container.querySelector('.jstable-jhiypfeyrvk'),
            buttonOpenFilterSave: this.container.querySelector('.jstable-jhiypfey5'),
            listFilterSave: this.container.querySelector('.jstable-jhiypfeyr3d'),
            containerFilterSave: this.container.querySelector('.jstable-jhiypfeyr'),
            tableSaveFilter: this.container.querySelector('.jstable-yowxterhyo'),
            modalSaveFilter: this.container.querySelector('.jstable-yowxtedf2'),
            modalCloseSaveFilter: this.container.querySelector('.jstable-yowxteydrt'),
            filterBoxContent: this.container.querySelector('.jstable-filebox'),
            inputName: this.container.querySelector('.jstable-yowxtreds8'),
            inputDesc: this.container.querySelector('.jstable-yowxt5xreds8'),
            btnSave: this.container.querySelector('.jstable-yowxteydrsto'),
            btnClose: this.container.querySelector('.jstable-yowxteydrto'),
            viewModal: this.container.querySelector('.jstable-yowxte4.xview'),
            editModal: this.container.querySelector('.jstable-yowxte4.xedit'),
            titleEditModal: this.container.querySelector('.jstable-yowxte6.editl>span'),
            buttonAdd: this.container.querySelector('.opsue'),
            closeModalEdit: this.container.querySelector('.jstable-yowxte75.dor'),
        }
        this.modalFilterBox = new FilterBox();
        this.elements.filterBoxContent.innerHTML = this.modalFilterBox.render();
        this.modalFilterBox.init(this.table, this.elements.filterBoxContent, {
            filters: options.filters
        });

        this.renderFilterSaveList();
        this.openView();
        this.events();
    }

    openView() {
        this.elements.viewModal.style.display = 'block';
        this.elements.editModal.style.display = 'none';
    }

    openEdit(mode, filter) {
        this.selectedFilter = filter;
        this.mode = mode;
        this.elements.viewModal.style.display = 'none';
        this.elements.editModal.style.display = 'block';
        this.modalFilterBox.setViewOnly(true);
        if (mode === 'view') {
            this.elements.titleEditModal.innerText = filter.name;
            this.elements.inputName.value = filter.name;
            this.elements.inputDesc.value = filter.description;
            this.modalFilterBox.currentFilters = filter.filters;
            this.modalFilterBox.renderCurrentFilters();
            this.modalFilterBox.setViewOnly(false);
            this.elements.btnSave.style.display = 'none';
        }
        if (mode === 'edit') {
            this.elements.titleEditModal.innerText = 'Chỉnh sửa bộ lọc';
            this.elements.inputName.value = filter.name;
            this.elements.inputDesc.value = filter.description;
            this.modalFilterBox.currentFilters = filter.filters;
            this.modalFilterBox.renderCurrentFilters();
            this.elements.btnSave.style.display = 'block';
            this.elements.btnSave.innerText = 'Cập nhật';
        }
        if (mode === 'add') {
            this.elements.titleEditModal.innerText = 'Tạo mới bộ lọc';
            this.elements.inputName.value = '';
            this.elements.inputDesc.value = '';
            this.elements.btnSave.style.display = 'block';
            this.elements.btnSave.innerText = 'Tạo bộ lọc';
        }
    }

    updateFiltersSaved(filtersSaved) {
        this.filtersSaved = filtersSaved;
        this.renderFilterSaveList();
    }

    renderFilterSaveList() {
        this.elements.tableSaveFilter.innerHTML = '';
        this.elements.listFilterSave.innerHTML = '';
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

                img.addEventListener('click', () => {
                    this.openEdit('edit', value);
                });
                td1.addEventListener('click', () => {
                    this.openEdit('view', value);
                });

            })
        }
    }

    loadInfo() {
        const info = this.table.page.info();
    }


    applyFilterSave(ft) {
        this.filterBox.currentFilters = ft.filters;
        this.toggleFilterSaveContent(false);
        this.filterBox.renderCurrentFilters();
    }

    events() {
        this.table.on('draw.dt', () => {
            this.loadInfo();
        });


        this.elements.buttonOpenFilterSave.addEventListener('click', (evt) => {
            this.toggleFilterSaveContent(true);
            this.openView();
        });
        this.elements.buttonFilterSave.addEventListener('click', (evt) => {
            this.toggleModalSave(true);
        });
        this.elements.btnClose.addEventListener('click', (evt) => {
            this.toggleModalSave(false);
        });
        this.elements.modalCloseSaveFilter.addEventListener('click', (evt) => {
            this.toggleModalSave(false);
        });
        this.elements.closeModalEdit.addEventListener('click', (evt) => {
            this.toggleModalSave(false);
        });

        document.querySelector('body').addEventListener('click', (evt) => {
            if (!evt.path.find(x => (x === this.elements.listFilterSave) || (x === this.elements.buttonOpenFilterSave))) {
                this.toggleFilterSaveContent(false);
            }
        });
        this.elements.buttonAdd.addEventListener('click', () => {
            this.openEdit('add', null);
        });
        this.elements.btnSave.addEventListener('click', () => {
            this.selectedFilter.filters = this.modalFilterBox.currentFilters;
            this.selectedFilter.name = this.elements.inputName.value;
            this.selectedFilter.description = this.elements.inputDesc.value;
            this.onUpdateFilterSavedCallback ? this.onUpdateFilterSavedCallback({
                mode: this.mode,
                value: this.selectedFilter
            }) : null;
            this.openView();
            this.renderFilterSaveList();
        });
    }

    onUpdateFilterSaved(callback) {
        this.onUpdateFilterSavedCallback = callback;
    }

    toggleFilterSaveContent(show) {
        this.elements.containerFilterSave.style.display = show ? 'block' : 'none';
    }

    toggleModalSave(show) {
        this.elements.modalSaveFilter.style.display = show ? 'flex' : 'none';
    }

}
