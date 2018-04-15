//muro
var entradas = []; //aca

//avatar
var foto = "img/din.jpeg";
var nombre = "Dinda";

//about me
const infoPers = ["Artista", "Argentina", "hablo en binario"];

//influencias
var abramovich = ["abramovich", "img/abramovic.jpg"];
var dali = ["dali", "img/dali.jpg"];
var leparc = ["leparc", "img/leparc.jpg"];
var influencias = [abramovich, dali, leparc];

var amigosDiv = document.getElementById("amigos");

/**
 *   Muestra en el html una imagen de Avatar y un texto h1 abajo
 *   @params img h1 | src/img, nombre |
 *   void 
 **/
function displayAvatar(foto, nombre) {
    var perfil = document.getElementById("avatar");
    perfil.classList.add("Flex"); //le agrego una clase a Perfil
    var img = document.createElement('img');
    img.src = foto;
    img.classList.add("Picture"); //le agrego una clase la Img
    img.classList.add("Flex");
    perfil.appendChild(img);
    var texto = document.createElement("h1");
    texto.textContent = nombre;
    perfil.appendChild(texto);
}

/**
 *   Muestra en el html info personal de la persona
 *   @params array con la info
 *   void 
 **/
function cargarDatosPersonales(infoPers) {
    var profes = document.createElement('h3');
    profes.textContent = infoPers[0];
    profes.classList.add("Purple");


    var nacion = document.createElement('h3');
    nacion.textContent = infoPers[1];
	nacion.classList.add("Purple");
    
    var aboutMe = document.createElement('h3');
    aboutMe.textContent = infoPers[2];
    aboutMe.classList.add("Purple");

    var datosPerfil = document.getElementById('infoPers');
    datosPerfil.classList.add("Flex"); //le agrego una clase a datosPerfil
    
    
    datosPerfil.appendChild(profes);
    datosPerfil.appendChild(nacion);
    datosPerfil.appendChild(aboutMe);
}


/**
 *   Muestra en el html un imagen de Avatar peque ☺+  un texto p 
 *	ingresado el imput si no hay ningun comment crea una UL
 *   @params 
 *   void 
 **/
function crearMuro() {
	console.log("crearMuro" + entradas.length);
	if(document.getElementById("entrada").value == "" ||
		document.getElementById("entrada").value == null) {
		alert("Texto vacio");
	} else {
    var m = document.getElementById('muro');

    if (entradas.length==0) {
        var ul = document.createElement('ul'); // la creo en el html.
        ul.setAttribute('id', 'posts');

        var li = document.createElement('li');
        var img = document.createElement('img');
        img.src = "img/abramovic.jpg";
        img.classList.add("Thumb"); //le agrego una clase al li

        li.appendChild(img);
        entradas.push(document.getElementById("entrada").value);//ingresar en el array el texto
        var texto = document.createElement("p");
        texto.textContent= entradas[entradas.length-1];
        li.appendChild(texto);
        ul.appendChild(li);

        m.appendChild(ul);
    } else {
        publicar(m);
    }
}
}

/**
 *   Muestra en el html un imagen de Avatar peque ☺ 
 * 					y un texto p ingresado el imput
 *   @params 
 *   void 
 **/

function publicar(muro) {
	console.log("publicar");
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'posts'); //pongo atributo y nombre
    
    
    var form = document.getElementById("entrada");
    var text = form.value;
    entradas.push(text); //ingreso al array el texto de entrada.
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = "img/dali.jpg";
    img.classList.add("Thumb"); //le agrego una clase a la img
    li.appendChild(img);
    var textoNewPost = document.createElement("p");
    textoNewPost.textContent = entradas[entradas.length - 1];
    li.appendChild(textoNewPost);
	ul.appendChild(li);

    muro.appendChild(ul);
}
/**
 *   Muestra en el html una lista de imagenes
 *   @params lista | array, padre |
 *   void 
 **/
function cargarListaImagenes(lista, padre) {
    
    /*var abramovich = ["abramovich", "img/abramovic.jpg"];
var dali = ["dali", "img/dali.jpg"];
var leparc = ["leparc", "img/leparc.jpg"];
var influencias = [abramovich, dali, leparc];
;*/

    for (var i = 0; i < lista.length; i++) {
    var img = document.createElement('img');
         padre.appendChild(img);
        img.src = lista[i][1];
    }
    amigosDiv= document.getElementById('amigos');
}

cargarListaImagenes(influencias,amigosDiv);


var btnEnviar = document.getElementById("enviar"); //le agrego el listener
btnEnviar.addEventListener("click", crearMuro); //programacion por eventos


displayAvatar(foto, nombre);
cargarDatosPersonales(infoPers);


console.log("hola");
