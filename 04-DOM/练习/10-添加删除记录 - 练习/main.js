function delA() {
	var flag = confirm("确定要删除 " + (this.parentNode.parentNode.childNodes[1].innerHTML) + " 吗？");
	if (flag) {
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	}
	return false;
}

var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
	a[i].onclick = delA;
}


var addEmpButton = document.getElementById("addEmpButton");
addEmpButton.onclick = function() {
	var empName = document.getElementById("empName");
	var email = document.getElementById("email");
	var compensation = document.getElementById("compensation");

	var TdempName = document.createElement("td");
	var Tdemail = document.createElement("td");
	var Tdcompensation = document.createElement("td");
	var Tda = document.createElement("td");
	var Hra = document.createElement("a");


	var TextempName = document.createTextNode(empName.value);
	var Textemail = document.createTextNode(email.value);
	var Textcompensation = document.createTextNode(compensation.value);
	var Texta = document.createTextNode("Delete");

	Hra.href = "javascript:;";
	Hra.onclick = delA;


	TdempName.appendChild(TextempName);
	Tdemail.appendChild(Textemail);
	Tdcompensation.appendChild(Textcompensation);
	Hra.appendChild(Texta);
	Tda.appendChild(Hra);

	var Newtr = document.createElement("tr");
	Newtr.appendChild(TdempName);
	Newtr.appendChild(Tdemail);
	Newtr.appendChild(Tdcompensation);
	Newtr.appendChild(Tda);

	console.log(Newtr);

	var employeeTable = document.getElementById("employeeTable");
	employeeTable.appendChild(Newtr);
}
