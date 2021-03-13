import icons from "./icons";
import JsSelect from "js-select-hd";

export default class FilterBox {
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
            </div>`;
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

  setViewOnly(show) {
    if (show) {
      this.elements.btnFilter.style.display = 'flex';
      this.elements.saveAllFilter.style.display = 'block';
    } else {
      this.elements.btnFilter.style.display = 'none';
      this.elements.saveAllFilter.style.display = 'none';
    }
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

    this.elements.removeAllFilter.addEventListener('click', () => {
      this.currentFilters = [];
      this.renderCurrentFilters();
      this.toggleFilterContent(false);
    });
    this.elements.saveAllFilter.addEventListener('click', () => {
      if (this.onSaveCallback) {
        this.onSaveCallback(this.currentFilters);
      }
    });

    document.querySelector('body').addEventListener('click', (evt) => {
      if (!evt.path.find(x => (x === this.elements.filterContent) || (x === this.elements.btnFilter))) {
        this.toggleFilterContent(false);
      }
    })
  }

  toggleFilterContent(show) {
    this.elements.filterContent.style.display = show ? 'block' : 'none';
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

  onSave(callback) {
    this.onSaveCallback = callback;
  }
}
