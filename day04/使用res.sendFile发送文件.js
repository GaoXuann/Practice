const express = require('express')
const path = require('path')
const app = express();
app.get('/', (req, res) => {
    //如果sendFile只给一个参数那么这个参数为绝对路径
    // res.sendFile(path.join(__dirname, './views/index.html'))
    // 有两个参数，第一个参数可以传递相对路径，第二个参数必须是绝对路径
    res.sendFile('./views/index.html', { root: __dirname })
})
app.get('/movie', (req, res) => {
    res.sendFile(path.join(__dirname, './views/movie.html'))
})
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})