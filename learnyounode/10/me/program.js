var net = require('net');

var server = net.createServer(function (socket){
  var date  = new Date();
  var year  = date.getFullYear();
  var month = formatter(date.getMonth() + 1);
  var day   = formatter(date.getDate());
  var hour  = formatter(date.getHours());
  var min   = formatter(date.getMinutes());
  var ret = year + '-' + month + '-' + day + ' ' + hour + ':' + min;
  socket.setEncoding("utf8");
  socket.write(ret + "\n");
  socket.end();
});
server.listen(process.argv[2]);


function formatter(param) {
  param = '' + param;
  return param.length > 1 ? param : "0" + param;
}