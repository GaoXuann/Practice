// 这是定义了一个路由模块，专门负责创建路由对象，并挂载路由规则
const express = require('express')

// 调用 express.Router() 方法，创建路由对象
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

router.get('/movie', (req, res) => {
    res.sendFile('./views/movie.html', { root: __dirname })
})



// 最后，一定要把路由对象导出，供外界使用
module.exports = router