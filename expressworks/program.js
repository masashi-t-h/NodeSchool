var express = require('express');
var app = express();

app.get('/home', function(re, res) {
	res.send('Hello World!');
});
app.listen(process.argv[2]);