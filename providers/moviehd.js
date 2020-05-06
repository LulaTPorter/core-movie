


source.info = {
	url: "https://www.google.com",
	name: "MovieHD"
}


source.getResource = function(movieInfo, hosts, libs, config, callback) {

	if (movieInfo.type == "movie") {
		var url = "https://www.google.com/search?q=intitle:%22index+of%22+" + slugify(movieInfo.title.trim(), '+') + "+" + movieInfo.year;
		var headers = {
			"User-Agent": libs.request_getRandomUserAgent(),
			"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
			"Origin": source.info.url,
			"Connection": "keep-alive",
		}
		libs.request_getHTML(url, headers, {}).then(function(res) {

			var parse = cheerio.load(res.data);
			var count = 0;
			var links = []
			parse('.r').each(function() {
				if (count <= 4) {
					var link = parse(this).find("a").attr("href");
					links.push(link);
					count++;	
				} 
			})
			console.log("------- MOVIEHD LINKS ------------ ", links, res.data)
			for (const item of links) {
				libs.request_getHTML(item, headers, {url: item}).then(function(resLinks) {
					var parseLink = cheerio.load(resLinks.data);
					var linkDownload = []
					parseLink("tr").each(function() {

						let exist = false;
						const href = parseLink(this).find('a').attr("href")
						parseLink(this).find("td").each(function() {
							const textTd = parseLink(this).text().trim()
							const size = bytes(textTd+"B")


							if (!isNaN(size) && size >= 100000000 && href && href.toLowerCase().indexOf(slugify(movieInfo.title, {replacement: '.', lower: true})) !=1) {

								linkDownload.push(resLinks.extraInfo.url+href)
							}
						})
							
					})
					console.log("------------ MOVIEHD LINKDOWNLOAD ----------", linkDownload)

					for (var ldownload of linkDownload) {

						libs.request_getHeader(ldownload, 'HEAD', headers, {url: ldownload}).then(function(res) {

							console.log("------------- header MovieHD --------------", res.url, res);

							var contentType = res.data["Content-Type"] || res.data["content-type"];

							console.log("------------- contentType MovieHD --------------", res.url, contentType);

							if (contentType) {

									var fileSize = res.data["content-length"] || res.data["Content-Length"];

									console.log("------------- direct fileSize MovieHD --------------", fileSize);

									if (fileSize >= 100000000) {
										callback({
											"provider": "MovieHD".toUpperCase(),
											"host": "DIRECT".toUpperCase(),
											"file": res.url,
											"size": fileSize,
											"type": "direct".toUpperCase(),
											"label": "HD"
										})	
									}
										
								
							}
						}).catch(function(eDownload) {
							console.log("------ error MovieHD Download ----------", eDownload)
						})
					}
				}).catch(function(errLinks) {
					console.log("-------------------- MOVIEHD ERROR LINK ----------------", errLinks)
				})
			}
			
		}).catch(function(e) {
			console.log("---------------- MOVIEHD ERROR ---------------", e)
			return
		})
	}
}