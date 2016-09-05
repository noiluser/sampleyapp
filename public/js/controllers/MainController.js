app.controller("MainController", function($scope) {
	"ngInject"
	
	$scope.paramsToString = function(hash, woLast, delim) {
		var output = "";
		for(var item in hash) {
			output += item + "=" + hash[item];
			if (delim) output += delim; else output += "&";
		}
		if (woLast)
			output = output.substring(0, output.length - 1);
		return output;
	};
});