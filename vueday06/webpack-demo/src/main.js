// ES6 的模块化语法导入jQuery
// import 导入的库对象的变量名
// from 可以写具体的路径, 也可以写包名 如果写的是包名就会去 /node_modules 中查找
import $ from 'jquery'

// import 除了可以导入 js 模块  还可以导入css文件
// import css路径
import './css/index.css'

// 还可以导入less文件  同css
import './css/test.less'

// 同样可以导入scss
import './css/demo.scss'


$(function () {  
  $('ul>li:odd').css('backgroundColor', 'green')
  $('ul>li:even').css('backgroundColor', 'purple')
})