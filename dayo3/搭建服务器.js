const http = require('http');
//创建服务器
const server = http.createServer();
//绑定request事件
server.on('request', (req, res) => {
        res.writeHeader(200, {
            'Content-Type': 'text/plain;charset=utf-8'
        })
        const url = req.url
        if (url === '/' || url === '/index.js') {
            res.end('首页')
        } else if (url === '/about.js') {
            res.end('关于');
        } else {
            res.end('请求的内容不存在！')
        }

    })
    //开启服务器
server.listen(3000, '127.0.0.1', function() {
    console.log('server running at http://127.0.0.1:3000')
})