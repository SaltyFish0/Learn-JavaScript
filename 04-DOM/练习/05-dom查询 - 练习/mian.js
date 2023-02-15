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

function myClick(idStr, fun) {
	var btn = document.getElementById(idStr);
	btn.onclick = fun;
};

// 	查找#bj节点
var btn01 = document.getElementById("btn01");
btn01.onclick = function() {
	var bj = document.getElementById("bj");
	console.log(bj);
}

// 查找所有li节点
var btn02 = document.getElementById("btn02");
btn02.onclick = function() {
	var lis = document.getElementsByTagName("li");
	// console.log(lis);
	for (var i = 0; i < lis.length; i++) {
		console.log(lis[i].innerHTML);
	}
}

// 查找name=gender的所有节点
var btn03 = document.getElementById("btn03");
btn03.onclick = function() {
	var gender = document.getElementsByName("gender");
	for (var i = 0; i < gender.length; i++) {
		console.log(gender[i].value);
	}
}

// 查找#city下的所有li节点
var btn04 = document.getElementById("btn04");
btn04.onclick = function() {
	var city = document.getElementById("city");
	var lis = city.getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		console.log(lis[i].innerHTML);
	};
}

// 返回#city的所有子节点
var btn05 = document.getElementById("btn05");
btn05.onclick = function() {
	var city = document.getElementById("city");

	var cns1 = city.children;
	for (var i = 0; i < cns1.length; i++) {
		console.log(cns1[i].innerHTML);
	}
}

// 返回#phone的第一个子节点
var btn06 = document.getElementById("btn06");
btn06.onclick = function() {
	var phone = document.getElementById("phone");

	var zi = phone.firstChild;
	console.log(zi.innerHTML);
}

// 返回#bj的父节点
myClick("btn07", function() {
	var bj = document.getElementById("bj");

	var bjzi = bj.parentNode;
	console.log(bjzi);
});

// 返回#android的前一个兄弟节点
myClick("btn08", function() {
	var android = document.getElementById("android");
	console.log(android.previousElementSibling.innerHTML);
});


// 返回#username的value属性值
var btn09 = document.getElementById("btn09");
btn09.onclick = function() {
	var username = document.getElementById("username");
	console.log(username.value);
}

// 设置#username的value属性值
var btn10 = document.getElementById("btn10");
btn10.onclick = function() {
	var username = document.getElementById("username");
	username.value = "1";
	console.log(username.value);
}

// 返回#bj的文本值
var btn11 = document.getElementById("btn11");
btn11.onclick = function() {
	var bj = document.getElementById("bj");
	console.log(bj.innerText);
}
