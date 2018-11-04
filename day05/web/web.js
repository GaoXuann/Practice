//导入express模块
const express = require('express')
    //创建express服务器实例
const app = express()

app.use(express.static('./views'))
app.use(express.static('./semantic'))
app.use(express.static('./node_modules'))


//调用app.listen，指定端口号并启动服务器
app.listen(5000, () => {
    console.log('http://127.0.0.1:5000')
})