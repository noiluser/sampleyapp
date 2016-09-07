app.filter('cutDisk', function () {
	return function (item) {
		return item.replace(/^(disk\:\/)/,"");;
	};
});

app.filter('normalizedSize', function () {
	return function (item) {
		if (item) {
			return "(" + item + ")";
		} else {
			return "";
		}
		
	};
});