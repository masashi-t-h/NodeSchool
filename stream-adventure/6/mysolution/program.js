var concat = require('concat-stream');
process.stdin.pipe(concat(function (str) {
    var joined = str.toString().split('').reverse().join('');
    console.log(joined);
}));