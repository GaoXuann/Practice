const fs = require('fs')
const http = require('http')
const path = require('path')
    //创建服务器
const server = http.createServer();
//绑定事件
server.on('request', (req, res) => {
    var url = req.url;
    console.log(url)
    if (url == '/') url = "/view/index.html"
    fs.readFile(path.join(__dirname, url), (err, buf) => {
        if (err) return res.end('读取文件失败')
        res.end(buf)
            // console.log(buf)
    })
})
server.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})