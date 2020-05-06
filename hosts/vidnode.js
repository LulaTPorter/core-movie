


hosts["vidnode"] = function(resource, config, extraInfo, callback) {
	//https://vidcloud9.com/streaming.php?id=Mjg1MjU2&title=Joker
	var url = "https://vidcloud9.com/ajax.php";
	resource.file.replace("https://vidnode.net/load.php", url);
	libs.request_getJSON(resource.file, {}, resource).then(function(response) {

		var html = response.data
		for (var item in response.data.source) {
			response.extraInfo.file = response.data.file;

			libs.request_getHeader(response.extraInfo.file, 'HEAD', {}, response.extraInfo).then(function(res) {

				var fileSize = res.data["content-length"] || 0;

				if (fileSize > 0) {
					res.extraInfo.size = fileSize
					res.extraInfo.host = "VIDNODE"
					callback(res.extraInfo)	
				}
				
			})
		}

		for (var item in response.data.source_bk) {
			response.extraInfo.file = response.data.file;

			libs.request_getHeader(response.extraInfo.file, 'HEAD', {}, response.extraInfo).then(function(res) {

				var fileSize = res.data["content-length"] || 0;

				if (fileSize > 0) {
					res.extraInfo.size = fileSize
					res.extraInfo.host = "VIDNODE"
					callback(res.extraInfo)	
				}
				
			})
		}
	}).catch(function(e) {
		console.log(e)
	})
};