window.onload = function() {
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	// 获取img标签
	var img = document.getElementsByTagName("img")[0];
	

	// 创建一个数组，用来保存图片路径
	var imgArr = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"];
	console.log(img);
	// 创建一个变量，保存当前正在显示图片的索引
	var index = 0;

	prev.onclick = function() {
		// 切换图片就是修改img标签的src属性
		// 元素.属性 = 属性值;
		// img.src = "img/02.jpg";
		index--;
		// 判断index是否小于0
		if (index < 0) {
			index = imgArr.length-1;
		}
		img.src = imgArr[index];
		console.log(index);
		info.innerHTML = "一共" + (imgArr.length) + "张图片,当前第" + (index+1) + "张";
	}
	next.onclick = function() {
		index++;
		if (index > imgArr.length - 1) {
			index = 0;
		}
		img.src = imgArr[index];
		console.log(index);
		info.innerHTML = "一共" + (imgArr.length) + "张图片,当前第" + (index+1) + "张";
	}
	var info = document.getElementById("info");
	info.innerHTML = "一共" + (imgArr.length) + "张图片,当前第" + (index+1) + "张";
}
