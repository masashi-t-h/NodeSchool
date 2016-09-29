var fs = require('fs');
var file_name = process.argv[2];
fs.createReadStream(file_name).pipe(process.stdout);