const fs = require('fs');
fs.writeFile('./1.txt', '222', 'utf-8', function(err) {
    if (err) return console.log('写入文件失败' + err.message);
    console.log('写入文件成功');
})