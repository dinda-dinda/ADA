self={};	//me exporto a mi mismo.
require('./services/userServices'); //importo el modulo de userServices donde voy a buscar los datos de usuario

self.registrar = function(){
/*TODO*/
}

self.login = function(username,pass,res){ 														//la funcion que va a responder al login
																							//separo en tres instancias el login.
	let id= userServices.validarUsuarios(username,pass); 									//llamo al metodo validad usuarios
																							/*Si el id existe busco a los amigos y le pongo conectado en true*/
		let amigos = userServices.getAmigos(id); 											//busco los amigos ylos guardo en una variable "amigos"
		userServices.setStatus(id);															// utilizo el metodo set Status para cambiarle el estatus a conectado con el id
		res.json({'mensaje':'Usuario logeado correctamente', 'amigos':amigos}); 			//respondo un objeto con lo que me responde del getAmigos
	}else{
		res.json({'mensaje':'El usuario no existe'}); 										//defino la respuesta, tambien en formato JSon.
	}
}



self.agregarAmigo = function(req,res,next){
	let username = req.params.name;			//como le pegue con get, me traigo el parametro.
	
	let existe = userServices.existeUsuario(username);
	if(existe){
		
		let token = req.params.token;				//token de busqueda de usuario logueado
		let yo = userServices.getMyUser(token);		//traigo mi usuario logueado con el token
		
		userServices.agregarAmigo(yo,existe)
	}
}


module.exports =self;