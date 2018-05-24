var http = require('http');
//agrego el modulo FileServer
var fs= require('fs');

http.createServer(function(req,res){

	//res.write(200,'Content-type');
	fs.readFile('perfil.html', function(err,data){
		//Escribo el contenido del archivo en la respuesta
		res.writeHead(200,{'Content-type':'text/html'});
		res.write(data);
		res.end(); // para cerrar el paquete tambien puedo hacer res.end(data);
	})	

}).listen('8080', function(){
	console.log("Escuchando en el puerto 8080");
})
