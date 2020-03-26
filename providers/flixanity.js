



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
		var resultSearch = JSON.parse(response);

		console.log("--------- resultSearch flixanity---------", resultSearch)

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
		libs.request_post(apiEmbed, {}, bodyEmbed).then(function(response) {

			console.log("--------- resultEmbed flixanity---------", links)
			
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