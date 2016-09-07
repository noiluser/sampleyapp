app.filter('cutDisk', function () {
	return function (item) {
		return url + item.replace(/^(disk\:\/)/,"");;
	};
});