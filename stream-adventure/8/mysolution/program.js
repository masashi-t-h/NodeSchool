var req = require('request');

var res = req.post("http://localhost:8099");
process.stdin.pipe(res).pipe(process.stdout);