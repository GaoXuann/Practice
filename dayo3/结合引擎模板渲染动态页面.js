const http = require('http')
const template = require('art-template')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url;
    console.log(url)

    if (url == '/') {
        const html = template(path.join(__dirname, '/view/index.html'), { name: 'zs', age: '18', hobby: ['看书', '唱歌', '跳舞'] })
        res.end(html)
        console.log(html)
    }
})
server.listen(3000, () => {
    console.log('server running as http://127.0.0.1:3000')
})