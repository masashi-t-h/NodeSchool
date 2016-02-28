var fs = require('fs')

function search (path, filter){
	fs.readdir(path, function (err, list){
	  list.forEach(function(file){
			if (file.indexOf(filter) > -1) {
				console.log(file)
		  }
	  })
  })
}

module.exports = search
