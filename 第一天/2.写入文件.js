const fs = require('fs')

fs.writeFile(__dirname + "/2.txt", '333', 'utf-8', err => {
    if (err) return console.log('文件写入失败' + err.message)
    console.log("文件写入成功")
    console.log(__dirname);
    console.log(__dirname + "/2.txt");
})