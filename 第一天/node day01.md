## Node.js day01 ##

### Node简介 ###

	node的JavaScript解析器就是V8引擎

	在node中没有DOM和BOM的概念, 由以下三部分组成:

		1. ECMAScript
		2. 全局成员
		3. 核心模块API

	学习目标: 使用node平台搭建一个后台服务器, 进行后端开发

REPL环境: Read Eval Print Loop  同浏览器控制台

### ES6语法介绍 ###

#### let关键字 ####

定义变量

因为`var`关键字存在一些问题:

1. 没有块级作用域

		for (var i = 0; i < 10; i++) {

		}

		console.log(i) // 10


2. 变量声明提升

		console.log(a); // undefined
		var a;

如果使用`let`关键字则不存在以上两个问题:

	
		for (let i = 0; i < 10; i++) {

		}

		console.log(i) // 报错: i is not defined


		console.log(a); // 报错: a is not defined
		let a;

总结: 使用`let`关键字声明变量的特点主要就是有块级作用域, 并且必须先声明再使用, 否则会报错, 没有变量声明提升的概念

#### const关键字 ####

定义常量

	const a = 10;  // 从此以后a不能被重新赋值

	a + 1; // 没有对a赋值 所以不会报错

	a += 1; // 报错: Assignment to constant variable

	const b; // 报错: Missing initializer in const declaration

总结:

1. 定义常量时必须要给初始值
2. 定义完常量后无法对常量进行重新赋值


let和const都必须要先声明再使用, 并且都不可以重复声明

#### 解构赋值 ####

解构赋值一般用于将对象中的属性值获取出来, 存在变量中使用

	let user = {
		name: '刘希晗',
		age: 18,
		gender: '男'
	}

	// 开发中如果需要将对象的属性值提取出来在变量中使用: 
	let uname = user.name;

	// ES6新语法, 将对象中属性批量提取到变量中:
	let { name:username, age } = user;
	console.log(username);
	console.log(age);

#### 箭头函数 ####

ES6中提出的一种新型匿名函数的语法:

也可以理解为一种语法糖

	let 函数名 = (形参1, 形参2) => {
 		// 函数体
	}

特点: **指向外部函数的this, 语法较为简单**

注意: 绑定事件时千万不要使用箭头函数, 因为使用function绑定事件处理函数, 内部的this指向事件源, 如果使用箭头函数绑定, 则不会指向事件源

箭头函数的几种变体:

1. 函数只有一个形参, 那么左侧的`()`可以省略

		let fn1 = (a) => {
			return a + 1;
		}

		let fn2 = a => {
			return a + 1;
		}

2. 函数体中只有一行代码, 那么右侧的`{}`可以省略并且省略`return`, 默认会返回右侧代码执行的结果

		let fn1 = (a, b) => {
			return a + b;
		}

		let fn2 = (a, b) => a + b
			
3. 结合以上两点, 如果只有一个形参, 并且函数体中只有一行代码, 那么两侧的`(){}`都可以省略

		let fn1 = (a) => {
			return a + 1;
		}

		let fn2 = a => a + 1

注意事项: 只有一个形参的情况下可以省略左侧的`()`, 其他情况有多个参数或者没有参数都必须加上`()`

#### 声明对象属性的简洁语法 ####

以前创建对象属性的字面量:

	var name = '刘希晗';
	var age = 18;
	var weight = 80;

	var user = {
		name: name,
		age: age,
		weight: weight,
		eat: function(food) {
			console.log('吃了十斤' + food);
		}
	}

ES6新语法:

	let name = '刘希晗';
	let age = 18;
	let weight = 80;
	let gender = '女';

	let user = {
		name,
		age,
		weight,
		gender,
		eat(food) {
			console.log('吃了十斤' + food);
		},
		sleep() {
			console.log('上课睡觉真舒服');
		}
	}


### 内置模块 ###

#### fs ####

fs模块: File System 文件系统, node提供用于操作文件或目录的API都在该模块中

1. 读取文件

		readFile()

		参数1: 要读取的文件路径, 如果是相对路径表示相对于当前执行node命令的路径, 而非相对当前文件, 如果需要相对当前文件路径, 请使用: __dirname进行拼接

		参数2: 编码, 一般情况都需要指定编码, 默认值为null

		参数3: 回调函数, 读取完文件后会执行, 有两个参数, 第一个参数为err, 第二个参数是读取的数据data

2. 写入文件, 会覆盖文件

		writeFile()

		参数1: 要读取的文件路径, 如果是相对路径表示相对于当前执行node命令的路径, 而非相对当前文件, 如果需要相对当前文件路径, 请使用: __dirname进行拼接

		参数2: 要写的数据内容

		可选参数3: 编码, 默认为utf8, 一般就使用默认的

		参数4: 回调函数, 写入完文件后会执行, 有一个参数err写入失败时会有数据, 如果err为null表示写入成功

3. 追加文件, 在文件末尾继续追加

		appendFile()

		参数1: 要读取的文件路径, 如果是相对路径表示相对于当前执行node命令的路径, 而非相对当前文件, 如果需要相对当前文件路径, 请使用: __dirname进行拼接

		参数2: 要写的数据内容

		可选参数3: 编码, 默认为utf8, 一般就使用默认的

		参数4: 回调函数, 写入完文件后会执行, 有一个参数err写入失败时会有数据, 如果err为null表示写入成功

写入文件和追加文件都有共同的特点, 如果要写入的目录下文件不存在, 会自动创建文件并写入/追加

全局成员: __dirname, 获取当前文件所在的绝对路径

因为在node中使用相对路径都是相对于当前执行node指令的目录, 所以才会有__dirname和__filename的存在
