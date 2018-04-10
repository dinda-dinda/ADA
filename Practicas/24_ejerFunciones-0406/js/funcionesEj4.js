/*Ejercicio 4


 Escribir una función que dado un arreglo con
 los siguientes datos:  

Corredor = { “Nombre”,”Apellido”,edad,”genero” }
retorne la categoría a la cual estará anotado por ejemplo: 
F 18 – 25, M 18 – 25 
*/

var sexo = "femenino";
var anios = 99;
var nombre = "Fulano";
var apellido = "Lopez";

const listaCorredor = [nombre, apellido, anios, sexo];
const rangoEdad = ["5 - 7", "8 - 11", "12 - 14", "15 - 17", "18 - 25", "26 - 39", "+40"];


function calcularCategoria(corredor) {

 console.log(corredor);
	var categoria = 0;
	var genero = 0;

    if (corredor[3] = sexo) {
        genero = "F";
    } else {
        genero = "M";
    }

    let edad = corredor[2]; //let existe dentro del scope

    if (edad >= 5 && edad <= 7) {
        categoria = rangoEdad[0];
    }
    if ((edad >= 8) && (edad <= 11)) {
        categoria = rangoEdad[1];
    }
    if ((edad >= 12) && (edad <= 14)) {
        categoria = rangoEdad[2];
    }
    if (edad >= 15 && edad <= 17) {
        categoria = rangoEdad[3];
    }
    if (edad >= 18 && edad <= 25) {
        categoria = rangoEdad[4];
    }
    if ((edad >= 26) && (edad <= 39)) {
        categoria = rangoEdad[5];
    }
    if (edad >= 40) {
        categoria = rangoEdad[rangoEdad.length-1];
    }


console.log("La categoria correspondiente es: " + genero + " " + categoria);
}
calcularCategoria(listaCorredor);
calcularCategoria(listaCorredor);
calcularCategoria(listaCorredor);