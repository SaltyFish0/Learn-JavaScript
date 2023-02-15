//获取span
var menuSpan = document.querySelectorAll(".menuSpan");

// 定义一个变量，保存当前打开的菜单
// 这个变量的作用是关闭 细品 细品 细品
var openDiv = menuSpan[0].parentNode;
for (var i = 0; i < menuSpan.length; i++) {
	menuSpan[i].onclick = function() {
		// 获取当前span的父元素
		var parentDiv = this.parentNode;

		// 添加或移除collapsed(有则移除 无则添加)
		toggleClass(parentDiv, "collapsed");
		console.log(openDiv);
		console.log(parentDiv);
		// 当前打开的菜单不能和当前span的父元素相等
		// 并且当前打开的菜单中不能含有collapsed
		if (openDiv != parentDiv && !hasClass(openDiv, "collapsed")) {
			// 打开菜单后关闭之前的菜单
			// addClass(openDiv, "collapsed");

			// 则移除openDiv中的collapsed(关闭当前打开的菜单)
			toggleClass(openDiv, "collapsed");
		}

		// 修改openDiv为当前打开的菜单
		openDiv = parentDiv;

		console.log(openDiv);
		console.log(parentDiv);
	}
}
