//导入express
const exp = require('express')
    //调用express()创建服务器
const app = exp()

//调用app.get()方法，来监听客户端
app.get('/', (req, res) => {
    res.send('你好')
})
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})