
var http = require('http');
var mysql = require('mysql');

var server = http.createServer(function (req, res) {
  var client = mysql.createClient({
	"user":"nico",
	"password":"m2gsL&D",
	"database":"nodetests"
  });

  client.query('select * from person', function(err, results, fields) {
	if (err) {
		throw err;
	}
	var txt = '';
	for ( var i in results ) {
		var r = results[i];
		txt += '[' + r.id + ']: ' + r.firstname + ' ' + r.lastname + '\n';
	}
	res.writeHead(200, { "Content-Type": "text/plain" })
	res.end("Hello world:\n" + txt);
	client.end();
  });
});
 
server.listen(process.env.PORT || 8001);
