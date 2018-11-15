const express = require('express')
const bodyParser = require('body-parser')
const app = express()


// 注册 body-parser 中间件，来解析Post提交过来的表单数据
app.use(bodyParser.urlencoded({ extended: false }))

//安装跨域模块
const cors = require('cors')
app.use(cors())
    //导入自己的路由模块
const router = require('./router.js')
    //注册路由模块
app.use(router)
app.listen(3001, () => {
    console.log('http://127.0.0.1:3001')
})