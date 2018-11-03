const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')

// 注册 body-parser 中间件，来解析Post提交过来的表单数据
app.use(bodyParser.urlencoded({ extended: false }))
    // 创建数据库连接
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'uesrs'
})
app.get('/', (req, res) => {
        res.send('后台接口连接成功')
    })
    //对外暴露getHero接口
app.get('/getHero', (req, res) => {
    const selSql = "select * from hero"
    conn.query(selSql, (err, result) => {
        if (err) res.send({ status: 500, msg: err.message, data: null })
        res.send({ status: 200, msg: 'ok', data: result })
        console.log(result)
    })
})


//对外暴露添加英雄的API接口
app.post('/addHero', (req, res) => {
    // const addSql = "insert into hero set ?"
    const hero = req.body
    const date = new Date()
    const y = date.getFullYear()
    const m = (date.getMonth() + 1).toString().padStart(2, '0')
    const d = (date.getDay()).toString().padStart(2, '0')
    const hh = (date.getHours()).toString().padStart(2, '0')
    const mm = (date.getMinutes()).toString().padStart(2, '0')
    const ss = (date.getSeconds()).toString().padStart(2, '0')
        // console.log(typeof(y));

})

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})