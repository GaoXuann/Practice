const mysql = require('mysql')
    // 创建数据库连接
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'uesrs'
})
module.exports = conn