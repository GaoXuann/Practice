## node day02 ##

### fs模块 ###

#### stat方法 ####

获取文件或目录的信息

参数1: 要获取的文件或目录的路径

参数2: 回调函数, 回调函数中有两个参数, 第一个是错误信息err, 第二个是文件或目录的信息对象stats

在stats对象中可以通过以下属性和方法获取信息:

	stats.birthtime 创建日期, 默认显示格林威治时区
	stats.size 大小
	stats.isFile() 判断是否为文件
	stats.isDirectory() 判断是否为目录 

#### copyFile方法 ####

复制文件

参数1: 要拷贝的源文件路径

参数2: 目的地

参数3: 回调函数, 回调函数中有一个参数err, 用于判断是否拷贝成功

如果目的地文件已存在, 会直接覆盖

### path模块 ###

join方法 : 用来拼接路径片段

参数1: 可变参数(可以传1-N个参数), 路径片段

	path.join('/foo', 'bar', './baz/asdf', 'quux', '..');
	// 返回: '/foo/bar/baz/asdf'

在路径片段中支持.和..操作, 分别表示当前目录和上一级目录, 传入的参数必须是字符串, 返回的结果也是字符串(拼接好的路径)

### CommonJS规范 ###

node.js实现了CommonJS规范, 在CommonJS规范中要求有:

1. require函数
2. exports对象
3. module对象

注意: 模块加载是同步的, 因为在服务器端开发模块都是下载到本地的, 加载速度非常快, 所以此规范不适用于浏览器中开发

### 作用域 ###

一个js文件可以理解为一个模块, 每个模块都有自己私有的作用域, 被称为模块作用域

#### 全局作用域 ####

在模块中的global对象就是全局作用域, 如果需要将模块1中的成员共享给模块2中使用, 可以选择在模块1中将成员挂载到global对象中:

模块1.js:

	var a = 10
	global.a = a

在模块2中要先引入模块1.js, 才可以使用global.a

模块2.js:

	const m1 = require('./01.模块1.js')
	console.log(global.a)

在开发过程中不建议在全局作用域中挂载成员, 避免全局作用域的污染

#### 模块作用域 ####

每个js文件内部都是单独的模块作用域, 每个模块作用域相互无法访问对方的方法或属性

模块与模块之间共享成员

`exports`

如果需要导出本模块中的成员, 可以将需要导出的成员挂载到exports对象身上:

m1.js:

	var a = 1
	function sayHi() {}
	exports.a = a
	exports.sayHi = sayHi

其他模块导入

m2.js:

	const m1 = require('./m1.js')
	console.log(m1.a)
	m1.sayHi()

exports其实就是module.exports

但是更推荐使用module.exports, 因为导出成员时始终都是以module.exports为准

### 模块分类 ###

1. 核心模块
2. 第三方模块

### 包 ###

规范:

1. 包的根目录必须要有`package.json`
2. `package.json`中必须具备三个属性: `name` `version` `main`

		{
			"name": "pname",
			"version": 1.0.0,
			"main": "./lib/main.js"
		}

导入包有两种方式:

1. 路径标识符

		// 找到当前目录的calc包中的package.json的main属性对应的js文件, 将其引入
		const calc = require('./calc')

2. 包名标识符

	在当前目录中有一个node_modules目录, 将你需要的包放在该目录中, 此时引入包可以使用包名来引入

		// 去当前目录的node_modules目录中找一个叫calc的文件夹, 再去其中的package.json中找main属性对应的js文件, 将其引入
		const calc = require('calc')

### npm ###

Node Package Manager (node包管理器)

常人提起npm一般指两个意思

1. 命令行工具 npm
2. npmjs.com 这个网站

### 全局安装 ###

`npm istall i5ting_toc -g`

以上指令会将i5ting_toc工具安装到当前操作系统的全局区域, 安装到全局后就可以使用该工具的指令完成一些操作

