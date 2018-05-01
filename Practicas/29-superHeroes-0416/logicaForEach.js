var mutante ={'nombre':'wolverine',
				'Comic':'X-men',
				'Editora':'Marvel',
				'Peliculas': ['X-men','logan']
			};

var data = [mutante,'rogue','ciclope'];

for(i=0;i<data.lenght;i++){
	console.log(data[i]);
};

function mostrar(e){console.log(e);}
data.forEach(mostrar);

data.forEach(function(e){

});

//utilizando forEach quiero mostrar el nombre

data.forEach(function(e){ //forEach paso una funcion
	console.log(e.nombre); 
}); //cierro la funcion y despues el forEach!!!


///++ LET y VAR
var valido= true; //Global
const pi= 3.14;

/**
* Verifica validez valido global
*
**/
function validar(){
	if(valido){console.log("todo piola");}
}

/**
* Verifica validez valido local
*
**/
function validar2(){
	
	let valido=true; //soy mas descriptivo la variable es local
	if(valido){console.log("todo piola");}
}

if (valido) {
	let otra= false;
} else {}