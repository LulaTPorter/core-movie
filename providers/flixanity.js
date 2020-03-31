



source.getResource = function(movieInfo, hosts, libs, config, callback) {
	var url = "https://flixanity.app";
	var apiSearch = "https://api.flixanity.app/api/v1/0A6ru35yevokjaqbb3";
	var bodySearch = {
		"q": movieInfo.title,
		"sl": "9fc895fbb0b23f1c0fb8e5a5fe02f7b5"
	};
	var apiEmbed = "https://flixanity.app/ajax/vsozrflxcw.php";

	console.log("--------- info flixanity---------", {url, apiSearch, bodySearch})

	libs.request_post(apiSearch, {
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
	}, bodySearch).then(function(response) {
		

		console.log("--------- resultSearch flixanity---------", resultSearch);

		var resultSearch = JSON.parse(response);

		var urlSearch = false;
		var idFilm = false;
		for(var itemSearch of resultSearch) {
			if (itemSearch.title == movieInfo.title && itemSearch.year == movieInfo.year && itemSearch.type == movieInfo.type) {
				urlSearch = itemSearch.permalink;
				idFilm = itemSearch._id.replace("m", "");
			}
		}

		console.log("--------- urlSearch flixanity---------", urlSearch)
		if (!urlSearch) {
			callback(false)
			return
		}

		var bodyEmbed = {
			"action": "getMovieEmb",
			"nopop": "",
			"idEl": idFilm
		}
		libs.request_post(apiEmbed, {
			"Content-Type": "application/x-www-form-urlencoded",
			"accept": "application/json, text/javascript, */*; q=0.01",
			"sec-fetch-dest": "empty",
			"x-requested-with": "XMLHttpRequest",
			"authorization": "Bearer false",
			"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
		}, bodyEmbed).then(function(response) {

			console.log("--------- resultEmbed flixanity---------", links, bodyEmbed)

			var links = JSON.parse(response);

			for (var itemLink in links) {
				var embed = links[itemLink].embed
				if (!embed) {
					continue;
				}

				embed = embed.match(/src *\=\\* *\"([^"]+)/i);

				
				if (embed.length > 1) {
					embed = embed[1]

					console.log("--------- embed flixanity---------", embed)

					var resource = {
						"provider": "flixanity",
						"host": "",
						"file": embed,
						"size": "",
						"type": "",
						"label": ""
					} 

					libs.request_getHeader(embed, 'HEAD', {}).then(function(res) {

						console.log("------------- header Flixianity --------------", embed, res);

						var hostName = libs.string_getHost(embed);
						var contentType = res["Content-Type"] || res["content-type"];

						console.log("------------- contentType Flixianity --------------", hostName, contentType);

						if (contentType) {
							if (contentType.indexOf("html") != -1 || contentType.indexOf("plain") != -1) {

								if (hosts[hostName]) {
									resource["host"] = hostName;
									hosts[hostName](resource, config, extraInfo, callback);
								}
							} else {
								var fileSize = res.fileSize || 0;

								console.log("------------- direct fileSize Flixianity --------------", fileSize);
								callback({
									"provider": "flixanity",
									"host": hostName,
									"file": embed,
									"size": fileSize,
									"type": "direct",
									"label": "HD"
								})	
							}
						}
					}).catch(function(e) {
						console.log("------ flixanity ----------", e)
					})

				}
			}
		})

	}).catch(function(e) {
		console.log(e)
	})
}