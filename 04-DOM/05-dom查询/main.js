/* 
			查找#bj节点	
			查找所有li节点
			查找name=gender的所有节点
			查找#city下的所有li节点
			返回#city的所有子节点
			返回#phone的第一个子节点
			返回#bj的父节点
			返回#android的前一个兄弟节点
			返回#username的value属性值
			设置#username的value属性值
			返回#bj的文本值
		 */

// 定义一个函数，专门用来指定元素绑定单击响应函数
/* 
 idStr	要绑定单机响应函数的对象的id属性值
 fun	表示事件的回调函数，当单击元素时，执行该函数
 */
function myClick(idStr,fun) {
	var btn = document.getElementById(idStr);
	btn.onclick = fun;
};

// 	查找#bj节点
var btn01 = document.getElementById("btn01");
btn01.onclick = function() {
	var bj = document.getElementById("bj");
	console.log(bj);
	// innerHTML 通过这个属性可以获取到元素内部的html代码
	console.log(bj.innerHTML);
}

// 查找所有li节点
var btn02 = document.getElementById("btn02");
btn02.onclick = function() {
	// getElementsByTagName()可以根据标签名获取一组元素节点对象
	// 这个方法会给我们返回一个类数组对象，所有查询到的元素都封装到对象中
	// 即使查询到的元素只有一个，也会封装到数组中返回
	var lis = document.getElementsByTagName("li");
	console.log(lis);
	console.log(lis.length);
	for (var i = 0; i < 11; i++) {
		console.log(lis[i].innerHTML);
	}
}

// 查找name=gender的所有节点
var btn03 = document.getElementById("btn03");
btn03.onclick = function() {
	var inputs = document.getElementsByName("gender");
	console.log(inputs);
	console.log(inputs.length);
	for (var i = 0; i < inputs.length; i++) {
		// innerHTML是用于获取元素内部的HTML代码的
		// input没有内部代码(单标签不可用)，所有这里不能用innerHTML
		console.log("value值为" + inputs[i].value);
		console.log("innerHTML值为" + inputs[i].innerHTML);
		console.log("class值为" + inputs[i].className);
		// 如果需要读取元素节点属性，直接使用元素.属性名
		// 例：元素.id 元素.name 元素.value
		// 注意：class属性不能采用这种方式 需要用元素.className	其他都是直接写
	}
}

// 查找#city下的所有li节点
var btn04 = document.getElementById("btn04");
btn04.onclick = function() {
	// 获取id为city的元素
	var city = document.getElementById("city");
	// 查找city下的所有li节点
	var lis = city.getElementsByTagName("li");
	console.log(lis);
	for (var i = 0; i < lis.length; i++) {
		console.log(lis[i].innerHTML)
	}
}

// 返回#city的所有子节点
var btn05 = document.getElementById("btn05");
btn05.onclick = function() {
	var city = document.getElementById("city");
	/* 
	 childNodes属性会获取包括文本节点在内的所有节点(换行 空白也会算成文本节点 )
	 IE8以下不会将空白文白当成子节点
	 */
	// var cns = city.childNodes;
	// console.log(cns);
	// for (var i = 0; i < cns.length; i++) {
	// console.log(cns[i])
	// }

	/* 
	 children属性会获取包括文本节点在内的所有节点(换行空白不会算成文本节点 )
	 */
	var cns1 = city.children;
	for (var i = 0; i < cns1.length; i++) {
		console.log(cns1[i])
	}
}

// 返回#phone的第一个子节点
var btn06 = document.getElementById("btn06");
btn06.onclick = function() {
	var phone = document.getElementById("phone");
	// phone.childNodes[0];

	// firstChild可以获取到当前元素的第一个子节点(包括空白文本节点)
	// var fir = phone.firstChild;
	// console.log(fir.innerHTML);

	// firstElementChild可以获取到当前元素的第一个子节点(不包括空白文本节点)
	// 不兼容IE8及以下版本
	var fir1 = phone.firstElementChild;
	console.log(fir1.innerHTML);
}

// 返回#bj的父节点
myClick("btn07",function(){
	// 获取id为bj的节点
	var bj = document.getElementById("bj");
	
	// parentNode获取父节点
	var pn = bj.parentNode;
	console.log(pn.innerHTML);
	
	// innerText和innerHTML类似，不同的是它会将自动将html去除
	console.log(pn.innerText);
	
});




// 返回#android的前一个兄弟节点
myClick("btn08",function(){
	var android = document.getElementById("android");
	var ps = android.previousSibling;
	
	
	// previousSibling前一个兄弟节点(会获取到空白的文本)
	// console.log(ps);
	// console.log(ps.innerHTML);
	
	
	// previousElementSibling 前一个兄弟节点(不会获取到空白的文本)
	// IE8及以下不支持
	var pe = android.previousElementSibling;
	console.log(pe);
	console.log(pe.innerHTML);
	
});


// 返回#username的value属性值
var btn09 = document.getElementById("btn09");
btn09.onclick = function() {
	var um = document.getElementById("username");
	// 读取un的value属性值
	// 文本框的value属性值，就是文本框中填写的内容
	console.log(um.value);
}

// 设置#username的value属性值
var btn10 = document.getElementById("btn10");
btn10.onclick = function() {
	var um = document.getElementById("username");
	um.value = "咸鱼yyds！";
}

// 返回#bj的文本值
var btn11 = document.getElementById("btn11");
btn11.onclick = function() {
	
	var bj = document.getElementById("bj");
	// console.log(bj.innerHTML);
	
	// 获取bj中的文本节点
	var fc = bj.firstChild;
	console.log(fc.data);
	console.log(fc.nodeValue);
	console.log(bj.firstChild.nodeValue);
}
