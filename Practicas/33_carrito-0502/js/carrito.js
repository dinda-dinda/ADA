var carritoGuardado = localStorage.getItem("carrito");
var jsonCarrito = JSON.parse(carritoGuardado);/*.cumples;*/
var carrito = jsonCarrito.carrito;
	/*
	var cumplesStorage = localStorage.getItem("cumples");
	var jSon = JSON.parse(cumplesStorage);/*.cumples;
	var cumples = jSon.cumples;
	*/

if (carrito.length==0) {
	 alert ("No se encontraron productos en su carrito.");
return 	window.location.replace(index.html);		 

}else{

$("#listaCompra").append('<li>');

let cumpleHoyImg = cumples[indice].avatarElegido;
    let cumpleHoyName = cumples[indice].nombre;


}

