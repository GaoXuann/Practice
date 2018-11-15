## node day05 ##

### 两种获取get请求的参数方式 ###

1. 传统的query字段传参

	`http://127.0.0.1:3001/user?name=lxh&age=18`

	在express中获取方式: **req.query**

		app.get('/user', (req, res) => {
		  // 服务器，可以直接通过 req.query 属性，获取到客户端提交到服务器的 查询参数
		  console.log(req.query) // { name: 'lxh', age: '18' }
		  res.send('ok')
		})

		// 模拟客户端请求操作
		var name = 'lxh'
		var age = 18
		$.ajax({
			url: 'http://127.0.0.1:3001/user?name=' + name + '&age=' + age 
		})

2. Restful API设计规范传参

	例如: 

		https://github.com/TianchengLee/letao https://github.com/:username/:reponame  
		Restful API 设计规范

	`http://127.0.0.1:3001/user/1/lxh`

	在express中获取方式: **req.params**

		// URL 规则中的 : 表示参数项；
		app.get('/user/:id/:name', (req, res) => {
		  console.log(req.params) // { id: 1, name: lxh }
		  res.send('ok')
		})

		//模拟客户端请求操作
		var id = 1
		var name = 'lxh'
		$.ajax({
			url: 'http://127.0.0.1:3001/user/' + id + '/' + name
		})

### post请求获取表单提交的参数 ###

需要安装中间件: body-parser

该中间件的目的就是帮助我们把post请求的参数解析成对象, 挂载到req.body属性身上

最后可以在express中通过**req.body**获取到post请求提交的参数

body-parser的使用步骤:

1. 安装body-parser

	`npm install body-parser`

2. 在项目中引入body-parser

	`const bodyParser = require('body-parser')`

3. 使用express的app对象注册中间件

	`app.use(bodyParser.urlencoded({ extended: false }))`

当完成以上三步操作之后, 在req对象中就会有一个属性 body 可以获取post提交过来的表单数据

	// 监听客户端 post 请求
	app.post('/user', (req, res) => {
	  // 注意：如果在项目中，想要通过 req.body 获取客户端提交的表单数据，
	  // 必须 先注册 body-parser 中间件才可以！
	  console.log(req.body)
	  res.send('ok')
	})

### padStart()方法 ###

在字符串开头填充内容

参数1: 期望的长度

参数2: 填充的字符串内容

	let str = '9'
	// str: 09
	str = str.padStart(2, '0')