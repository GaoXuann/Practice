//导入express模块
const express = require('express')
    //创建express的服务器实例
const app = express()

//导入sql模块
const mysql = require('mysql')
    //创建mysql的连接对象
const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'uesrs'
    })
    //直接调用conn.query('要执行得sql语句‘，（err,result）=>{})

//查询
// const sqlStr1 = 'select * from hero'
// conn.query(sqlStr1, (err, result) => {
//         if (err) return console.log('获取数据失败' + err.message)
//         console.log(result)
//     })


//新增得语法特殊，用set
// insert into hero value (1,'we','d','eq')
// const sqlInsert = "insert into hero set ?"
// const user = { name: 'zd', age: 3, gender: 'boy', ctime: '2018-11-3 18:55:10', isDel: 0 }
// conn.query(sqlInsert, user, (err, result) => {
//     if (err) return console.log('增加数据失败' + err.message)
//     console.log(result)
// })

//修改
// const sqlUpdate = 'update hero set ? where id = ?'
// const user = { name: 'xx', age: 2, id: 1 }
// conn.query(sqlUpdate, [user, user.id], (err, data) => {
//         if (err) return console.log('数据更新失败' + err.message)
//         console.log(data)
//     })

//修改
// const sqlUpdate = 'update hero set ? where id = ?'
// const user = { name: 'xx', age: 2 }
// conn.query(sqlUpdate, [user, 2], (err, data) => {
//         if (err) return console.log('数据更新失败' + err.message)
//         console.log(data)
//     })



//删除
const sqlDel = 'delete from hero where id=?'
conn.query(sqlDel, 1, (err, data) => {
        if (err) return console.log('删除数据失败' + err.message)
        console.log(data)
    })
    //调用app.listen方法，指定端口号并启动web服务器
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})