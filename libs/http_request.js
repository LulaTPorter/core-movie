

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
			relsove(response.text())
			return
		}).catch(function(error) {
			reject(error)
			return
		})
	});
}


libs.request_getJSON = function (url, headers) {
	return new Promise(function(relsove, reject) {
		fetch(url, {headers}).then(function(response) {
			relsove(response.json())
			return
		}).catch(function(error) {
			reject(error)
			return
		})
	});
}



libs.request_get = function (url, headers) {
	return new Promise(function(relsove, reject) {
		fetch(url, {headers}).then(function(response) {
			try {
				relsove(JSON.parse(response.text()))
				return
			} catch(e) {
				reject(e)
				return
			}
			
		}).catch(function(error) {
			reject(error)
			return
		})
	});
}

libs.request_getHeader = function (url, headers) {
	return new Promise(function(relsove, reject) {
		fetch(url, {headers}).then(function(response) {
			relsove(response._headers)
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
			try {
				relsove(JSON.parse(response.text()))
				return
			} catch(e) {
				reject(e)
				return
			}	
		}).catch(function(error) {
			reject(error)
			return
		})
	});
}