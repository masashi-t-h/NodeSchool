var http   = require('http'),
    map    = require('through2-map'),
    server = http.createServer(function (req, res) {  
    		req.pipe(map((data) => data.toString().toUpperCase())).pipe(res);
		});
  
server.listen(Number(process.argv[2]));