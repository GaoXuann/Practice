//导入express
const exp = require('express')
    //调用exp创建服务器
const app = exp();

app.get('/', (req, res) => {
    res.send({ name: 'zs', age: 18 })
        // res.send(['zs', 28])
        // res.send('ok')
})
app.listen('3000', () => {
    console.log('http://127.0.0.1:3000')
})