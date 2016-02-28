var fs = require('fs')
var path = process.argv[2]

fs.readFile(path, function (err, data){
	var str = data.toString()
	var texts = str.split('\n')
	var len = texts.length
	if (len > 0){
		len--
	}
	console.log(len)
})


