import icons from "./icons";
import Sortable from 'sortablejs';

export default class Column {
    constructor() {
    }

    render() {
        return `<div class="jstable-jhiypfeoj">
                    <div class="jstable-jhiypfeojt">
                        <span class="jstable-jhiypfeojtr">0</span>
                        <span class="jstable-jhiypfeojuy">/</span>
                        <span class="jstable-jhiypfeojub">0</span>
                        <span class="jstable-jhiypfeoju3">cột</span>
                        <img class="jstable-jhiypfeojre" src="${icons.setting}">
                    </div>
                </div>
                <div class="jstable-yowxte2" style="display: none">
                    <div class="jstable-yowxte3"></div>
                    <div class="jstable-yowxte4">
                           <div class="jstable-yowxte5">
                               <h3 class="jstable-yowxte6"><img src="${icons.setting}"> Cấu hình cột thông tin</h3>
                               <img class="jstable-yowxte7" src="${icons.close}">      
                           </div>
                           <div class="jstable-yowxte8">
                                <ul class="jstable-yowxte9">
                                    <li>STT</li>
                                    <li>Tên cột</li>
                                    <li>Hiển thị</li>
                                    <li>Cố định</li>
                                </ul>
                                <ul class="jstable-yowxteo">
                                    
                                </ul>
                           </div>
                           <div class="jstable-yowxtee">
                               <button class="jstable-yowxtey">Đóng</button>
                               <button class="jstable-yowxtel">Lưu</button>
                           </div>
                    </div>
                </div>
                `;
    }


    init(table, container, options = {columns: []}) {
        this.container = container;
        this.table = table;
        this.columns = options.columns;
        this.elements = {
            columns: this.container.querySelector('.jstable-yowxteo'),
            modal: this.container.querySelector('.jstable-yowxte2'),
            modalCancel: this.container.querySelector('.jstable-yowxtey'),
            modalClose: this.container.querySelector('.jstable-yowxte7'),
            openSetting: this.container.querySelector('.jstable-jhiypfeojre'),
        }

        this.renderColumn();
        this.events();
    }

    toggleModel(show) {
        this.elements.modal.style.display = show ? 'flex' : 'none';
    }

    renderColumn() {
        this.columns.map((column, index) => {
            const li = document.createElement('li');
            const row1 = document.createElement('span');
            const row2 = document.createElement('span');
            const row3 = document.createElement('span');
            const row4 = document.createElement('span');
            li.appendChild(row1);
            li.appendChild(row2);
            li.appendChild(row3);
            li.appendChild(row4);
            row1.innerHTML = `<img src="${icons.sort}"> <i>${index}</i>`;
            row2.innerHTML = column.title;
            row3.innerHTML = `<img src="${icons.eye}">`;
            row4.innerHTML = `<img src="${icons.pin}">`;

            this.elements.columns.appendChild(li);
        });
        var sortable = Sortable.create(this.elements.columns);
        console.log(sortable);
    }

    loadInfo() {
        const info = this.table.page.info();
    }

    events() {
        this.table.on('draw.dt', () => {
            this.loadInfo();
        });
        this.elements.modalCancel.addEventListener('click', () => {
            this.toggleModel(false);
        });
        this.elements.modalClose.addEventListener('click', () => {
            this.toggleModel(false);
        })
        this.elements.openSetting.addEventListener('click', () => {
            this.toggleModel(true);
        })
    }
}
