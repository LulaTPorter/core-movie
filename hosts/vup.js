


hosts["vup"] = function(resource, config, extraInfo, callback) {
	var headers = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
		"Connection": "keep-alive",
	}	

	var id = resource.file.match(/\?(.+)/i)

	id = id && id.length > 0 ? id[1] : ""

	console.log("----------------- VUP REQUEST -----------------", resource, config)
	libs.request_getHTML(`https://vup.to/embed-${id}.html`, headers, resource).then(function(response) {


		var source = response.data.match(/sources *\: *([^\]]+)/i);
		
		if (source && source.length > 0) {
			source = source[1] + "]"
			var parse = []
			source = `parse = ${source}`
			eval(source)
			console.log("------------ VUP DATA HTML -----------", parse)
			for (var item of parse) {

				libs.request_getHeader(item.src, 'HEAD', {}, {extraInfo: response.extraInfo, url: item.src}).then(function(res) {

					res.extraInfo.extraInfo.file = res.extraInfo.url;
					var fileSize = res.data["content-length"] || 0;
					
					if (fileSize > 0) {
						res.extraInfo.extraInfo.size = fileSize
						res.extraInfo.extraInfo.host = "VUP"

						console.log("-------------------- VUP RESULT ----------------", fileSize, res.extraInfo)
						callback(res.extraInfo.extraInfo)	
					}
					
				})
			}
		}
	}).catch(function(e) {
		console.log("--------- ERROR VUP------------",  e)
	})
};