function delA() {
	//点击超链接以后，删除当前项
	// 获取当前tr
	var tr = this.parentNode.parentNode;
	// 删除tr
	// 删除之前弹出提示框
	/* 
	 confirm()弹出一个带有确实和取消按钮的提示框
		需要一个字符串作为参数，该字符串将会作为提示文字显示出来
	 */
	var flag = confirm("确定删除" + (this.parentNode.parentNode.childNodes[1].innerHTML) + "吗？");
	if (flag) {
		tr.parentNode.removeChild(tr);
	}

	// 点击超链接以后，超链接会跳转页面，所以我们要取消超链接默认行为
	// 	通过响应函数的最后return false来取消默认行为
	return false;
};


// 获取所有超链接
var allA = document.getElementsByTagName("a");
// 为每个超链接都绑定一个单击函数
for (var i = 0; i < allA.length; i++) {
	allA[i].onclick = delA;
}


// 点击按钮后将员工信息添加到表格中
// 为提交按钮绑定单击响应函数
var addEmpButton = document.getElementById("addEmpButton");
addEmpButton.onclick = function() {
	// 获取用户添加的信息
	var empName = document.getElementById("empName").value;
	var email = document.getElementById("email").value;
	var salary = document.getElementById("salary").value;
	console.log(empName);
	console.log(email);
	console.log(salary);

	// 需要将获取到的信息保存到tr中

	// 创建tr
	var nametr = document.createElement("tr");
	// 创建四个td
	var nameTd = document.createElement("td");
	var emailTd = document.createElement("td");
	var salaryTd = document.createElement("td");
	var aTd = document.createElement("td");
	// 创建a元素
	var a = document.createElement("a");

	// 创建文本节点
	var nameText = document.createTextNode(empName);
	var emailText = document.createTextNode(email);
	var salaryText = document.createTextNode(salary);
	var delText = document.createTextNode("Delete");

	// 将文本添加到td中
	nameTd.appendChild(nameText);
	emailTd.appendChild(emailText);
	salaryTd.appendChild(salaryText);
	// a中添加delete
	a.appendChild(delText);
	// 将a添加到td中
	aTd.appendChild(a);

	// td添加到tr中
	nametr.appendChild(nameTd);
	nametr.appendChild(emailTd);
	nametr.appendChild(salaryTd);
	nametr.appendChild(aTd);

	// 向a中添加href属性
	a.href = "javascript:;";
	// 为a添加单击函数
	a.onclick = delA;


	// 获取table
	var employeeTable = document.getElementById("employeeTable");
	// 获取employeeTable中的tbody
	var tbody = employeeTable.getElementsByTagName("tbody")[0];
	// 将tr添加到table中
	// employeeTable.appendChild(nametr);


	tbody.appendChild(nametr);
}
