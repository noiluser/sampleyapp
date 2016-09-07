app.filter('cutDisk', function () {
	return function (item) {
		return item.replace(/^(disk\:\/)/,"");;
	};
});