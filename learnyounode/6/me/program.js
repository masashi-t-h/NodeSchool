var module = require('./module')
var path = process.argv[2]
var filter = "." + process.argv[3]

module(path, filter)