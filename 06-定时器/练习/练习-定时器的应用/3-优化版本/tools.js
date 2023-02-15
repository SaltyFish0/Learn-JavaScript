/* 
			 参数1|obj：要执行动画的对象
			 参数2|target：执行动画的目标位置
			 参数3|speed：移动的速度(正数向右,负数向左)
			 参数4|attr：要执行动画的样式
			 参数5|callback：回调函数，将会在动画执行完毕以后执行
			 */
function move(obj, target, speed, attr, callback) {
	clearInterval(obj.timer);
	var current = parseInt(getStyle(obj, attr));
	if (current > target) {
		speed = -speed;
	}
	obj.timer = setInterval(function() {
		// box1旧距离
		var Olocation = parseInt(getStyle(obj, attr));
		// box1新距离
		var Nlocation = Olocation + speed;

		// 向右移动并且新距离小于目标位置 或 向左移动并且新距离大于目标位置
		if ((speed < 0 && Nlocation < target) || (speed > 0 && Nlocation > target)) {
			Nlocation = target;
		}

		obj.style[attr] = Nlocation + "px";
		if (Nlocation == target) {
			clearInterval(obj.timer);
			callback();
		}
	}, 10)
}

function getStyle(obj, name) {
	return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.currentStyle[name];
};
