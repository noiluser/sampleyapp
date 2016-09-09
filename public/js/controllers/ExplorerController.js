app.controller("ExplorerController", function($scope, $routeParams, $location, User) {
	"ngInject"

	$scope.items = [];	
	$scope.isContentLoaded = false;
	$scope.isError = false;
	
	//
	$scope.items = [{"sha256":"0da074af3230000b202f6d5cc2779839ed4a677667ccf9f9a0e727c4de2821ef","name":"1.zip","created":"2016-09-09T06:25:14+00:00","modified":"2016-09-09T06:25:14+00:00","media_type":"compressed","path":"disk:/Музыка/Новая папка/1.zip","md5":"c02f8b6145ddc1e1b361974afdd665f5","type":"file","mime_type":"application/x-zip-compressed","size":72210},{"sha256":"750091eb36e2504871f8c696ac7331865bd78068f9caf90e7742ec2d4b4b0474","name":"2160x1920_1080x1920.zip","created":"2016-09-09T06:25:17+00:00","modified":"2016-09-09T06:25:17+00:00","media_type":"compressed","path":"disk:/Музыка/Новая папка/2160x1920_1080x1920.zip","md5":"d0853ffce853461f5cdd12662b83a043","type":"file","mime_type":"application/x-zip-compressed","size":5839569},{"sha256":"e2ac5f44dbc62532a5b5c40f497b6b282ef0c8e1956ff44ab26ac56bf13b6bc0","name":"3000_seqs_250_bp.fasta","created":"2016-09-09T06:25:17+00:00","modified":"2016-09-09T06:25:17+00:00","media_type":"data","path":"disk:/Музыка/Новая папка/3000_seqs_250_bp.fasta","md5":"c16d601a6a47c66e551be47d1501747d","type":"file","mime_type":"application/octet-stream","size":958893},{"sha256":"288de224e3922eb597fb43e7056e0cfcdd12351798ddfcee0b7e84e6195fb7c4","name":"8501191.rar","created":"2016-09-09T06:21:29+00:00","modified":"2016-09-09T06:21:29+00:00","media_type":"compressed","path":"disk:/Музыка/Новая папка/8501191.rar","md5":"48fc27df2486ad76592ddb8254ad7c83","type":"file","mime_type":"application/x-rar","size":106603153},{"sha256":"8e8c97cbf821301f4d4c16be2a2a4c0f75a0caf52cf8e90d39285e4cb128a3c1","name":"Adrenaline_wall.zip","created":"2016-09-09T06:20:58+00:00","modified":"2016-09-09T06:20:58+00:00","media_type":"compressed","path":"disk:/Музыка/Новая папка/Adrenaline_wall.zip","md5":"6851a456cf66ca5ac139e75820c28c79","type":"file","mime_type":"application/x-zip-compressed","size":272524},{"sha256":"564a42af64e37192d5b23317e705ab8966a7c181b2158411c092d0fcee7ff85d","name":"Advanced_3.10.4_Bormental.zip","created":"2016-09-09T06:21:34+00:00","modified":"2016-09-09T06:21:34+00:00","media_type":"compressed","path":"disk:/Музыка/Новая папка/Advanced_3.10.4_Bormental.zip","md5":"a2f6691401a82a62fea0c3d95bc79574","type":"file","mime_type":"application/x-zip-compressed","size":7356143},{"sha256":"c74d9d2b2ab743bd444fde8d4f16e762ccdf5d244c5feb68939d1da0fccce0bf","name":"ChIP_ETS1_exp405_K562_hg19_chr1 (1).bed","created":"2016-09-09T06:21:37+00:00","modified":"2016-09-09T06:21:37+00:00","media_type":"data","path":"disk:/Музыка/Новая папка/ChIP_ETS1_exp405_K562_hg19_chr1 (1).bed","md5":"963a5f511b3efc9d82abdc5b0df1c352","type":"file","mime_type":"application/octet-stream","size":49632},{"sha256":"ef9e45df2e5fd4123773b172474c626bc6952717079c4619e834301ec9b13552","name":"ChIP_JUN_exp595_K562_hg19_chr1 (1).bed","created":"2016-09-09T06:21:37+00:00","modified":"2016-09-09T06:21:37+00:00","media_type":"data","path":"disk:/Музыка/Новая папка/ChIP_JUN_exp595_K562_hg19_chr1 (1).bed","md5":"d625f7cdc2a4a8511284d4a4162bc3ef","type":"file","mime_type":"application/octet-stream","size":46968},{"sha256":"b6a84715c3bef64f1452038b635616207915b49546d18d7cae99c200b52e4a74","name":"Compel_AP1_ETS_artificial_orientation_and_distance_test.fasta","created":"2016-09-09T06:21:44+00:00","modified":"2016-09-09T06:21:44+00:00","media_type":"data","path":"disk:/Музыка/Новая папка/Compel_AP1_ETS_artificial_orientation_and_distance_test.fasta","md5":"2509921f27abb1237c8b08a32f719c0c","type":"file","mime_type":"application/octet-stream","size":4288},{"sha256":"2f8e8fe5cd170429d77da5c1820df2e9d1d38d5d0772a5bfac3b8c382833c035","name":"Demo_Data_Cotton_AGCC.zip","created":"2016-09-09T06:21:55+00:00","modified":"2016-09-09T06:21:55+00:00","media_type":"compressed","path":"disk:/Музыка/Новая папка/Demo_Data_Cotton_AGCC.zip","md5":"23ba7b8f2788191d9b8369709d9270a4","type":"file","mime_type":"application/x-zip-compressed","size":5037721},{"sha256":"34338cd22838d5b9e2d147d68a376c11b0ccf7d900b2f6235c9b22dd61203ef4","name":"ExPlain_housekeeping_reexported_from_Devel_build_ghptywl.txt","created":"2016-09-09T06:22:39+00:00","modified":"2016-09-09T06:22:39+00:00","preview":"https://downloader.disk.yandex.ru/preview/a20f10844884c2f00462ff3afd70fbd98a6b6e20baa16d17eba6b095d187338c/inf/xkSLyF3WAKc_PpronVAxOxXwrubllC4bAu2xCfaobSQbejmHDarC5B5q9eWXLa1NMtPFf4RML6vAc_Do4QKejQ%3D%3D?uid=416673034&filename=ExPlain_housekeeping_reexported_from_Devel_build_ghptywl.txt&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"document","path":"disk:/Музыка/Новая папка/ExPlain_housekeeping_reexported_from_Devel_build_ghptywl.txt","md5":"d6493a3b99ea6ed978bc1122a4a5843c","type":"file","mime_type":"text/plain","size":20799},{"sha256":"28a0801ef771dfbd14ebb1e7842d29413f4da285505d856895f4f7882257dfe4","name":"FastaExample","created":"2016-09-09T06:22:39+00:00","modified":"2016-09-09T06:22:39+00:00","media_type":"data","path":"disk:/Музыка/Новая папка/FastaExample","md5":"f492737bf9d0f953bb77955dfd5e4ad2","type":"file","mime_type":"application/octet-stream","size":2064},{"sha256":"9db587b980ff9ed916412eca739013118793b604039919b57758285eb96c76b6","name":"Gene_1_list.txt","created":"2016-09-09T06:22:41+00:00","modified":"2016-09-09T06:22:41+00:00","preview":"https://downloader.disk.yandex.ru/preview/1f0710c8027b64f3471f387f5b7dc7cbde7f3151adfc3f6be1cfdb688af3a2e1/inf/xkSLyF3WAKc_PpronVAxOzad47Q9mD0fx2mOwbOx0mOHvLeRj1ovsR8ABokCKDT-TXj0hwr74PLD8GiNqyvu3Q%3D%3D?uid=416673034&filename=Gene_1_list.txt&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"document","path":"disk:/Музыка/Новая папка/Gene_1_list.txt","md5":"302e88f296d8bc4ac1faebffdad5339f","type":"file","mime_type":"text/plain","size":184},{"sha256":"d5a31800b247ef739b5bbbcd99f017e8def91ce5760e8076a4af241455cb9dcd","name":"Gene_HgncNmaes_TestCase.txt","created":"2016-09-09T06:22:43+00:00","modified":"2016-09-09T06:22:43+00:00","preview":"https://downloader.disk.yandex.ru/preview/8b0696b4b02ba39aa4e8ab1dfc56843ddff25058e1ecc20cdbf6fcbb55476b44/inf/xkSLyF3WAKc_PpronVAxO1zgLgVxr0kw0GAF3XPsexcwddijgbRR4LZ0smw4MKJfuYPjAl7m17xYHfKBYZc7Ng%3D%3D?uid=416673034&filename=Gene_HgncNmaes_TestCase.txt&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"document","path":"disk:/Музыка/Новая папка/Gene_HgncNmaes_TestCase.txt","md5":"88fb2d91657f2f40d3afa47d34591925","type":"file","mime_type":"text/plain","size":2500},{"sha256":"887e49819befc7a0f82c6a416039bf95e02f99ffa080d00e4c36b804fd10aa68","name":"Joy_seqs.fasta","created":"2016-09-09T06:22:44+00:00","modified":"2016-09-09T06:22:44+00:00","media_type":"data","path":"disk:/Музыка/Новая папка/Joy_seqs.fasta","md5":"7302acce2b965c06c5c0932ab7d4ebb9","type":"file","mime_type":"application/octet-stream","size":807116},{"sha256":"c917b8c3c803ae0fd3130ebe3feecc32374ce9d127cb7164ff2c9115b472ceef","name":"MatrixTransform.txt","created":"2016-09-09T06:22:47+00:00","modified":"2016-09-09T06:22:47+00:00","preview":"https://downloader.disk.yandex.ru/preview/b9dbbc6ec278a92a9f3a0bcc069b2b8da476565d6e2add0f474e10bfb8febb52/inf/xkSLyF3WAKc_PpronVAxO8Wh-2R60jiFvM1EbwpS8f28gESjaHFpTEYNiWKCB_IW9Dffido5AytJ1tc_bHnchA%3D%3D?uid=416673034&filename=MatrixTransform.txt&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"document","path":"disk:/Музыка/Новая папка/MatrixTransform.txt","md5":"354aa7bd60aa275025c36fa671537606","type":"file","mime_type":"text/plain","size":12258},{"sha256":"341cc9631a03ce4cebdbf9ee6c7a62501a60cf254a0526a0a8b05f47f4a76935","name":"Matrix_creation.pptx","created":"2016-09-09T06:22:48+00:00","modified":"2016-09-09T06:22:48+00:00","preview":"https://downloader.disk.yandex.ru/preview/e1977aa3545a7d77d0d235c04533c3ef472b10a107bc6d2ecec079d79556d857/inf/xkSLyF3WAKc_PpronVAxOzdtlCFOWBdE8an-pD72JJhqrnbhUL3buTK7XwjG6uWa_g7RTOs8h-lb_gCbqU5LVg%3D%3D?uid=416673034&filename=Matrix_creation.pptx&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=S&crop=0","media_type":"document","path":"disk:/Музыка/Новая папка/Matrix_creation.pptx","md5":"48455d1c38da48bce7ed27988799cd3e","type":"file","mime_type":"application/vnd.openxmlformats-officedocument.presentationml.presentation","size":1129360},{"sha256":"5ed5d1663790e759ae0563ca2430fa26cd0c187138d31cd81e3017a85ed300ce","name":"MyoDUpload.prf","created":"2016-09-09T06:23:00+00:00","modified":"2016-09-09T06:23:00+00:00","media_type":"settings","path":"disk:/Музыка/Новая папка/MyoDUpload.prf","md5":"0a92fd5942a9120b4c110b44826da6ca","type":"file","mime_type":"application/pics-rules","size":91},{"sha256":"ea5d8843c5881404eed6362d1c6dae2e2525cd2b554b0ba28bf80bae4f071e69","name":"New_folder (1).zip","created":"2016-09-09T06:23:04+00:00","modified":"2016-09-09T06:23:04+00:00","media_type":"compressed","path":"disk:/Музыка/Новая папка/New_folder (1).zip","md5":"6bc6aebc59d9ff23faae138f7cb56d57","type":"file","mime_type":"application/x-zip-compressed","size":6497609},{"sha256":"3d2c9d1c17b024980b219303a999269cb066da8e9fa55e9d671605cd42be9c06","name":"New_folder.zip","created":"2016-09-09T06:23:02+00:00","modified":"2016-09-09T06:23:02+00:00","media_type":"compressed","path":"disk:/Музыка/Новая папка/New_folder.zip","md5":"c43a48012ed627c637a40b2ef7ad4f8a","type":"file","mime_type":"application/x-zip-compressed","size":759800}];
	$scope.isContentLoaded = true;
	$scope.items.forEach(function(item) {
		if (!item.preview) {
			item.preview = "static/img/" + item.type + ".png";
		} else {
			item.preview = item.preview.slice(0, -1) + "1";
		}
	});
	//
	
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
					item.preview = item.preview.slice(0, -1) + "1";
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