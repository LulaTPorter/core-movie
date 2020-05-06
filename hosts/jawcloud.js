


hosts["jawcloud"] = function(resource, config, extraInfo, callback) {
	var headers = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
		"Connection": "keep-alive",
	}	

	console.log("----------------- JAWCLOUD REQUEST -----------------", resource, config)
	libs.request_getHTML(resource.file, headers, resource).then(function(response) {

		var parse = cheerio.load(response.data)
		var source = parse("source").attr("src")
		
		libs.request_getHeader(source, 'HEAD', {}, {extraInfo: response.extraInfo, url: source}).then(function(res) {

			res.extraInfo.extraInfo.file = res.extraInfo.url;
			var fileSize = res.data["content-length"] || 0;
			
			if (fileSize > 0) {
				res.extraInfo.extraInfo.size = fileSize
				res.extraInfo.extraInfo.host = "JAWCLOUD"

				console.log("-------------------- jawcloud RESULT ----------------", fileSize, res.extraInfo)
				callback(res.extraInfo.extraInfo)	
			}
			
		})
	}).catch(function(e) {
		console.log("--------- ERROR jawcloud------------",  e)
	})
};