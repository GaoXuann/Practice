const express = require('express')

const app = express()

// 1. 导入路由对象
const router = require('./路由模块.js')
    // 2. 调用 app.use 方法，安装路由模块
app.use(router)

app.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000')
})