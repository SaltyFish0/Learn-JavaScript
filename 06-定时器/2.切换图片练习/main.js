var img1 = document.getElementById("img1");
var imgArr = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"];
var index = 0;

// 定义计时器标识变量
var timer;

var btn01 = document.getElementById("btn01");
btn01.onclick = function() {
	// 开启定时器之前，将上一个定时器关闭 如不写这条，点击按钮会累加定时器，会越来越快 
	clearInterval(timer);
	
	timer = setInterval(function() {
		index++;

		// if (index >= (imgArr.length - 1)) {
		// 	index = 0;
		// }

		// 下面这段程序很妙，懂得都懂
		index = index % imgArr.length;

		img1.src = imgArr[index];
	}, 500)
}

var btn02 = document.getElementById("btn02");
btn02.onclick = function() {
	/* 
	 clearInterval可以接收任意参数
		如果参数是一个有效的定时器的标识，则停止对应的定时器
		如参数不是一个有效的标识，则什么也不做
	 */
	clearInterval(timer);
}
