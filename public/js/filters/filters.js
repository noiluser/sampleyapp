app.filter('cutDisk', function () {
	return function (item) {
		return item.replace(/^(disk\:\/)/,"");;
	};
});

app.filter('normalizedSize', function () {
	return function (item) {
		if (item) {
			var res = "";
			item = item * 1.0;
			
			var decimals = 2;
			if(item == 0) res = "(0 Bytes)";
			var k = 1024; 
			var dm = decimals + 1 || 3;
			var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
			var i = Math.floor(Math.log(item) / Math.log(k));
			
			res = parseFloat((item / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
				
			return res;
		} else {
			return "";
		}
		
	};
});
