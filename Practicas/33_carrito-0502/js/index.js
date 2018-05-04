var carrito = [];

var carritoGuardado = localStorage.getItem("carritoGuardado");

var ruta = "products/";

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


function crearCarrito() {

    carrito = [];
}

function existeCarrito(e) {
    if (carritoGuardado == null) {
        crearCarrito();
    } else {
    	localStorage.getItem("carritoGuardado");
        carrito = JSON.parse(carritoGuardado).carrito;
    }
}


function agregarProducto(item) {
    carrito.push(item);

}
function limpiarLS(){
	localStorage.clear();
}



function crearCuenta(){

    	localStorage.getItem("carritoGuardado");
		let carritoGuardado = JSON.parse(jsonCarrito).carrito;


}
/*
function guardar
        jsonCarrito = {
            "carrito": carrito,
            "total": carrito.length //los totales se muestran para generar los paginados
        }
        var carritoGuardado = JSON.stringify(jsonCarrito);
        localStorage.setItem("carritoGuardado", carritoGuardado);

        console.log("QUE HAY EN LA VARIABLE LOCAL " + localStorage.getItem("carrito"));
*/

$('.add').on('click', function(e) {
    var padre = $(this).parent();
    //recupero la info del HTML
    var item = {
        codProducto: "",
        cantProducto: ""
    }
    item.codProducto = padre.attr('data-cod');
    item.cantProducto = padre.find(':nth-child(4)').val();
    console.log("codProducto = " + item.codProducto);
    console.log("cantProducto = " + item.cantProducto);

    agregarProducto(item);
    console.log("carrito =" + JSON.stringify(carrito));

    var jsonCarrito = {
        "carrito": carrito,
        "total": carrito.length //los totales se muestran para generar los paginados
    }
    console.log("jsonCarrito ="+JSON.stringify(jsonCarrito));
    
    carritoGuardado = JSON.stringify(jsonCarrito);
    localStorage.setItem("carritoGuardado", carritoGuardado);

    console.log("localStorage = "+JSON.stringify(localStorage));
    
});

existeCarrito();