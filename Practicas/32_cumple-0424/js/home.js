var ruta = 'img/';
var cumplesStorage = localStorage.getItem("cumples");
var jSon = JSON.parse(cumplesStorage);/*.cumples;*/
var cumples = jSon.cumples;


/***
 *	Recupero los cumples guardados
 ***/
function proximosCumples() {

    $.each(cumples, function(index, elem) { /*el metodo each necesita los dos parametros para JQuery*/
        let li = `<li><p><span>${elem.fecha}</span>
				${elem.nombre}</p>
				<a href="#" class="borrar" data-id= ${index} >X</a></li>`;
        $('#cumples').append(li);

    });
}

function cumpleDelDia() {

	if (cumpl.length==0) {
		return alert("No hay cumpleaños cargados");
	}else{


	//escluye el limite superior
    let indice = Math.floor(Math.random() * (cumples.length));
    /*
    while (indice == cumples.length) {
        indice = Math.floor(Math.random() * (cumples.length));
    }
	*/
    let cumpleHoyImg = cumples[indice].avatarElegido;
    let cumpleHoyName = cumples[indice].nombre;

    let h1 = `<h1>${cumpleHoyName}</h1>`; //interpolacion del codigo, cadena de caracteres con identificacion de variables*/
    let img = `<img src="${ruta}${cumpleHoyImg}.png">`;

    $('#cumple-dia').append(h1);
    $('#cumple-dia').append(img);
    }
}

/** Borro de la lista de proximos cumples*/





/*

$('.borrar').on('click', e=> {

	e.preventDefault(); //evento fuction e para que no se refresque la pag
	let li =$(this); 
	li.parent().remove(); //borro del html
	let indice = li.data('id');
	cumples.splice(indice,1); //removi del array Cumples sin dejar hueco
	let jSon = JSON.parse(cumplesStorage);
	jSon.cumples = cumples;
	jSon.total = cumples.length;
	let datos = JSON.stringify(jSon);
    localStorage.setItem("cumples", datos);

}); // para que se escuchen por el Scope
cada vez que agrego un li, attachearle el evento.
el borrar adentro de la funcion cargar cumples. 
Es poco prolijo. se deshecha.
La segunda es/ escucho sobre el documento todos los elementos 
del documento, botones y lo pongo borrar.
La tercera es el Document Ready, para eso JavaScript tiene esta funcion
para cuando el documento esta correctamente cargado se ejecutan
los eventos, con JQuery lo utilizamos enla primera linea.

*/

$('.borrar').on('click', 'ul button', e=> {

	e.preventDefault(); //evento fuction e para que no se refresque la pag
	let li =$(this); 
	li.parent().remove(); //borro del html
	let indice = li.data('id');
	cumples.splice(indice,1); //removi del array Cumples sin dejar hueco
	let jSon = JSON.parse(cumplesStorage);
	jSon.cumples = cumples;
	jSon.total = cumples.length;
	//convierto en cadena de carecteres
	let datos = JSON.stringify(jSon);
    localStorage.setItem("cumples", datos);

});
/*


$(document).on('click', 'ul button', e=> { //escucho de todo el doc
//$(document).on('click', '.borrar', e=> { //escucho de todo el doc
	e.preventDefault(); //evento fuction e para que no se refresque la pag
	let li =$(this); 
	li.parent().remove(); //borro del html
	let indice = li.data('id');
	cumples.splice(indice,1); //removi del array Cumples sin dejar hueco
	let jSon = JSON.parse(cumplesStorage);
	jSon.cumples = cumples;
	jSon.total = cumples.length;
	//convierto en cadena de carecteres
	let datos = JSON.stringify(jSon);
    localStorage.setItem("cumples", datos);

});

(window.onload) en JavaScript
*/
$(document).ready(function(e){
	proximosCumples();
	cumpleDelDia();
});

cumpleDelDia();