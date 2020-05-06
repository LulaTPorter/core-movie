

libs.db_store = function(key, value, extraInfo={}) {
	return new Promise(function(resolve, reject) {

		asyncS.setItem(key, JSON.stringify(value)).then(function() {
			resolve({data: true, extraInfo: extraInfo})
		}).catch(function(e) {
			console.log("---------- DB SET ---------", e)
			reject(false)
		})
	})
}

libs.db_get = function(key, extraInfo={}) {
	return new Promise(function(resolve, reject) {

		asyncS.getItem(key).then(function(res) {
			resolve({data: res, extraInfo: extraInfo})
		}).catch(function(e) {
			console.log("---------- DB GET ---------", e)
			reject(false)
		})
	})
}

libs.db_remove = function(key, extraInfo={}) {
	return new Promise(function(resolve, reject) {

		asyncS.removeItem(key).then(function(res) {
			resolve({data: true, extraInfo: extraInfo})
		}).catch(function(e) {
			console.log("---------- DB REMOVE ---------", e)
			reject(false)
		})
	})
}