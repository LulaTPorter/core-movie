


hosts["fembed"] = function(resource, config, extraInfo, callback) {

	resource.file = resource.file.replace(/\#.*/i, "")
	var id = resource.file.match(/\/v\/(.*)/i)
	if (id.length > 0) {
		id = id[1]

		var url = "https://feurl.com/api/source/" + id
		var body = {
			r: "",
			d: "feurl.com"
		}

		libs.request_postJSON(url, body, {},  extraInfo).then(function(res) {

			console.log("------------- FEMBED DATA ------------", res.data)
			for(const item in res.data.data) {

				res.extraInfo.file = res.data.data[item].file
				libs.request_getHeader(res.extraInfo.file, 'HEAD', {}, res.extraInfo).then(function(resHeader) {
					var fileSize = resHeader.data["content-length"] || 0

					if (fileSize > 0) {
						res.extraInfo.size = fileSize
						res.extraInfo.host = "FEMBED"

						console.log("-------------------- FEMBED RESULT ----------------", fileSize, resHeader.extraInfo)
						callback(resHeader.extraInfo)	
					}
				}).catch(function(errorHeader) {
					console.log("-------------- FEMBED ERROR HEADER", errorHeader)
				})
			}
		}).catch(function(e) {
			console.log("---------- ERROR FEMBED --------------", e)
		})
	}
};