var fs = require('fs')
var path = process.argv[2]
var filter = "." + process.argv[3]

fs.readdir(path, function (err, list){
	list.forEach(function(file){
		if(file.indexOf(filter) > -1) {
			console.log(file)
		}
	})
})
