var through = require('through2');
var split = require('split');
var count = 0;

process.stdin
       .pipe(split())
       .pipe(through(function (line, _, next) {
       			count++;
       			if(count % 2 > 0) {
       				this.push(line.toString().toLowerCase() + '\n');
       			} else {
       				this.push(line.toString().toUpperCase() + '\n');
       			}
       			next();
				}))
       .pipe(process.stdout);