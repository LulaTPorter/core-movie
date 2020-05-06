


hosts["videobin"] = function(resource, config, extraInfo, callback) {
	var headers = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
		"Connection": "keep-alive",
	}	

	console.log("----------------- videobin REQUEST -----------------", resource, config)
	libs.request_getHTML(resource.file, headers, resource).then(function(response) {


		var source = response.data.match(/sources *\: *([^\]]+)/i);
		
		if (source && source.length > 0) {
			source = source[1] + "]"
			var parse = JSON.parse(source.trim())
			console.log("------------ VIDEOBIN DATA HTML -----------", parse)
			for (var item of parse) {

				libs.request_getHeader(item, 'HEAD', {}, {extraInfo: response.extraInfo, url: item}).then(function(res) {

					res.extraInfo.extraInfo.file = res.extraInfo.url;
					var fileSize = res.data["content-length"] || 0;
					
					if (fileSize > 0) {
						res.extraInfo.extraInfo.size = fileSize
						res.extraInfo.extraInfo.host = "VIDEOBIN"

						console.log("-------------------- videobin RESULT ----------------", fileSize, res.extraInfo)
						callback(res.extraInfo.extraInfo)	
					}
					
				})
			}
		}
	}).catch(function(e) {
		console.log("--------- ERROR videobin------------",  e)
	})
};