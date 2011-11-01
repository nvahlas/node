
var http = require('http');
 
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello world\n: first joyent, node, github app :)");
});
 
server.listen(process.env.PORT || 8001);
