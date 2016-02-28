var http = require('http');
var bl = require('bl');

var arr = [];
const lastArgIdx = 3;
var count = 0;
  
module.exports =function (index, arg){
	http.get(arg, function (response) {  
    response.pipe(bl(function (err, data) {  
      if (err)  
        return console.error(err);
      arr[index] = data.toString();
      count++;
      if (count == lastArgIdx) {
      	prinResult();
      }
    }));
  }
);};

function prinResult () {
	for (var i = 0; i < 3; i++)
		console.log(arr[i]);
}

