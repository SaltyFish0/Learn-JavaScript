var imgList = document.getElementById("imgList");
var imgArr = document.getElementsByTagName("img");
imgList.style.width = 520 * imgArr.length + "px";
// 获取所有A
var allA = document.getElementsByTagName("a");
// 图片索引
var index = 0;
// 默认选中效果
allA[index].style.backgroundColor = "#230fff";
allA[index].style.transform = "scale(1.2)";
// 自动切换标识
var timer;
// 自动切换图片
autoChange();

// 点击超链接切换到指定图片
for (let i = 0; i < allA.length; i++) {
	// allA[i].num = i;
	allA[i].onclick = function() {
		clearInterval(timer);
		index = i;

		setA(i);
		move(imgList, -520 * index, 100, "left", function() {
			autoChange();
		})
	}
}








// 创建一个方法设置a的颜色
function setA(index) {
	// 判断当前索引是否是最后一张图片
	if (index >= imgArr.length - 1) {
		index = 0;


		// 此时显示的最后一张图片，而最后一张图片和第一张图片是一模一样的
		// 通过CSS将最后一张切换成第一张
		imgList.style.left = 0;
	}

	
	for (var i = 0; i < allA.length; i++) {
		allA[i].style.backgroundColor = "";
		allA[i].style.transform = "scale(1)";
	}
	allA[index].style.transform = "scale(1.2)";
	allA[index].style.backgroundColor = "#230fff";
}


// 创建一个函数，用来开启自动切换图片
function autoChange() {
	timer = setInterval(function() {
		// 索引自增
		index++;
		index %= imgArr.length;
		move(imgList, -520 * index, 100, "left", function() {
			setA(index);
		})
	}, 3000)
}
