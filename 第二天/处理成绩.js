let fs = require('fs')
    //读取成绩
fs.readFile(__dirname + '/成绩.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log('读取文件失败' + err.message)
    }
    // console.log(data);
    //将内容处理成标准格式
    let arr = data.split(' ');
    // console.log(arr);
    var array = [];
    arr.forEach(value => {
        if (value.length > 0) {
            var str = value.replace('=', ':');
            // console.log(str);
            array.push(str);
        }
    });
    console.log(array);
    var arrData = array.join('\n');
    fs.writeFile(__dirname + '/score.txt', arrData, 'utf-8', err => {
        if (err) return console.log('写入失败');
        console.log('写入成功');
    })
})