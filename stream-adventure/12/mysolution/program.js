'use strict'

var duplexer = require('duplexer2'),
    through  = require('through2');

module.exports = function (counter) {
	var countries = {};


	function write (obj, encode, next) {
		if( obj.country in countries) {
			countries[obj.country]++;
		} else {
			countries[obj.country] = 1;
		}
		next();
	}

	function end () {
		counter.setCounts(countries);
	}

	return duplexer({objectMode: true}, through.obj(write, end), counter);
};
