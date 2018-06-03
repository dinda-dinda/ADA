var http = require('http');
var puerto = 8080;

var miModulo = require('./modulos/procesoController');

var url = require('url');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

// exporta los parámetros al objeto q
  var q = url.parse(req.url, true).query;
  let m =  q.month;
  let d = q.day;

  let respuesta = miModulo.signo(m,d);
  res.end(respuesta);

}).listen(puerto);

// Formato de url con parámetros
// url.com/?nombre=pepe&apellido=nada















