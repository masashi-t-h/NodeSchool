var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (cmd, args) {
	var ps = spawn(cmd, args);
	var out =  duplexer(ps.stdin, ps.stdout);
	return out;
};