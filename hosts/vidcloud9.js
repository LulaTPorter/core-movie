


hosts["vidcloud9"] = function(resource, config, callback) {

	var url = "https://vidcloud9.com/ajax.php";
	resource.file.replace("https://vidcloud9.com/streaming.php", url);
	libs.request_getJSON(resource.file, {}, resource).then(function(response) {

		var html = response.data
		for (var item in response.data) {
			response.extraInfo.file = response.data.file;

			libs.request_getHeader(response.extraInfo.file, 'HEAD', {}, response.extraInfo).then(function(res) {

				var fileSize = res.data["content-length"] || 0;

				if (fileSize > 0) {
					res.extraInfo.size = fileSize
					callback(res.extraInfo)	
				}
				
			})
		}
	}).catch(function(e) {
		console.log(e)
	})
};