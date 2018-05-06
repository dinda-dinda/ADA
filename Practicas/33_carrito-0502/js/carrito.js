var producto = [{
    cod: 001,
    descripcion: "Pulsera",
    precio: 1500,
    stock: 100,
    img: "b.jpg"
}, {
    cod: 002,
    descripcion: "Anillo de Diamantes",
    precio: 8500,
    stock: 200,
    img: "e.jpg"
}, {
    cod: 003,
    descripcion: "Collar colores",
    precio: 4500,
    stock: 70,
    img: "f.jpg"
}, {
    cod: 004,
    descripcion: "Anillo de Diamantes colores",
    precio: 9500,
    stock: 50,
    img: "g.jpg"
}];
var ruta = "products/";

var carritoGuardado = localStorage.getItem("carritoGuardado"); //traigo del LS
var jsonCarrito = JSON.parse(carritoGuardado); /*.cumples;*/
var carrito = jsonCarrito.carrito;

console.log("jsonCarrito =" + JSON.stringify(jsonCarrito));
console.log("carrito =" + JSON.stringify(carrito));


for (var i = carrito.length - 1; i >= 0; i--) {
    var item = carrito[i].item;

    var cod = carrito[i].codProducto;

    var descripcion;
    var precio;
    var img;
    var cant = carrito[i].cantProducto;

    for (var j = producto.length - 1; j >= 0; j--) {
        if (cod == producto[j].cod) {
            descripcion = producto[j].descripcion;
            precio = producto[j].precio;
            img = producto[j].img;
            total= producto[j].precio*cant;
        }
    }
    creoLi(cod, cant, descripcion, precio, img);
}


function creoLi(cod, cant, descripcion, precio, img) {

    $('#listaCompra').append(
	$('<li class="liCarrito">').append(
		$(`<img class="imgCarrito" src=${ruta}${img}></img>
    	<p class="precio">${cod}</p>
    	<p class="descripcion">${descripcion}</p>
    	<span class="precio">${cant}</span>
    	<p class="precio"> $ ${precio}</p>
    	<p class="precio">Total = $ ${total}</p>`).append()
        ));

}

function mostrarCarrito() {

}


$('#comprar').on('click', function(e) {
    console.log("click boton comprar");
});