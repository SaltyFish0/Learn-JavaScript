function addClass(obj, cn) {
	if (!hasClass(obj, cn)) {
		obj.className += (" " + cn);
	}
}

function hasClass(obj, cn) {
	var reg = new RegExp("\\b" + cn + "\\b");
	return reg.test(obj.className);
}

function removeClass(obj, cn) {
	var reg = new RegExp("\\b" + cn + "\\b");
	obj.className = obj.className.replace(reg, "")
}

function toggleClass(obj, cn) {
	if (hasClass(obj, cn)) {
		removeClass(obj, cn);
	} else {
		addClass(obj, cn);
	}
}

function move(obj, target, speed, attr, callback) {
	clearInterval(obj.timer);
	var current = parseInt(getStyle(obj, attr));
	if (current > target) {
		speed = -speed;
	}
	obj.timer = setInterval(function() {
		var Olocation = parseInt(getStyle(obj, attr));
		var Nlocation = Olocation + speed;

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
