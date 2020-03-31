



source.getResource = function(movieInfo, hosts, libs, config, callback) {
	var url = "https://flixanity.app";
	var apiSearch = "https://api.flixanity.app/api/v1/0A6ru35yevokjaqbb3";
	var bodySearch = {
		"q": movieInfo.title,
		"sl": "9fc895fbb0b23f1c0fb8e5a5fe02f7b5"
	};
	var apiEmbed = "https://flixanity.app/ajax/vsozrflxcw.php";

	console.log("--------- info flixanity---------", {url, apiSearch, bodySearch})

	libs.request_post(apiSearch, {}, bodySearch).then(function(response) {
		

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

				console.log("--------- embed flixanity---------", embed)
				if (embed.length > 1) {
					callback({
						"name": "test",
						"file": embed[1],
						"size": "",
						"url": "",
						"name": "",
						"label": ""
					})
				}
			}
		})

	}).catch(function(e) {
		console.log(e)
	})
}