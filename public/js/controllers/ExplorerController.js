app.controller("ExplorerController", function($scope, $routeParams, $location, User) {
	"ngInject"


	////////////
	$scope.isContentLoaded = true; // DEBUG
	$scope.items = [{"path":"disk:/Музыка","type":"dir","name":"Музыка","modified":"2016-09-05T08:30:52+00:00","created":"2016-09-05T08:30:52+00:00"},{"sha256":"d69e72661e26d9f1d44ab12e59c6cebfde48c125299db7768c913cfb5e42dffd","name":"Горы.jpg","created":"2016-09-05T08:30:53+00:00","modified":"2016-09-05T08:30:53+00:00","preview":"https://downloader.disk.yandex.ru/preview/2e326039ff5ef4c49c9d49be8dd4f3f8409a8b39fd9469f7f01d2e4ccd9ce4cb/inf/P1Uu3IBvn2J_059WhlC9XydbkJ2sC_KEk2e_VtbYAOfuuRRO_ACnqYduWLfxvvz5VgHzs7xBXDvk4Qqe7B86gQ%3D%3D?uid=416673034&filename=%D0%93%D0%BE%D1%80%D1%8B.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"image","path":"disk:/Горы.jpg","md5":"1392851f0668017168ee4b5a59d66e7b","type":"file","mime_type":"image/jpeg","size":1762478},{"sha256":"92850360b5dd81417b6576ca2b570bd6d4d669c700480940380cc92fa48a4d4f","name":"Зима.jpg","created":"2016-09-05T08:30:53+00:00","modified":"2016-09-05T08:30:53+00:00","preview":"https://downloader.disk.yandex.ru/preview/3560a1db9e6ee0080d967ab69377ded9376f87fb783689538c57c5ce73bc73a5/inf/gJ9KiimGoYbGCe2IrDWcVGycE3C0fjH29HfwRtDDKVygSgSgsryLElCdDXXAJj1BBccTjprd_uY3WWhDvvyBVA%3D%3D?uid=416673034&filename=%D0%97%D0%B8%D0%BC%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"image","path":"disk:/Зима.jpg","md5":"a64146fee5e15b3b94c204e544426d43","type":"file","mime_type":"image/jpeg","size":1394575},{"sha256":"d76ce57d8abf4e8eafbc7c85cec59a7a7f12b1d603d51e928be4a3fea0f6817c","name":"Мишки.jpg","created":"2016-09-05T08:30:53+00:00","modified":"2016-09-05T08:30:53+00:00","preview":"https://downloader.disk.yandex.ru/preview/f6670a7595b55f5903f39d875e20820390f294809349458ffe7c5df96a030d73/inf/fwhLIia_-zlk2uITaqxgbGJbR3ANcQde87h7hiBT0GhEI8fhcC9IFRIL8W4OBV0J-yLh1Ds-lBckf41RQO7cPQ%3D%3D?uid=416673034&filename=%D0%9C%D0%B8%D1%88%D0%BA%D0%B8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"image","path":"disk:/Мишки.jpg","md5":"569a1c98696050439b5b2a1ecfa52d19","type":"file","mime_type":"image/jpeg","size":1555830},{"sha256":"21f14018436c3dca7a47c5bd83f3b9bbc8b6c113b2a1d23ce7f5a0c80ce0e687","name":"Море.jpg","created":"2016-09-05T08:30:53+00:00","modified":"2016-09-05T08:30:53+00:00","preview":"https://downloader.disk.yandex.ru/preview/3ed8aa44fb5a387fdb152e078d904b6997a03efb94bfb33432f28b35e503a234/inf/e4WTSuwXNwLjbjwaWi1vXFuQ-biYzXHMfURW4VIc4rmBxZhGf6N5b4MEf_ueh3VwZDJ7I3Qq7cU45yvpQs5vyA%3D%3D?uid=416673034&filename=%D0%9C%D0%BE%D1%80%D0%B5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"image","path":"disk:/Море.jpg","md5":"ab903d9cab031eca2a8f12f37bbc9d37","type":"file","mime_type":"image/jpeg","size":1080301},{"sha256":"fe9e2ea0d191ff0eb9d2129464f87da5fd5f02f370a4889492efc18947c70172","name":"Москва.jpg","created":"2016-09-05T08:30:53+00:00","modified":"2016-09-05T08:30:53+00:00","preview":"https://downloader.disk.yandex.ru/preview/06acc24bb4eb6629ab68ea957ee9f0f1161d53c718faa13409939f1dd70b5d5b/inf/PNec8rFbFd0WPJMSAfUc7pNiNSME7Q0O0DrXr5-IhMgAOITNajybxvIo7yfrDcZbCvINiUpbWSnJA594N-sTjQ%3D%3D?uid=416673034&filename=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"image","path":"disk:/Москва.jpg","md5":"d27d72a3059ad5ebed7a5470459d2670","type":"file","mime_type":"image/jpeg","size":1454228},{"sha256":"c142184b858a12a672bed0533812eb7eef3b1fac38c27eaef6c8f0915d98a8dc","name":"Санкт-Петербург.jpg","created":"2016-09-05T08:30:53+00:00","modified":"2016-09-05T08:30:53+00:00","preview":"https://downloader.disk.yandex.ru/preview/4200c63963170537edf2d24da7cc5c3c08e1916c3d2c23bf8d1b7e7d035d18d1/inf/h-E5iv20qS6fudmqH3bYJQIJiCgazPYKT2VSCqZE5qCLiq3t7P5xJl8XHUV2wZHhikxqHPRnAj71fyEJ3X37Gg%3D%3D?uid=416673034&filename=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"image","path":"disk:/Санкт-Петербург.jpg","md5":"f1abe3b27b410128623fd1ca00a45c29","type":"file","mime_type":"image/jpeg","size":2573704},{"sha256":"14b39d4ed08c76d2031d7a6a4e708c98ddc63569e9806d602f6ac702db47ae19","name":"Хлебные крошки.mp4","created":"2016-09-05T08:30:53+00:00","modified":"2016-09-05T08:30:53+00:00","preview":"https://downloader.disk.yandex.ru/preview/72676975a6e5f07f3597ddf0f0a9d99b4218f5a71e0b7d0b744735c1b0f0aaab/inf/-pgQNZfp9o_7gHS-Wt7fy_nBJ8ZXMdQXg1Tr8iV36ewPDDD1HmYpS17mcBvMVaQ_LUsVSSGf-Pn5y20PwvXAig%3D%3D?uid=416673034&filename=%D0%A5%D0%BB%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5%20%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B8.mp4&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"video","path":"disk:/Хлебные крошки.mp4","md5":"ea977f513074d5524bee3638798183b9","type":"file","mime_type":"video/mp4","size":31000079}];
	$scope.items.forEach(function(item) {
		if (!item.preview) {
			item.preview = "static/img/" + item.type + ".png";
		} else {
			item.preview = item.preview.slice(0, -1) + "1";
		}
	});
	///////
	//$scope.items = [];	
	//$scope.isContentLoaded = false;
	$scope.isError = false;
	
	if ($routeParams.path)
		$scope.path = $routeParams.path;
	else 
		$scope.path = "";
	
	$scope.$watch(function(){ return User.isAuthorized(); }, function(val, oldValue){
	    if(val) {
	    	$scope.$emit("loadFolder");
	    	$scope.isError = false;
	    	$scope.message = "";
	    } else {
	    	$scope.message = "Access denied. Please login.";
	    	//$scope.isError = true;
	    }
	});
	
	$scope.$on('loadFolder', function(event) {
		User.getContent($scope.path)
		.then(function(data) {
			$scope.isContentLoaded = true;
			if (data.hasOwnProperty('_embedded'))
				$scope.items = data._embedded.items;
			$scope.items.forEach(function(item) {
				if (!item.preview) {
					item.preview = "static/img/" + item.type + ".png";
				} else {
					item.preview = item.preview.slice() + "1";
				}
			});
		},	function(data) {
			$scope.isError = true;
			$scope.message = data.message;
		});
	});
	

	$scope.navigate = function(path, type) {
		if (type && type == "dir") {
			var url = "/disk/" + path;
			$location.path( url );
		}
	}
});