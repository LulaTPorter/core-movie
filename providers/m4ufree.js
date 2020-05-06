



source.info = {
	url: "http://them4ufree.info",
	name: "m4ufree"
}



source.getResource = function(movieInfo, hosts, libs, config, callback) {
	
	var url = "http://them4ufree.info/tag/" + slugify(movieInfo.title, {lower: true , replacement: '-'})
	var headers = {
		"User-Agent": libs.request_getRandomUserAgent(),
		"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin": source.info.url,
		"Connection": "keep-alive",
	}	
	var headersPost = _.merge(headers, {
		"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
	})


	libs.request_getHTML(url, headers).then(function(resHtml) {
		var parse = cheerio.load(resHtml.data)
		var link = ""
		parse(".container .item").each(function() {
			var title = parse(this).find("h2.top-item").text();
			var year = title.match(/\(([0-9]+)/i)
			
			var href = parse(this).find("a.top-item").attr("href");
			year = year && year.length > 0 ? year[1] : 0
			title = title.replace(/\(.*/i, "").trim()

			
			if (slugify(title, {lower: true}) == slugify(movieInfo.title, {lower: true})) {

				if (movieInfo.type == "movie" && year == movieInfo.year) {
					link = href
				} 
				if (movieInfo.type == "tv") {
					link = href
				}
			}
		})

		console.log(" --------- FILE M4UFREE ---------", link)
		if (link != "") {

			libs.request_getHTML(link, headers, {link: link, config: config}).then(function(resParseDetail) {

				var parseTv = cheerio.load(resParseDetail.data)
				var token = parseTv("meta[name=csrf-token]").attr("content")
				var urlAjax = "http://them4ufree.info/ajax"
				var urlAjaxTv = "http://them4ufree.info/ajaxtv"
				var headerPost = {
					"User-Agent": libs.request_getRandomUserAgent(),
					"Accept-Language": "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3",
					"Origin": source.info.url,
					"Connection": "keep-alive",
					"content-type": "application/x-www-form-urlencoded;"
				}			
				if (movieInfo.type == "movie") {

					console.log(" ---------  M4UFREE SEARCH DETAIL ---------", parseTv(".singlemv").length)
					parseTv(".singlemv").each(function() {
						var m4uToken = parseTv(this).attr("data")
						var bodyMovie = {
							m4u: m4uToken,
							_token: token
						}

						libs.request_postText(urlAjax, bodyMovie, headerPost).then(function(resParseAjax) {

							
							var source = resParseAjax.data.match(/sources *\: *([^\]]+)/i);

							if (source && source.length > 0) {
								source = source[1].trim() + "]"
								var sources = JSON.parse(source)
								for (var item of sources) {

									var embed = item.file
									console.log(embed, " --------- FILE M4UFREE ---------")
									libs.request_getHeader(embed, 'HEAD', {}, {embed: embed}).then(function(res) {

										console.log("------------- header M4uFree --------------", res.url, res);

										var hostName = libs.string_getHost(res.url);
										var contentType = res.data["Content-Type"] || res.data["content-type"];

										console.log("------------- contentType M4uFree --------------", res.url,  hostName, hosts[hostName], contentType);

										if (contentType) {
											if (contentType.indexOf("html") != -1 || contentType.indexOf("plain") != -1) {

												var resource = {
													"provider": "M4uFree".toUpperCase(),
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

												console.log("------------- direct fileSize M4uFree --------------", fileSize);
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
										console.log("------ error_M4uFree ----------", e)
									})
								}
							}

						}).catch(function(errParseAjax) {
							console.log("---------- ERROR M4u ParseAjax", errParseAjax)
						})
					})
				}


				if (movieInfo.type == "tv") {
					console.log(" ---------  M4UFREE SEARCH DETAIL TV ---------", parseTv(".episode").length, movieInfo)
					parseTv(".episode").each(function() {
						var idEpisode = parseTv(this).attr("idepisode")
						var seasonEpisodeText = parseTv(this).text()
						var seasonS = movieInfo.season < 10 ? `0${movieInfo.season}` : `${movieInfo.season}`
						var episodeS = movieInfo.episode < 10 ? `0${movieInfo.episode}` : `${movieInfo.episode}`
						var seasonEpisodeUser = `S${seasonS}-E${episodeS}`

						if (slugify(seasonEpisodeText, {lower: true}) == slugify(seasonEpisodeUser, {lower: true})) {
							var bodyEpisode = {
								idepisode: idEpisode,
								_token: token
							}
							libs.request_postText(urlAjaxTv, bodyEpisode, headerPost, {}).then(function(resParseEpisode) {
								var parseTvShow = cheerio.load(resParseEpisode.data)
								console.log(parseTvShow(".singlemv").length, "xxxxx")
								parseTvShow(".singlemv").each(function() {
									var m4uToken = parseTvShow(this).attr("data")
									var bodyMovie = {
										m4u: m4uToken,
										_token: token
									}

									libs.request_postText(urlAjax, bodyMovie, headerPost).then(function(resParseAjax) {
										var source = resParseAjax.data.match(/sources *\: *([^\]]+)/i);

										if (source && source.length > 0) {
											source = source[1].trim() + "]"
											var sources = JSON.parse(source)
											for (var item of sources) {

												var embed = item.file
												libs.request_getHeader(embed, 'HEAD', {}, {embed: embed}).then(function(res) {

													console.log("------------- header M4uFree --------------", res.url, res);

													var hostName = libs.string_getHost(res.url);
													var contentType = res.data["Content-Type"] || res.data["content-type"];

													console.log("------------- contentType M4uFree --------------", res.url,  hostName, hosts[hostName], contentType);

													if (contentType) {
														if (contentType.indexOf("html") != -1 || contentType.indexOf("plain") != -1) {

															var resource = {
																"provider": "M4uFree".toUpperCase(),
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

															console.log("------------- direct fileSize M4uFree --------------", fileSize);
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
													console.log("------ error_M4uFree ----------", e)
												})
											}
										}

									}).catch(function(errParseAjax) {
										console.log("---------- ERROR M4u ParseAjax", errParseAjax)
									})
								})
							}).catch(function(errParseEpisode) {
								console.log("----------- ERROR M4uFree Parse Episode")
							})
						}
					})
				}
			}).catch(function(eParseDetail) {
				console.log("------------ ERROR M4UFREE PARSE DETAIL ----------", eParseDetail)
			})
			
		}
		
	}).catch(function(errHtml) {
		console.log("------------- ERROR M4UFree ------------", errHtml)
	})	
}