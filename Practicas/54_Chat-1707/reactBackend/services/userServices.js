self={}

var users = [{"id":1,
			  "user":"Pepe",
			  "pass":"1234",
			  "conectado":false,
			},
			  {"amigos":[2,3],
			  "id":2,
			  "user":"Pepa",
			  "pass":"1234",
			  "conectado":false,
			  "amigos":[1]
			},
			  {"id":3,
			  "user":"Pepito",
			  "pass":"1234",
			  "conectado":false,
			  "amigos":[]
			}
			  ];

/*-metodos login-*/
self.validarUsuarios = function(username,pass){
											/*find= ARRAYusers.find(uINDICE=>)uINDICE.userATRIBUTO == usernamePARAMETRO*/
	let valido = users.find(u=>u.user == username && u.pass == pass);
											/*me devuelvo un objeto de tipo user*/
	if(valido)return valido.id; 			/*si es valido returno id sino 0*/
	return 0;
}

self.getAmigos= function(id){				/*busco los amigos segun el id*/
	
	let respuesta = [];
	let yo = users.find(u=>u.id == id); 	//me busco yo en el array de usuarios. cuando tengo el objeto guardado en "yo"
	
	for (var i = 0; i < yo.amigos.length; i++) {
		for (var w = 0; w < users.length; w++) {
			if(users[w].id == yo.amigos[i]){
				let user= {'username':users[w].user,
							'estado': users[j].conectado};
				respuesta.push(user);
				 }
			}
		}
	}
	return respuesta;					//devuelvo un array con la info de amigos de ese id

}




self.setStatus = function(id){				/*cambio el estatus a conectado*/

	let yo = users.find(u=>u.id == id);		//me vuelvo a buscar por el id
	yo.conectado = true;					//cambio el atributo a conectado
}


self.getMyUser = function(token){

	return users.find(u=>u.id == token); //ahora el token es el id, despues tendria que ser un numero X
}


self.existeUsuario = function(username){
	let usuario = users.find(u=>u.username == username);
	return usuario.id;
}

self.agregarAmigo = function(yo,amigoId){
	if(yo.amigos.indexOf(amigoId) == -1 ){ //indexOF, recorre un array y si no lo encuentra trae -1 sino trae el index donde esta el array

		yo.amigos.push(amigoId);
	}
	return true;
}

module.exports = self;