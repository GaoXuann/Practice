const express = require('express')
const app = express();
app.set('view engine', 'ejs')
app.set('views', './Ejs')
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'zs', age: '18', hobby: ['吃饭', '睡觉', '打豆豆'] })
})
app.listen(3000, () => {
    console.log('http:/127.0.0.1:3000')
})