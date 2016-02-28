var module = require('./module.js');

var args = process.argv;

for (var i = 0; i < 3; i++) {
  module(i, args[i + 2]);
}
