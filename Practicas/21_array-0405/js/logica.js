//array neutro

/*
var N = 10;
var numeros = []; //array vacio//

for (var i = 0; i < N; i++) {
    numeros[i] =i;
    console.log(numeros[i]);
}
*/

//Ejercicio 2 Si el n es par que aparezca 0
/*
var N = 10;
var numeros = []; //array vacio//

for (i = 0; i < N; i++) {
    numeros[i] =i;
    
    if(i%2==0){ //si es par

    console.log("0");

    }else{
    console.log(numeros[i]);

}
}
*/

//Ej 3 arreglo de num x= [10,24,36,7,98,11,14,20] mostrar el val max.
//Ej 4 detallar posicion del mayor

const N = 8;
const x= [10,24,36,7,98,11,14,20]; //array vacio//
var numeroMayor=0;
var resultado = 0;
var posicion = 0;

for (i = 0; i < N; i++ ) {
  
    resultado = x[i] ;

    if ( numeroMayor < resultado ){
  
    posicion = i ;
    numeroMayor = resultado ;
  
    }  
}
console.log("Muestro el mayor numero y el index del array : Numero " + numeroMayor + ' Posicion ' + posicion);


//hacer ejercicio 7
/*
datos1 = [“Fido”,”Gomez”,26,15000.78,true] y datos2 = [“Gervasio”,”Fernandez”,32,28.550,false] 
Determinar: • ¿Cuál de los dos personajes es más viejo? 
• ¿Cuál de los dos personajes está casado? 
• Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto
 será el monto a cobrar? 
 */


const datos1 = ["Fido","Gomez",26,15000.78,true];
const datos2 = ["Gervasio","Fernandez",32,28.550,false];

const lista = [datos1,datos2];
var nombreMayor = "";
var edadMayor = 0;
var casado = "";

var sueldoFido = 0;
var sueldoGervasio = 0;

for (var i = lista.length - 1; i >= 0; i--) {
	
		if(lista[i][2]>edadMayor) {
			edadMayor = lista[i][2];
			nombreMayor = lista[i][0] + ' ' + lista[i][1]; 
		}
		if (lista[i][lista[i].length-1] === true) {
			casado = lista[i][0] + ' ' + lista[i][1]; 
		}
		if (lista[i][0]=="Fido") {
			sueldoFido=lista[i][3];
			}else{
				sueldoGervasio= lista[i][3];
			}
}		

	console.log("adulto mayor : "+nombreMayor);
	console.log("adulto casado : "+casado);
	console.log("monto a cobrar : "+(sueldoFido+(sueldoGervasio*0.125)));


