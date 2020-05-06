source.info = {
	url: `https://miradetodo.co`,
	name: `miradetodo`
}


source.getLink = function(movieInfo, url, config, callback) {
	var headers = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "en-US;q=0.6,en;q=0.4",
		"Origin": source.info.url,
		"Connection": "keep-alive",
	}
	var sourceIgnore = ["ok", "yourupload"]
	libs.request_getHTML(url, headers, {}).then(function(res) {
		var parse = cheerio.load(res.data)
		// var href = parse(".movieplay").last().find("iframe").attr("data-lazy-src")
		var href = parse("iframe").attr("data-lazy-src")
		console.log("------------- MIRADETODO IFRAME --------- ", href)
		if (href) {
			libs.request_getHTML(href, headers, {href: href}).then(function(resPlayer) {
				var parsePlayer = cheerio.load(resPlayer.data)
				parsePlayer("#menu ul li").each(function() {
					var title = parsePlayer(this).find("a span").last().text()
					var hrefPlayer = parsePlayer(this).find("a").attr("href")
					if (!sourceIgnore.includes(title.toLowerCase())) {
						libs.request_getHTML(hrefPlayer, headers, {href: hrefPlayer}).then(function(resEmbed) {
							var parseEmbed = cheerio.load(resEmbed.data)
							var iframe = parseEmbed("iframe").last().attr("src")
							
							if (iframe) {
								iframe = iframe.trim()
								var hostName = libs.string_getHost(iframe)
								var resource = {
									"provider": "MIRADETODO",
									"host": "",
									"file": iframe,	
									"size": "",
									"type": "",
									"label": ""
								} 
								if (hosts[hostName]) {
									console.log("----------- MIRADETODO resource ------", resource)
									resource["host"] = hostName;
									hosts[hostName](resource, config, resource, callback);
								}	
							}
						}).catch(function(resEmbed) {
							console.log("------------- MIRADETODO ERROR EMBED -----------", resEmbed)
						})
					}
				})
			}).catch(function(resPLayer) {
				console.log("--------- MIRADETODO ERROR PLAYER --------", resPLayer)
			})
		}
	}).catch(function(e) {
		console.log("------------- MIRADETODO ERROR DETAIL ----------", errorHtml)
	})
}

source.getResource = function(movieInfo, hosts, libs, config, callback) {

	const url = `https://miradetodo.co/?s=${slugify(movieInfo.title, {lower: true, replacement: '+'})}`
	var headers = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "en-US;q=0.6,en;q=0.4",
		"Origin": source.info.url,
		"Connection": "keep-alive",
	}
	libs.request_getHTML(url, headers, {}).then(function(resHtml) {

		var link = ""
		var parse = cheerio.load(resHtml.data)
		parse(".item").each(function() {
			var title = parse(this).find(".fixyear h2").text()
			var year = title.match(/\(([0-9]+)/i)
			
			var href = parse(this).find("a").attr("href");
			year = year && year.length > 0 ? year[1] : 0
			title = title.replace(/\(.*/i, "").trim()

			console.log(slugify(title, {lower: true}) , slugify(movieInfo.title, {lower: true}), year, "1111")
			if (slugify(title, {lower: true}) == slugify(movieInfo.title, {lower: true})) {

				if (movieInfo.type == "movie" && year == movieInfo.year) {
					link = href
				}
				if (movieInfo.type == "tv") {
					link = href
				}
			}
		})

		console.log(link, movieInfo, "--------- MIRADETODO LINK DETAIL --------------")
		if (link != "") {
			if(movieInfo.type == "movie") {
				source.getLink(movieInfo, link, config, callback)
			}
			if (movieInfo.type == "tv") {

				var tvLink = link.replace("/series/", "/episodio/")
				tvLink = tvLink.substring(0, tvLink.length-1) + `-${movieInfo.season}x${movieInfo.episode}`
				console.log("------------ MIRADETODO LINK ----------", tvLink)
				source.getLink(movieInfo, tvLink, config, callback)
			}
		}
	}).catch(function(errorHtml) {
		console.log("------------- MIRADETODO ERROR ----------", errorHtml)
	})
}