# jsTable
## Install

Install with javascript
```
<script src="dist/jstable.js"></script>
```


## Usage
Js Render
```js
<script src="dist/jsselect.js"></script>
<script>
    const jsTable = new JSTable('#js-table', {
        columns: [
            {
                "data": "", // Mã của trường
                "title": "", // Tiêu đề hiển thị
                "width": 0, // Độ rộng cột
            },
            //...
        ],
        filters: [
            {
                id: '', // Mã bộ lọc
                name: '', // Tên bộ lọc
                type: 'range',  //Loại bộ lọc gồm: range, selection, option tương ứng vs 3 bộ lọc trong desgin
                options:[
                    {id:'',name:''}, // Giá trị trên bộ lọc
                ]
            },
            //...
        ]
    });
    // Đặt dữ liệu cho bảng
    jsTable.setData(data);
    
    // Khi cập nhật cột, kéo thả, gim
    jsTable.onUpdateColumns((columns)=>{
        console.log('new columns', columns)
    })
</script>
```

## Event
#### onUpdateColumns(callback): 
- callback(columns)

## Save


See the [CONTRIBUTING Guidelines](https://github.com/hoangdaicntt/js-select/blob/master/CONTRIBUTING.md)

## License

MIT © [HoangDaiCntt](https://hoangdaicntt.com)
