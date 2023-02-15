var allimg = document.getElementsByTagName("img")[0];
var arrimg = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"];
var index = 0;
var timer;

var btn01 = document.getElementById("btn01");
btn01.onclick = function() {
	clearInterval(timer);

	timer = setInterval(function() {
		index++;
		index = index % arrimg.length;
		allimg.src = arrimg[index];
	}, 1000)
}
var btn02 = document.getElementById("btn02");
btn02.onclick = function() {
	clearInterval(timer);
}
