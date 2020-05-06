libs.request_getRandomUserAgent = function() {
	var userAgent = [
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.113 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36"
	]
	var random = _.random(0, userAgent.length-1)
	return userAgent[random]
}



libs.request_detect = function(url, headers={}, extraInfo={}) {
	return new Promise(function(resolve, reject) {

		var key = "sources_captcha"
		var headerCustom = {
			"Connection": "keep-alive",
        	"Upgrade-Insecure-Requests": "1",
        	"User-Agent": libs.request_getRandomUserAgent(),
        	"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        	"Accept-Language": "en-US,en;q=0.8",
		}

		libs.db_get(key, {url: url, extraInfo: extraInfo}).then(function(res) {

			var host = libs.string_getHost(url)
			if (res.data) {
				var parser = JSON.parse(res.data)
				if (parser[host]) {
					
					if(parser[host]["is_verify"] == true) {

						// check cookie is expire
						fetch(url, {headers: _.merge(headers, parser[host]["headers"]), method: "GET"}).then(function(resCheck) {
							resCheck.text().then(function(html) {
								if (html.indexOf("captcha-bypass") != -1) {

									parser[host]["is_verify"] = false;
									parser[host]["headers"] = {}
									libs.db_store(key, JSON.stringify(parser)).then(function() {
										resolve({
											data: {},
											extraInfo: extraInfo
										})
										return
									}).catch(function(errorSave) {
										reject(errorSave)
										return
									})

								} else {
									resolve({
										data: parser[host]["headers"],
										extraInfo: extraInfo
									})
									return
								}
							})
						}).catch(function(e) {
							reject(e)
							return
						})
						
					} else {
						resolve({
							data: false,
							extraInfo: extraInfo
						})
						return
					}
				} else {

					var source = {}
					source[host] = {
						is_verify: false,
						url: url,
						headers: {}
					}
					var mapping = _.merge(parser, source)
					libs.db_store("sources_captcha", JSON.stringify(mapping)).then(function() {
						resolve({
							data: {},
							extraInfo: extraInfo
						})
						return
					}).catch(function(error) {
						reject(error)
						return
					})
				}
			} else {
				fetch(url, {headers: _.merge({}, headerCustom, headers)}).then(function(result) {
					result.text().then(function(html) {
						if (html.indexOf("captcha-bypass") != -1) {
							var source = {}
							source[host] = {
								is_verify: false,
								url: url,
								headers: {}
							}
							libs.db_store("sources_captcha", JSON.stringify(source)).then(function() {
								resolve({
									data: {},
									extraInfo: extraInfo
								})
								return
							}).catch(function(error) {
								reject(error)
								return
							})
						} else {
							relsove({})
							return
						}
					}).catch(function(e) {
						reject(e)
						return
					})
					
				}).catch(function(e) {
					reject(e)
					return
				})
			}
		}).catch(function(e) {
			reject(e)
			return
		})

	})
}

libs.request_getHeaderCaptcha = function(url, extraInfo={}) {

	return new Promise(function (resolve, reject) {

		var host = libs.string_getHost(url)
		libs.db_get(host, {host: host}).then(function(res) {

			if (res.data) {
				var parser = JSON.parse(res.data)
				if (parser[res.extraInfo.host]) {
					
					if(parser[res.extraInfo.host]["is_verify"] == true) {
						resolve({
							data: parser[res.extraInfo.host]["headers"],
							extraInfo: extraInfo
						})
						return
					} else {
						resolve({
							data: {},
							extraInfo: extraInfo
						})
						return
					}
				} else {

					resolve({
						data: {},
						extraInfo: extraInfo
					})
					return
				}
			} else {
				resolve({
					data: {},
					extraInfo: extraInfo
				})
				return
			}
		}).catch(function(e) {
			resolve({
				data: {},
				extraInfo: extraInfo
			})
			console.log(e)
			return
		})
	})
	

}

libs.request_parseHeaderBody = function (headers, body) {
	let result = {
        headers: headers || {},
        body: body
    };
    let contentType = result.headers["content-type"] || result.headers["Content-Type"];

    if(contentType == undefined) {
        result.headers["content-type"] = "application/x-www-form-urlencoded";
        result.body = typeof body === 'object' ? qs.stringify(body) : body;
        return result;
    }

    if(contentType.includes("x-www-form-urlencoded")) {
        result.body = typeof body === 'object' ? qs.stringify(body) : body;
        return result;
    }

    if(contentType.includes("json")) {
        result.body = typeof body === 'object' ? JSON.stringify(body) : body;
        return result;
    }
}

libs.request_getHTML = function (url, headers, extraInfo={}) {
	return new Promise(function(relsove, reject) {


		fetch(url, {headers}).then(function(response) {

			response.text().then(function(res) {
				relsove({
					"data": res,
					"url": url,
					"headers": headers,
					"extraInfo": extraInfo
				})
				return
			}).catch(function(e) {
				reject(e)
				return
			})
		}).catch(function(error) {
			reject(error)
			return
		})
	});
} 


libs.request_getJSON = function (url, headers, extraInfo={}) {
	return new Promise(function(relsove, reject) {
		fetch(url, {
			headers
		}).then(function(response) {

			console.log("------------- GETJSON -----------", response)
			response.json().then(function(res) {
				relsove({
					"url": url,
					"headers": headers,
					"data": res,
					"extraInfo": extraInfo
				})
				return
			}).catch(function(e) {
				reject(e)
				return
			})
		}).catch(function(error) {
			reject(error)
			return
		})
	});
}


libs.request_postJSON = function (url, body={}, headers={}, extraInfo={}) {
	return new Promise(function(relsove, reject) {
		fetch(url, {
			headers: headers,
			method: "POST",
			body: body
		}).then(function(response) {

			console.log("------------- POST  GETJSON -----------", response)
			response.json().then(function(res) {
				relsove({
					"url": url,
					"headers": headers,
					"data": res,
					"extraInfo": extraInfo
				})
				return
			}).catch(function(e) {
				reject(e)
				return
			})
		}).catch(function(error) {
			reject(error)
			return
		})
	});
}


libs.request_postText = function (url, body={}, headers={}, extraInfo={}) {
	return new Promise(function(relsove, reject) {
		let parsed = libs.request_parseHeaderBody(headers, body);
		fetch(url, {
			headers: headers,
			method: "POST",
			body: parsed.body
		}).then(function(response) {

			console.log("------------- POST  GETTEXT -----------", response)
			response.text().then(function(res) {
				relsove({
					"url": url,
					"headers": headers,
					"data": res,
					"extraInfo": extraInfo
				})
				return
			}).catch(function(e) {
				reject(e)
				return
			})
		}).catch(function(error) {
			reject(error)
			return
		})
	});
}



libs.request_get = function (url, headers, extraInfo={}) {
	return new Promise(function(relsove, reject) {

		libs.request_detect(url, headers, extraInfo={}).then(function(res) {

			if (_.isBoolean(res.data)) {
				reject(new Error("----------- " + url + " is captcha"))
				return
			} else {
				console.log("----------- CAPTCHA HEADER ---------",  _.merge(headers, res.data))
				fetch(url, {headers: _.merge(headers, res.data), method: "GET"}).then(function(response) {
					response.text().then(function(text) {

						relsove({
							"url": url,
							"headers": headers,
							"data": text,
							extraInfo: extraInfo
						})
						return
					}).catch(function(e) {
						reject(e)
						return
					})
			
				}).catch(function(error) {
					reject(error)
					return
				})
			}
		}).catch(function(error) {
			reject(error)
			return
		})
		
	});
}

libs.request_getHeader = function (url, method, headers, extraInfo={}) {
	return new Promise(function(relsove, reject) {
		fetch(url, {
			headers: _.merge(headers, {"Accept-Encoding": "deflate"}),
			method: method
		}).then(function(response) {

			// console.log("------------- GET HEADER ----------------", response.headers)
			relsove(
			{
				"data": response.headers.map,
				"url": url,
				"method": method,
				"extraInfo": extraInfo
			}
			)
			return
		}).catch(function(error) {
			reject(error)
			return
		})
	});
}

libs.request_getFileSize = function(url, headers) {
	return new Promise(function(relsove, reject) {
		fetch(url, {
			headers: headers,
			method: "HEAD"
		}).then(function(response) {
			var headerResponse = response.headers.map
			var contentLength = headerResponse["Content-Length"] || headerResponse["content-length"]
			if (!contentLength) {
				reject(false)
				return
			}
			relsove({
				"url": url,
				"headers": headers,
				"data": contentLength
			})
			return
		}).catch(function(error) {
			reject(error)
			return
		})
	});
}




libs.request_post = function(url, headers={}, body, extraInfo={}) {
	return new Promise(function(relsove, reject) {

		var extraInfo = {
			url: url,
			headers: headers,
			body: body,
			extraInfo: extraInfo
		};
		libs.request_getHeaderCaptcha(extraInfo.url || extraInfo.file, extraInfo).then(function(headerCustom) {
			let parsed = libs.request_parseHeaderBody(headers, body);
			fetch(url, {
				"method": "POST",
	            "headers": _.merge(parsed.headers, headerCustom.data),
	            "body": parsed.body
			}).then(function(response) {
				response.text().then(function(res) {
					relsove({
						"url": url,
						"headers": headers,
						"body": body,
						"data": res,
						"extraInfo": headerCustom.extraInfo.extraInfo
					})
					return
				}).catch(function(e) {
					reject(e)
					return
				})
			}).catch(function(error) {
				reject(error)
				return
			})
		}).catch(function(e) {
			reject(e)
			return
		})
        
	});
}




