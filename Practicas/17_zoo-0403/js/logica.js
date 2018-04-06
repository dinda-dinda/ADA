/*
Hervivoros, carnivoros
Perezoso, koala, tigre, guacamayo, elefante, boa
Elefante es Babar
cantidad de patas
A partir de la cant de patas, kilos de comida

Mostrar pantalla, comida y cant de kilos

2 patas y hervivoro 1.5 kg
4 patas y hervivoro 3 kg
4 patas y carnivoro 5 kg
no patas un cobayo -.-
Si elefante o se llama Babar 20kg.*/

var patas;
var kilos;
var alimentacion;
var nombre;
var especie = "boa";

switch (especie) {

    case "guacamayo":
    case "cobayo":
    case "perezoso":
    case "koala":
    case "elefante":
        var alimentacion = "hervivoro";
        break;

    case "boa":
    case "tigre":
        var alimentacion = "carnivoro";
        break;
}

switch (especie) {

    case "tigre":
    case "cobayo":
    case "perezoso":
    case "koala":
    case "elefante":
        var patas = "4";
        break;

    case "guacamayo":
        var patas = "2";
        break;

    case "boa":
        var patas = "0";
        break;
}
if (alimentacion = "hervivoro") {
    if (patas = 2) {
        kilos = 1.5;
    } if (patas = 4) {
        kilos =20;
    }

} else if(alimentacion ="carnivoro"){
    if (patas=4){ 
        kilos=5;
    } if (patas=0) {
        kilos="-.-"
    }
}



console.log("Especie : " + especie + "; Cantidad de patas: " + patas + "; Tipo de alimentacion: " + alimentacion+"; Kilos de comida: "+kilos);