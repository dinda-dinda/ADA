//ambos son iguales?
//cuantas letras tienen en 
//Agregar variables para al final poner los resultados

const x =["a","l","f","a"];
const y =["a","l","f","a","j","o","r"];

function compararArrays (x,y){
	var i,letras;

	if(x.length == y.lenght){
		//si son iguales
		for (var i = 0;x.lenght; i++) {

			if(x[i] != y[i]){
	
				return "No son iguales";

				}
			}
				return "Son iguales";
	}

	if(x.lenght>y.lenght){
				return "X es mayor que X" ;

	}else{

				return "Y es mayor que X";
	}

	letras = letrasEnComun(x,y);

	
}


function letrasEnComun(x,y) {
	var i,j;
	var k =0;
	var cont = 0;
	var boleano= false;
	var z[];
//Anidar for, por cada vez que recorro el array lo hace n veces
//Agrego la variable booleana para que lo cuente una vez.
//luego resetea la variable booleana.
//lo hace cada vez que empieza la recorrida
//Si lo encuentra, vuelve a sumar y volver a poner en false
//

	for (var i = 0; i < x.length; i++) {

		for (var j =0; j<y.length; j++) {
			
			if(x[i] == y[j]){
				boleano=true;
			}
		}
		if(boleano){
			if(z.indexOf(x[i])==-1){ //si el elemento es distinto a lo que esta en el array z
			
			z[k]=x[i];	//guardo en z todas las que tengo en comun;
			k++; 		//guardo en indice 
			}
			boleano=false;
		}

		
	}
	return x.lenght; // devuelve la cantidad de letras que hay en z
}