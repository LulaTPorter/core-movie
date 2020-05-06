


hosts["vidcloud9"] = function(resource, config, extraInfo, callback) {
	//https://vidcloud9.com/streaming.php?id=Mjg1MjU2&title=Joker
	var url = "https://vidcloud9.com/ajax.php";
	resource.file = resource.file.replace("https://vidcloud9.com/load.php", url);
	resource.file = resource.file.replace("https://vidcloud9.com/streaming.php", url);
	

	var headers = {
		"x-requested-with": "XMLHttpRequest"
	}

	console.log("----------------- VIDCLOUD9 REQUEST -----------------", resource, config)
	libs.request_getJSON(resource.file, headers, resource).then(function(response) {

		console.log("--------------- VIDCLOUD9 RESPONSE -------------- ", response)
		var html = response.data
		for (var item in response.data.source) {
			response.extraInfo.file = response.data.source[item].file;

			console.log("--------------- VIDCLOUD9 FILE -------------- ", response)
			libs.request_getHeader(response.extraInfo.file, 'HEAD', {}, response.extraInfo).then(function(res) {

				var fileSize = res.data["content-length"] || 0;
				
				if (fileSize > 0) {
					res.extraInfo.size = fileSize
					res.extraInfo.host = "VIDCLOUD9"

					console.log("-------------------- VIDCLOUD9 RESULT ----------------", fileSize, res.extraInfo)
					callback(res.extraInfo)	
				}
				
			})
		}

		for (var item in response.data.source_bk) {
			response.extraInfo.file = response.data.source_bk[item].file;

			libs.request_getHeader(response.extraInfo.file, 'HEAD', {}, response.extraInfo).then(function(res) {

				var fileSize = res.data["content-length"] || 0;

				if (fileSize > 0) {
					res.extraInfo.size = fileSize
					res.extraInfo.host = "VIDCLOUD9"
					callback(res.extraInfo)	
				}
				
			})
		}
	}).catch(function(e) {
		console.log("--------- ERROR VIDCLOUD9------------",  e)
	})
};