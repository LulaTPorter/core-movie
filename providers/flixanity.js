


source.flixanity_getLink = function(movieInfo, url, idFilm, hosts, libs, config, callback) {

	var bodyEmbed = {
		"action": movieInfo.type == "movie" ?  "getMovieEmb" : "getEpisodeEmb", 
		"nopop": "",
		"idEl": idFilm
	}
	libs.request_post("https://flixanity.app/ajax/vsozrflxcw.php", {
		"Content-Type": "application/x-www-form-urlencoded",
		"accept": "application/json, text/javascript, */*; q=0.01",
		"sec-fetch-dest": "empty",
		"x-requested-with": "XMLHttpRequest",
		"authorization": "Bearer false",
		"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
	}, bodyEmbed).then(function(response) {


		var links = JSON.parse(response.data);


		for (var itemLink in links) {

			if (config.stop) {
				break;
			}

			var embed = links[itemLink].embed
			if (!embed) {
				continue;
			}

			embed = embed.match(/src *\=\\* *\"([^"]+)/i);

			
			if (embed.length > 1) {
				embed = embed[1]

				console.log("--------- embed flixanity---------", embed);

				var resource = {
					"provider": "flixanity",
					"host": "",
					"file": embed,
					"size": "",
					"type": "",
					"label": ""
				} 

				libs.request_getHeader(embed, 'HEAD', {}).then(function(res) {

					console.log("------------- header Flixianity --------------", res.url, res);

					var hostName = libs.string_getHost(res.url);
					var contentType = res.data["Content-Type"] || res.data["content-type"];

					console.log("------------- contentType Flixianity --------------", res.url,  hostName, contentType);

					if (contentType) {
						if (contentType.indexOf("html") != -1 || contentType.indexOf("plain") != -1) {

							if (hosts[hostName]) {
								resource["host"] = hostName;
								hosts[hostName](resource, config, extraInfo, callback);
							}
						} else {
							var fileSize = res.data["content-length"] || 0;

							console.log("------------- direct fileSize Flixianity --------------", fileSize);
							callback({
								"provider": "flixanity".toUpperCase(),
								"host": hostName.toUpperCase(),
								"file": res.url,
								"size": fileSize,
								"type": "direct".toUpperCase(),
								"label": "HD"
							})	
						}
					}
				}).catch(function(e) {
					console.log("------ error_flixanity ----------", e)
				})

			}
		}

	})
}

source.getResource = function(movieInfo, hosts, libs, config, callback) {
	var url = "https://flixanity.app";
	var apiSearch = "https://api.flixanity.app/api/v1/0A6ru35yevokjaqbb3";
	var bodySearch = {
		"q": movieInfo.title,
		"sl": "9fc895fbb0b23f1c0fb8e5a5fe02f7b5"
	};
	var apiEmbed = "https://flixanity.app/ajax/vsozrflxcw.php";

	console.log("--------- info flixanity---------", {url, apiSearch, bodySearch})

	var headers = {
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:76.0) Gecko/20100101 Firefox/76.0",
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
		"Content-Type": "application/x-www-form-urlencoded",
		"Origin": url,
		"Connection": "keep-alive",
		"Referer": "https://flixanity.app/",
		"Sec-Fetch-Dest": "empty",
		"Sec-Fetch-Mode": "cors",
		"Sec-Fetch-Site": "same-site"
	};

	libs.request_post(apiSearch, headers, bodySearch).then(function(response) {
		

		console.log("--------- resultSearch flixanity---------", resultSearch);

		var resultSearch = JSON.parse(response.data);

		var urlSearch = false;
		var idFilm = false;
		for(var itemSearch of resultSearch) {
			if (itemSearch.title == movieInfo.title) {

				if (itemSearch.year == movieInfo.year && itemSearch.type == movieInfo.type) {
					urlSearch = itemSearch.permalink;
					idFilm = itemSearch._id.replace("m", "");
				} else if (itemSearch.type.toLowerCase() == "tv show" && movieInfo.type = "tv") {
					urlSearch = itemSearch.permalink;
				}
				
			}
		}

		console.log("--------- urlSearch flixanity---------", urlSearch)
		if (!urlSearch) {
			callback(false);
			return;
		}

		if (movieInfo.type = "movie") {
			source.flixanity_getLink(movieInfo, urlSearch, idFilm, hosts, libs, config, callback);	
		}
		if (movieInfo.type = "tv") {
			libs.request_getHTML(url+permalink+"/season/"+movieInfo.season+"/episode/"+movieInfo.episode, headers).then(function(res) {
				var dataHtml = res.data;
				var idTv = embed.match(/elid *\=\\* *\"([^"]+)/i);

				if (idTv.length > 0) {
					source.flixanity(movieInfo, urlSearch, idTv, hosts, libs, config, callback);
				}
			}).catch(function(error) {
				console.log(error)
			})
		}
	}).catch(function(e) {
		console.log(e)
	})
}