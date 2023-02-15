var prev = document.getElementById("prev");
var next = document.getElementById("next");
var img = document.getElementsByTagName("img")[0];
var imgArr = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"];

var index = 0;

var info = document.getElementById("info");
info.innerHTML = "共有" + (imgArr.length) + "张图片，当前第" + (index + 1) + "张";
prev.onclick = function() {
	index--;
	if (index < 0) {
		index = (imgArr.length - 1);
	};
	img.src = imgArr[index];
	info.innerHTML = "共有" + (imgArr.length) + "张图片，当前第" + (index + 1) + "张";
}
next.onclick = function() {
	index++;
	if (index > (imgArr.length - 1)) {
		index = 0;
	};
	img.src = imgArr[index];
	info.innerHTML = "共有" + (imgArr.length) + "张图片，当前第" + (index + 1) + "张";
}
