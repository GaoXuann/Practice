const express = require('express')
const router = express.Router()

const ctrl = require('./controller.js')
router.get('/', ctrl.testAPI)

//对外暴露getHero接口,获取所有英雄列表
router.get('/getAllHero', ctrl.selAllHero)

//根据id来获取英雄列表
router.get('/getHero/:id', ctrl.getHero)

//对外暴露添加英雄的API接口
router.post('/addHero', ctrl.insertHero)


//对外暴露根据id来修改英雄的API接口
router.post('/upHero/:id', ctrl.upHero)


//根据id软删除英雄
router.get('/delHero/:id', ctrl.delHero)


module.exports = router