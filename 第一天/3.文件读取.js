const fs = require('fs');
fs.readFile(__dirname + '/2.txt', 'utf-8', (error, data) => {
    if (error) return console.log('文件读取成功' + error.message)
    console.log(data);
})