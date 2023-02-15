/* 
 创建一个“广州”节点，添加到#city下
 将“广州”节点插入到#bj前面
 使用“广州”节点替换#bj节点
 删除#bj节点
 读取#city内的HTML代码
 设置#bj内的HTML代码
 */

// 创建一个“广州”节点，添加到#city下
var btn01 = document.getElementById("btn01");
btn01.onclick = function() {

	// document.createElement();
	// 	可以用于创建一个元素节点对象
	// 	它需要一个标签名作为参数，将会根据该标签名创建元素节点对象
	// 并将创建好的对象作为返回值返回
	var li = document.createElement("li");
	// 创建广州文本节点
	// document.createTextNode();
	// 	可以用来创建一个文本节点对象
	// 	需要一个文本内容作为参数，将会根据该内容创建文本节点，并将新节点返回

	var gzText = document.createTextNode("广州");
	console.log(li);
	console.log(gzText);

	// 将gzText设置li的子节点
	// appendChild()
	// 	向一个父节点中添加一个新的子节点
	// 		语法：父元素.appendChild(子节点)
	li.appendChild(gzText);

	// 获取id为city的节点
	var city = document.getElementById("city");
	city.appendChild(li);
}

// 将“广州”节点插入到#bj前面
var btn02 = document.getElementById("btn02");
btn02.onclick = function() {
	var li = document.createElement("li");
	var gzText = document.createTextNode("广州");
	li.appendChild(gzText);
	// 获取id为bj的节点
	var bj = document.getElementById("bj");
	// 获取父节点city
	var city = document.getElementById("city");

	// insertBefore()
	// 可以在指定的子节点前插入新的子节点
	// 语法
	// 	父节点.insertBefore(新节点,旧节点);
	city.insertBefore(li, bj);
}

//  使用“广州”节点替换#bj节点
var btn03 = document.getElementById("btn03");
btn03.onclick = function() {
	var li = document.createElement("li");
	var gzText = document.createTextNode("广州");
	li.appendChild(gzText);
	// 获取id为bj的节点
	var bj = document.getElementById("bj");

	// 获取父节点city
	var city = document.getElementById("city");
	// replaceChild()
	// 	可以使用指定的子节点替换已有的子节点
	// 		语法：父节点.replaceChild(新节点,旧节点);
	city.replaceChild(li, bj);
}

//  删除#bj节点
var btn04 = document.getElementById("btn04");
btn04.onclick = function() {
	var bj = document.getElementById("bj");
	var city = document.getElementById("city");

	// removeChild()
	// 	可以删除一个子节点
	// 	语法：父节点.removeChild(子节点);
	// city.removeChild(bj);

	// parentNode通过子元素获取父元素
	// 语法	子节点.parentNode
	bj.parentNode.removeChild(bj);
}

//  读取#city内的HTML代码
var btn05 = document.getElementById("btn05");
btn05.onclick = function() {
	var city = document.getElementById("city");
	console.log(city.innerHTML);
}

//  设置#bj内的HTML代码
var btn06 = document.getElementById("btn06");
btn06.onclick = function() {
	var bj = document.getElementById("bj");
	bj.innerHTML = "济南";
}

// innerHTML
// 创建一个“广州”节点，添加到#city下
// 使用innerHTML也可以实现增删改查的功能
var btn07 = document.getElementById("btn07");
btn07.onclick = function() {
	var city = document.getElementById("city");
	// city.innerHTML += "<li>济南</li>";
	// 不推荐使用这种方式，一般我们会两种方式结合使用
	
	var li = document.createElement("li");
	li.innerHTML = "广州";
	city.appendChild(li);
}
