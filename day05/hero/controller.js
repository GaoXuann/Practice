//业务处理模块
const conn = require('./db.js')

module.exports = {
    //测试API
    testAPI: (req, res) => {
        res.send('后台接口连接成功')
    },
    //查询所有英雄api
    selAllHero: (req, res) => {
        const allSql = "select * from hero"
        conn.query(allSql, (err, result) => {
            if (err) res.send({ status: 500, msg: err.message, data: null })
            res.send({ status: 200, msg: 'ok', data: result })
            console.log(result)
        })
    },
    //根据id查询英雄Api
    getHero: (req, res) => {
        const id = req.params.id
        const selSql = "select * from hero where id = ?"
        conn.query(selSql, id, (err, data) => {
            if (err) res.send({ status: 500, msg: err.message, result: null })
            res.send({ status: 200, msg: 'ok', result: null })
            console.log(data)
        })
    },
    //添加英雄api
    insertHero: (req, res) => {
        const hero = req.body
        const date = new Date()
        const y = date.getFullYear()
        const m = (date.getMonth() + 1).toString().padStart(2, '0')
        const d = (date.getDate()).toString().padStart(2, '0')
        const hh = (date.getHours()).toString().padStart(2, '0')
        const mm = (date.getMinutes()).toString().padStart(2, '0')
        const ss = (date.getSeconds()).toString().padStart(2, '0')
            // console.log(typeof(y));
        hero.ctime = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
            // console.log(hero)
        const addSql = "insert into hero set ?"
        conn.query(addSql, hero, (err, data) => {
            if (err) res.send({ status: 500, msg: err.message, result: null })
            res.send({ status: 200, msg: 'ok', result: data })
        })
    },
    //修改
    upHero: (req, res) => {
        // req.params用来获取xxx/:id格式的id
        const id = req.params.id
        const newInfo = req.body
        console.log(newInfo)
        console.log(id)
        const upSql = "update hero set ? where id = ?"
        conn.query(upSql, [newInfo, id], (err, data) => {
            if (err) res.render({ status: 500, msg: err.message, result: null })
            res.send({ status: 200, mgs: 'ok', result: null })
        })
    },
    delHero: (req, res) => {
        const id = req.params.id
        const delSql = "update hero set isDel = 1 where id = ?"
        conn.query(delSql, id, (err, data) => {
            if (err) res.send({ status: 500, msg: err.message, result: null })
            res.send({ status: 200, msg: 'ok', result: null })
        })
    }
}