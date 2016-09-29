var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through2');


var loud = tr.select('.loud').createStream();

process.stdin
	.pipe(tr)
	.pipe(process.stdout);

loud
	.pipe(through(function (buff, _, next) {
		this.push(buff.toString().toUpperCase());
		next();
	}))
	.pipe(process.stdout);
loud.end();
