const express = require('express')
const bodyParse = require('body-parser')
const app = express()

//注册body-parse中间件，来解析post提交过来得表单数据
app.use(bodyParse.urlencoded({ extended: false }))


//监听客户端得get请求
// http://127.0.0.1:3000/user?id=1
// { id: '1' }
app.get('/user', (req, res) => {
    //服务器可以直接通过req.query属性来获取到客户端提交给服务器得参数
    console.log(req.query)
    res.send('ok')
})

// url 规则中：表示参数项
// http://127.0.0.1:3000/user/1/zs
// { id: '1', name: 'zs' }
app.get('/user/:id/:name', (req, res) => {
        console.log(req.params)
        res.send('success')
    })
    //如果想要用req.body拿到客户端提交的表单数据，必须要先注册
app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('yes')
})
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})