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



/*
全选按钮
	点击按钮后，四个多选框全部被选中
 */
var checkedAllBtn = document.getElementById("checkedAllBtn");
checkedAllBtn.onclick = function() {
	for (var i = 0; i < items.length; i++) {
		// 通过多选框checked属性可以获取或设置多选框的选中状态
		console.log(items[i].checked);
		items[i].checked = true;
	}
	checkedAllBox.checked = true;
}

// 全不选按钮
// 点击按钮后，四个多选框全部取消
var checkedNoBtn = document.getElementById("checkedNoBtn");
checkedNoBtn.onclick = function() {
	for (var i = 0; i < items.length; i++) {
		// 通过多选框checked属性可以获取或设置多选框的选中状态
		items[i].checked = false;
	}
	checkedAllBox.checked = false;
}

var checkedRevBtn = document.getElementById("checkedRevBtn");
checkedRevBtn.onclick = function() {
	for (var i = 0; i < items.length; i++) {
		// 通过多选框checked属性可以获取或设置多选框的选中状态

		// 判断多选框的状态
		// if (items[i].checked) {
		// 	// 如果为true表示为已选中，则设置为没选中状态
		// 	items[i].checked = false;
		// } else {
		// 	// 如果不为true表示为未选中，则设置为选中状态
		// 	items[i].checked = true;
		// }

		// 	取反
		items[i].checked = !items[i].checked;
	}
	
	// 在反选中也需要进行checkedAllBox的判断
	for(var j=0;j<items.length;j++){
		// 设置checkedAllBox为选中状态
		checkedAllBox.checked = true;
		
		// 进入判断证明不是全选状态
		// 将checkedAllBox设置为false
		if(!items[j].checked){
			checkedAllBox.checked = false;
			// 性能提升
			break;
		}
	}
}


// 提交按钮
// 	点击按钮以后，将所有选中的多选框value属性值弹出
var sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = function() {
	// 遍历items
	for (var i = 0; i < items.length; i++) {
		// 判断多选框是否选中
		if (items[i].checked) {
			console.log(items[i].value);
		}
	}
}


// 全选/全不选 多选框
// 当它被选中时，其它也选中 当它取消时其它的也取消
// 在事件的响应函数中，响应函数是给谁绑定的，this就是谁
var checkedAllBox = document.getElementById("checkedAllBox");
checkedAllBox.onclick = function() {
	// console.log(this == checkedAllBox);
	for (var i = 0; i < items.length; i++) {
		// console.log(items[i].checked);
		items[i].checked = this.checked;
	}
};

/* 
	 如果四个多选框全都选中，则checkedAllBox也应被选中
	 如果四个多选框全未选中，则checkedAllBox也应未选中
	 为四个多选框分别绑定单击响应函数
 */
for (var i = 0; i < items.length; i++) {
	items[i].onclick = function(){
		// 判断四个多选框状态
		
		// 只要有一个没选中，则不是全选
		for(var j=0;j<items.length;j++){
			// 设置checkedAllBox为选中状态
			checkedAllBox.checked = true;
			
			// 进入判断证明不是全选状态
			// 将checkedAllBox设置为false
			if(!items[j].checked){
				checkedAllBox.checked = false;
				// 性能提升
				break;
			}
		}
	}
}
