const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer();
server.on('request', (req, res) => {
    const url = req.url;
    console.log(url)
    if (url == '/' || url == '/index.html') {
        fs.readFile(path.join(__dirname, '/view/index.html'), 'utf-8', (err, data) => {
            if (err) return res.end('404.Not found')
            res.end(data)
                // console.log(data);
        })
    } else if (url === '/index.css') {
        fs.readFile(path.join(__dirname, '/view/index.css'), 'utf-8', (err, data) => {
            if (err) return res.end('404')
            res.end(data)
        })
    } else if (url === '/second.js') {
        fs.readFile(path.join(__dirname, '/view/second.js'), 'utf-8', (err, data) => {
            if (err) return res.end('404')
            res.end(data)
        })
    }
})
server.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})