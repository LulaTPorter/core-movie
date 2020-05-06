
source.info = {
	url: "https://www.movieminions.co",
	name: "MovieBluray"	
}


source.getResource = function(movieInfo, hosts, libs, config, callback) {
	var type = movieInfo.type == "tv" ? "tv" : "movie";
	var title = slugify(movieInfo.title, {lower: false, replacement:"+"})
	if (type == "tv") {
		var episode = movieInfo.episode < 10 ? "0" + movieInfo.episode : movieInfo.episode
		var season = movieInfo.season < 10 ? "0" + movieInfo.season : movieInfo.season

		title += "S" + season + "+E" + episode;
	}
	var url = "https://www.movieminions.co/search/?media_type="+type+"&term=" + title;

	var headers = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin": source.info.url,
		"Connection": "keep-alive",
	}

	libs.request_getHTML(url, headers, {}).then(function(resHtml) {
			
	}).catch(function(eHtml) {
		console.log("-------------- MOVIE BLURAY ERROR-------", eHtml)
	})
}