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
	var city = document.getElementById("city");

	var li = document.createElement("li");
	var gzText = document.createTextNode("广州");

	li.appendChild(gzText);

	city.appendChild(li);
}

// 将“广州”节点插入到#bj前面
var btn02 = document.getElementById("btn02");
btn02.onclick = function() {
	var city = document.getElementById("city");
	var bj = document.getElementById("bj");

	var gz = document.createElement("li");
	var gzText = document.createTextNode("广州");

	gz.appendChild(gzText);
	city.appendChild(gz);

	city.insertBefore(gz, bj)
}

//  使用“广州”节点替换#bj节点
var btn03 = document.getElementById("btn03");
btn03.onclick = function() {
	var city = document.getElementById("city");
	var bj = document.getElementById("bj");

	var gz = document.createElement("li");
	var gzText = document.createTextNode("广州");

	gz.appendChild(gzText);

	city.replaceChild(gz, bj);
}

//  删除#bj节点
var btn04 = document.getElementById("btn04");
btn04.onclick = function() {
	var city = document.getElementById("city");
	var bj = document.getElementById("bj");
	// city.removeChild(bj);
	
	bj.parentNode.removeChild(bj);
}

//  读取#city内的HTML代码
var btn05 = document.getElementById("btn05");
btn05.onclick = function() {
	var bj = document.getElementById("bj");
	console.log(bj.innerHTML);
}

//  设置#bj内的HTML代码
var btn06 = document.getElementById("btn06");
btn06.onclick = function() {
	var bj = document.getElementById("bj");
	bj.innerHTML = "济南";
}


