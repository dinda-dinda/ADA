var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type': 'text/html'});
	
	let q = url.parse(req.url,true).query;

	res.write('Bienvenido! '+q.nombre);

	res.end(); //creo servidor
}).listen(8080);

// localhost:8080/?nombre=Fulano