var http = require('http'),
    url  = require('url'),
    port = process.argv[2];

var server = http.createServer(function(req, res){
	var req_url = url.parse(req.url, true),
	    query   = req_url.query,
	    date = new Date(query.iso);
	res.writeHead(200, { 'Content-Type' : 'application/json'});
	if ("/api/parsetime" == req_url.pathname) {
		var hour = date.getHours(),
		    min  = date.getMinutes(),
		    sec  = date.getSeconds();

		
		res.end(JSON.stringify({
			hour: hour,
			minute: min,
			second: sec
		}));
	} else {
		var unixtime = date.getTime();

		
		res.end(JSON.stringify({
			unixtime: unixtime
		}));
	}
});
server.listen(port);