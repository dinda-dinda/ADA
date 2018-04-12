var amigosDiv =document.getElementById("amigos");

var arrayNombres = ["Pepa", "Holandesa", "Me gustan los Muffins"];

var oveja = ["Lala", "img/oveja.jpg"];
var coneja = ["pepito", "img/pepito.jpg"];

var amigos = [oveja, coneja];

console.log("Nombre del conejo: " + amigos[1][0]);

var i, j;
for (i = 0; i < amigos.length; i++) { //me recorre la fila
    //console.log(amigos[i]);

    for (j = 0; j < amigos[i].length; j++) { //me recorre la columna
        console.log(amigos[i][j]) + ",";
    }
}


function cargarDatosPersonales(arrayNombres) {
    var nombre = document.createElement('h1');
    nombre.textContent = arrayNombres[0];

    var nacionalidad = document.createElement('h2');
    nacionalidad.textContent = arrayNombres[1];

    var resumen = document.createElement('h2');
    resumen.textContent = arrayNombres[2];

    var datosPerfil = document.getElementById('datosPerfil');
    datosPerfil.appendChild(nombre);
    datosPerfil.appendChild(nacionalidad);
    datosPerfil.appendChild(resumen);

}

/**
 *   Muestra en el html una lista de imagenes
 *   @params lista | array, padre |
 *   void 
 **/
function cargarListaImagenes(lista, padre) {
    
    /*var oveja = ["Lala",      "img/oveja.jpg"];
     
      var coneja = ["pepito",   "img/pepito.jpg"];

      var amigos = [oveja,  coneja];*/

    for (var i = 0; i < lista.length; i++) {
    var img = document.createElement('img');
         padre.appendChild(img);
        img.src = lista[i][1];
    }
}

fotoMuro = "img/fulanito.jpg";
textoMuro = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, modi.";

var arrayMuro = [fotoMuro,textoMuro];


/**
*   Muestra en el html una imagen y un texto
*   @params lista | array 
*   void 
**/

function cargarMuro(arrayMuro){


var fotoMuro =document.createElement('img');
    fotoMuro.src = arrayMuro[0];

var textoMuro =document.createElement('p');
     textoMuro.textContent = arrayMuro[1];

 var muroDiv = document.getElementById('muro');
    muroDiv.appendChild(fotoMuro);
    muroDiv.appendChild(textoMuro);

}
var entradas[];//aca 

function crearMuro(m){
    if(entradas>0){
    var ul=document.createElement('ul'); // la traigo del html, padre.

    for(var i=0; i<3;i++){
        var li = document.createElement('li');

        var img = document.createElement('img');
        img.src = "img/coneja.png";
        img.classList.add("thumb"); //le agrego una clase al li

        /*
        img.style.width = "80px";
        img.style.height = "80px";
        */

        li.appendChild(img);
        var texto = document.createElement("p");
        texto.textContent = entradas[i];
        li.appendChild(texto);
        ul.appendChild(li);
    }
}
}
cargarDatosPersonales(arrayNombres);

cargarListaImagenes(amigos,amigosDiv);

cargarMuro(arrayMuro);


//hacer la tarea
//terminar esto ver el ppt de eventos

/*

var h1 = document.getElementById("nombre");

var nombre = h1.textContent; //me quedo con el valor de texto del elemento

var h2 = document.getElementById("edad");

}
var edad = h2.textContent; //28

function validarEdad(edad) {
    var edad = parseInt(x); //convierte en entero si no puede me trar NAN

    if (!isNaN(x)) { //isNaN
        isNaN === false;

        if (edad >= 18) {
            return = true;
        } else {
            return = false;
        }
    } else{ 
        return=false;
    }
*/