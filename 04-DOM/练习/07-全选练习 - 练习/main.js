window.onload = function() {}
/* 
 checkedAllBox
 checkedAllBtn
 checkedNoBtn
 checkedRevBtn
 sendBtn
 */
// 获取name为items的属性
var items = document.getElementsByName("items");
// 全选
var checkedAllBtn = document.getElementById("checkedAllBtn");
checkedAllBtn.onclick = function() {
	for (var i = 0; i < items.length; i++) {
		// 通过多选框checked属性可以获取或设置多选框的选中状态
		console.log(items[i].checked);
		items[i].checked = true;
	}
	checkedAllBox.checked = true;
}

var checkedNoBtn = document.getElementById("checkedNoBtn");
checkedNoBtn.onclick = function() {
	for (var i = 0; i < items.length; i++) {
		// 通过多选框checked属性可以获取或设置多选框的选中状态
		console.log(items[i].checked);
		items[i].checked = false;
	}
	checkedAllBox.checked = false;
}

var checkedRevBtn = document.getElementById("checkedRevBtn");
checkedRevBtn.onclick = function() {
	for (var i = 0; i < items.length; i++) {
		// 通过多选框checked属性可以获取或设置多选框的选中状态
		console.log(items[i].checked);
		items[i].checked = !items[i].checked;
	}
	checkedAllBox.checked = false;
}

var sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = function() {
	for (var i = 0; i < items.length; i++) {
		// 通过多选框checked属性可以获取或设置多选框的选中状态
		if (items[i].checked) {
			console.log(items[i].value);
		}
	}
	checkedAllBox.checked = false;
}
