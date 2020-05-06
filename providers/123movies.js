
source.info = {
	url: "https://123movieshub.vip/",
	name: "123movies"
}


source.getResource = function(movieInfo, hosts, libs, config, callback) {

	var urlSearch = "https://123movieshub.vip/search.php?keyword=" + slugify(movieInfo.title, {lower: true, replacement: '+'})
	var headers = {
	// 	"origin": source.info.url,
	// 	"authority": "123movieshub.vip",
	// 	"cache-control": "max-age=0",
	// 	"upgrade-insecure-requests": 1,
	// 	"sec-fetch-dest": "document",
	// 	"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	// 	"sec-fetch-site": "none",
	// 	"accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
	// 	"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"

	}

	libs.request_get(urlSearch, headers).then(function(resSearch) {

		console.log("xxxxxxxxxxxxxxxxxHTML", resSearch)
		// var parse = cheerio.parse(resSearch.data)

		// var link = ""
		// parse(".wrapper li").each(function() {

		// 	var href = parse(this).find("a").attr("href")
		// 	var title = parse(this).find("a").attr("title")
		// 	var episode = parse(this).find(".eps div").text()
		// 	var season = title.toLowerCase().match(/\- *season *([0-9]+)/i)
		// 	title = title.toLowerCase().replace(/ *\- *season *([0-9]+)/i, "")

		// 	if (slugify(movieInfo.title, {lower: true, replacement: "-"}) == slugify(title, {lower: true, replacement: "-"})) {

		// 		if (movieInfo.type == "tv" && season.length > 0 && season[1] == movieInfo.season && episode == movieInfo.episode) {
		// 			link = href
		// 		} 
		// 		if (movieInfo.type == "movie") {
		// 			link = href
		// 		}
		// 	}
			
		// })


		// if (href != "") {
		// 	link.request_get(link, headers, {url: link}).then(function(resLink) {

		// 		var embeds = resLink.data.match(/var * link_server_[A-z0-9_]+ *\= *\"([^"]+)/)
		// 	}).catch(function(errorLink) {
		// 		console.log("------------ 123MOVIES ERROR RES LINK ---------", errorLink)
		// 		reject(resLink)
		// 		return
		// 	})
		// }


	}).catch(function(eSearch) {
		console.log("-------- ERROR 123MOVIES SEARCH -------", eSearch)
	})	
}
