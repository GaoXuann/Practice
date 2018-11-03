//导入Express
const exp = require('express');
const app = exp();
app.get('/', (req, res) => {
    res.send('你好')
})
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})