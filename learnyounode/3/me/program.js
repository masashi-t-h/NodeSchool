var fs = require('fs')
var path = process.argv[2]
var buf = fs.readFileSync(path, 'utf-8')
var str = buf.toString()
var texts = str.split('\n')
var len = texts.length
if (len == 0){
	console.log(0)
} else {
	console.log(len - 1)
}
