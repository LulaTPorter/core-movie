
source.info = {
	url: "https://5movies.to/",
	name: "Movie25V2"
}


source.getLink = function(movieInfo, urlDetail, config, callback) {
	var headers = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin": source.info.url,
		"Connection": "keep-alive",
	}	
	var count = 0
	libs.request_getHTML(urlDetail, headers, {}).then(function(resDetail) {
		var parse = cheerio.load(resDetail.data)
		parse(".link-button").each(function() {
			var token = parse(this).find("a").attr("href")
			token = token.replace("?lk=", "")
			var query = `https://5movies.to/getlink.php?Action=get&lk=${token}`
			libs.request_getHTML(query, headers, {}).then(function(resLink) {
				var link = resLink.data.replace("//", "http://")

				libs.request_getHeader(link, 'HEAD', {}, {embed: link}).then(function(res) {

					console.log("------------- header 5MOVIE --------------", res.url, res);

					var hostName = libs.string_getHost(res.url);
					var contentType = res.data["Content-Type"] || res.data["content-type"];

					console.log("------------- contentType 5MOVIE --------------", res.url,  hostName, hosts[hostName], contentType);

					if (contentType) {
						if (contentType.indexOf("html") != -1 || contentType.indexOf("plain") != -1) {

							var resource = {
								"provider": "Movie25V2".toUpperCase(),
								"host": "",
								"file": res.extraInfo.embed,
								"size": "",
								"type": "",
								"label": ""
							} 
							if (hosts[hostName]) {
								resource["host"] = hostName;
								hosts[hostName](resource, config, resource, callback);
							}
						} else {
							var fileSize = res.data["content-length"] || 0;

							console.log("------------- direct fileSize 5MOVIE --------------", fileSize);
							callback({
								"provider": "M4uFree".toUpperCase(),
								"host": hostName.toUpperCase(),
								"file": res.url,
								"size": fileSize,
								"type": "direct".toUpperCase(),
								"label": "HD"
							})	
						}
					}
				}).catch(function(e) {
					console.log("------ error_5MOVIE ----------", e)
				})
			}).catch(function(e) {
				console.log("---------- ERROR 5MOVIE GET LINK ---------", e)
			})
		})
	}).catch(function(e) {
		console.log("---------- ERROR 5MOVIE GET DETAIL ----------", e)
	})
}

source.getResource = function(movieInfo, hosts, libs, config, callback) {

	var urlSearch = `https://5movies.to/search.php?q=${slugify(movieInfo.title, {lower: true})}`
	var headers = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin": source.info.url,
		"Connection": "keep-alive",
	}	

	libs.request_getHTML(urlSearch, headers, {}).then(function(resHtml) {
		var parse = cheerio.load(resHtml.data)

		var link = ""
		parse(".movie-list").each(function() {
			var title = parse(this).find(".ml-img img").attr("alt")
			var href = parse(this).find(".ml-img a").attr("href")
			var year = title.match(/\(([0-9]+)/i)
			year = year && year.length > 0 ? year[1] : 0
			title = title.replace(/\(.*/i, "").trim() 

			console.log("debugiiing", slugify(title, {lower: true, replacement: "-"}), slugify(movieInfo.title, {lower: true, replacement: "-"}))
			if (slugify(title, {lower: true, replacement: "-"}) == slugify(movieInfo.title, {lower: true, replacement: "-"})) {
				if (movieInfo.type == "movie" && movieInfo.year == year) {
					link = href
				}

				if (movieInfo.type == "tv") {
					link = href
				}
			}
		})

		if (link != "") {
			link = link.replace("//", "https://")
			if (movieInfo.type == "movie") {
				source.getLink(movieInfo, link, config, callback)
			} else {
				var linkTv = link.substring(0, link.length-1) + `-s${movieInfo.season}e${movieInfo.episode}`
				source.getLink(movieInfo, linkTv, config, callback)
			}
			
		}
	}).catch(function(e) {
		console.log("------------- ERROR 5MOVIE -----------", e)
	})
}