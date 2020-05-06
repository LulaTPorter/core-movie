//https://ww2.123movies.la/movie/sonic-the-hedgehog-z9gd5qy/watching.html

source.info = {
	url: "https://ww2.123movies.la",
	name: "movie123HD"
}

source.getResource = function(movieInfo, hosts, libs, config, callback) {
	
	var url = `https://ww2.123movies.la/search/${slugify(movieInfo.title, {lower: true, replacement: "+"})}`
	var header = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin": source.info.url,
		"Connection": "keep-alive",
	}

	libs.request_getHTML(url, header, {}).then(function(resHtml) {
		var parse = cheerio.load(resHtml.data)

		var link = ""
		var ajaxUrl = ""
		var typeFilm = ""
		parse(".ml-item").each(function() {
			var href = parse(this).find(".ml-mask").attr("href")
			var dataUrl = parse(this).find(".ml-mask").attr("data-url")
			var title = parse(this).find(".mli-info h2").text()
			var type = parse(this).find(".mli-quality").text().toLowerCase() 
			if (slugify(title, {lower: true}) == slugify(movieInfo.title, {lower: true})) {
				link = href
				ajaxUrl = dataUrl
				typeFilm = type ? "movie" : "tv"
			}
		})

		if (link != "") {
			if (movieInfo.type == "movie") {
					
			}

			if (movieInfo.type == "tv") {

			}
		}
	}).catch(function(resHtml) {
		console.log("----------- 123HD ERROR HTML ----------", resHtml)
	})
}