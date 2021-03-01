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
            modalSubmit: this.container.querySelector('.jstable-yowxtel'),
            colsSum: this.container.querySelector('.jstable-jhiypfeojub'),
            colsCurrent: this.container.querySelector('.jstable-jhiypfeojtr'),
        }

        this.renderColumn();
        this.events();
    }

    toggleModel(show) {
        this.elements.modal.style.display = show ? 'flex' : 'none';
    }

    toggleView() {

    }

    togglePin() {

    }

    renderColumn() {
        this.columns = this.columns.map((column, index) => {
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
            const pin = row4.querySelector('img');
            const eye = row3.querySelector('img');
            column.element = {row1, row2, row3, row4, li, pin, eye};
            //pin
            pin.addEventListener('click', () => {
                if (column.pined) {
                    column.pined = false;
                    pin.classList.remove('jdtb-pined');
                    pin.setAttribute('src', icons.pin);
                } else {
                    column.pined = true;
                    pin.classList.add('jdtb-pined');
                    pin.setAttribute('src', icons.pined);
                }
            });
            eye.addEventListener('click', () => {
                if (column.hidden) {
                    column.hidden = false;
                    eye.classList.remove('jdtb-hidden');
                    eye.setAttribute('src', icons.eye);
                    li.classList.remove('jstb-hide');
                } else {
                    column.hidden = true;
                    eye.classList.add('jdtb-hidden');
                    eye.setAttribute('src', icons.noneEye);
                    li.classList.add('jstb-hide');
                }
            });
            column.index = index;
            return column;
        });
        var sortable = Sortable.create(this.elements.columns);
        this.elements.colsSum.innerText = this.columns.length;
        this.elements.colsCurrent.innerText = this.columns.filter(x => !x.hidden).length;


    }

    loadInfo() {
        const info = this.table.page.info();

    }

    submitSetting() {
        //Sort
        const elms = this.container.querySelectorAll("ul.jstable-yowxteo > li > span:nth-child(1) > i");
        let order = [];
        elms.forEach(value => {
            order.push(parseInt(value.innerText));
        });
        this.table.colReorder.reset();
        this.table.colReorder.order(order);
        //Visible
        this.columns.map(value => {
            this.table.column(value.index).visible(!value.hidden);
        });
        this.elements.colsSum.innerText = this.columns.length;
        this.elements.colsCurrent.innerText = this.columns.filter(x => !x.hidden).length;

        let totalWidth = 0;
        let maxWidth = this.table.currentDom.clientWidth;
        let count = this.columns.filter(x => !x.hidden).length;
        this.columns.filter(x => !x.hidden).map((x) => totalWidth += x.width);
        let sizePadding = (maxWidth - totalWidth) / (count - 1);
        console.log(totalWidth, maxWidth);
        console.log(sizePadding);
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
        this.elements.modalSubmit.addEventListener('click', () => {
            this.submitSetting();
            this.toggleModel(false);
        })
        this.elements.openSetting.addEventListener('click', () => {
            this.toggleModel(true);
        })
    }
}
