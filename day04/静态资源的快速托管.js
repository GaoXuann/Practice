const express = require('express')
const app = express();
//app.use() 注册中间件
//express.static()方法，可以把指定的目录下的文件可以直接被浏览器来访问
app.use('/page', express.static('./views'))
app.listen('3000', () => {
    console.log('http://127.0.0.1:3000')
})