

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

libs.request_getHTML = function (url, headers) {
	return new Promise(function(relsove, reject) {
		fetch(url, {headers}).then(function(response) {

			response.text().then(function(res) {
				relsove({
					"data": res,
					"url": url,
					"headers": headers
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


libs.request_getJSON = function (url, headers) {
	return new Promise(function(relsove, reject) {
		fetch(url, {headers}).then(function(response) {

			response.json().then(function(res) {
				relsove({
					"url": url,
					"headers": headers,
					"data": res
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



libs.request_get = function (url, headers) {
	return new Promise(function(relsove, reject) {
		fetch(url, {headers}).then(function(response) {
			response.text().then(function(res) {
				relsove({
					"url": url,
					"headers": headers,
					"data": res
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

libs.request_getHeader = function (url, method, headers) {
	return new Promise(function(relsove, reject) {
		fetch(url, {
			headers: headers,
			method: method
		}).then(function(response) {
			relsove(
			{
				"data": response.headers.map,
				"url": url,
				"method": method
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


libs.request_post = function(url, headers={}, body) {
	return new Promise(function(relsove, reject) {
		
        let parsed = libs.request_parseHeaderBody(headers, body);
		fetch(url, {
			"method": "POST",
            "headers": parsed.headers,
            "body": parsed.body
		}).then(function(response) {
			response.text().then(function(res) {
				relsove({
					"url": url,
					"headers": headers,
					"body": body,
					"data": res
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