/* 
			 参数1|obj：要执行动画的对象
			 参数2|target：执行动画的目标位置
			 参数3|speed：移动的速度(正数向右,负数向左)
			 参数4|attr：要执行动画的样式
			 参数5|callback：回调函数，将会在动画执行完毕以后执行
			 */
function move(obj, target, speed, attr, callback) {
	clearInterval(obj.timer);
	// 获取元素当前位置
	var current = parseInt(getStyle(obj, attr));
	/*
	 判断speed的正负值
	如果从0向800移动，则speed为正
	如果从800向0移动，则speed为负
	 */
	if (current > target) {
		// 此时速度应为负值
		speed = -speed;
	}

	// 向执行动画中添加timer属性，用来保存自己定时器的标识
	obj.timer = setInterval(function() {
		// 获取box1原来的left值，并转换为整数类型
		var oldValue = parseInt(getStyle(obj, attr));
		console.log(oldValue);
		// 旧值基础上增加，实现移动的效果
		var newValue = oldValue + speed;

		// 向左移动时，需要判断newValue是否小于target
		// 向右移动时，需要判断newValue是否大于target

		// function move(obj, target, speed)
		// move(box1, 100, - 20);

		if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target;
		}

		obj.style[attr] = newValue + "px";
		if (newValue == target) {
			clearInterval(obj.timer);

			// 动画执行完毕，调用回调函数
			callback();
		}
	}, 30)
}

function getStyle(obj, name) {
	return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.currentStyle[name];
};
