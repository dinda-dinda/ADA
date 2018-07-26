var express = require('express');
var services = require('./../z-services/meliServices.js');
const axios = require('axios');
const queryString = require('query-string');

const self = {}

/*Agrega un atributo "descripcion" al objeto con el detalle del Item
 * @params objeto y descripcion || return objetoConDescripcion
 */
function armarObjetoDescripcion(objeto, descripcion) {
    //console.log("-----------armar objeto Descripcion--------");
    // console.log("descripcion :");
    // console.log(descripcion);
    // console.log("objeto :");
    // console.log(objeto);
     objeto.item.description = descripcion;
    return objeto;
}

/*En un objeto toma un atributo numerico con decimal y separa enteros de decimales 
*   params precioASeparar  |   Return      obj precio.entero  (sin Decimales)
*          decimales       |                   precio.decimal (correctos o doble 0)
*/
function separarPrecio(precioASeparar, decimales) {
        /**  console.log("Entro en separarPrecio")*/
            if (Number.isInteger(precioASeparar) == true) {
         /**     console.log("es entero");*/
                decimales = "00";

            } else {
           /**   console.log("tiene decimales")*/
                arr = JSON.stringify(precioASeparar).split(".")
                //  console.log("Precio a separar arr : "+ arr);
                precioASeparar = arr[0]; //entero
                decimales = parseFloat(arr[10]); //decimal
            }

            //console.log("entero : "+precioASeparar +" / decimales : "+ decimales)
            let precio = {entero:precioASeparar, decimal: decimales}
            //console.log(precio);
            return precio;
        }

/*En un Array de objetos, busca cada atributo "precio" y lo separa en dos variables = "enteros" y "decimales"
 *  [{obj.precio}] || Return: [{obj.precio.enteros, obj.precio.decimales}]
 */
function separarPrecioDecimales(e) {
   // console.log("------entro en la funcion de separar Precio-------");
    if (e.items == undefined) {
        let precioASeparar = e.item.price.amount; // tiene que tener enteros
        let decimales = e.item.price.decimals;

        let precio = separarPrecio(precioASeparar, decimales);

        e.item.price.amount = precio.entero;
        e.item.price.decimals = precio.decimal;
    } else {
        var arr = 0;
        let isInteger = 0;
        for (var z = 0; z < e.items.length; z++) {

            let precioConDecimal = e.items[z].price.amount;

            let isInteger = Number.isInteger(precioConDecimal);

            if (Number.isInteger(precioConDecimal) == true) {

                e.items[z].price.decimals = "00";
            } else {

                arr = JSON.stringify(precioConDecimal).split(".")
                entero = arr[0];
                decimal = arr[1];

                e.items[z].price.amount = arr[0];
                e.items[z].price.decimals = parseFloat(arr[1]);
            }
        }
    }
        return e;
}

/** Armo el Breadcrumb
*   params idCategoria, bandera(detalle o busqueda), respuesta. 
*    Return object
*/
 async function armarBreadcrumb (idCategoria,bandera,res){
    let breadcrumb={};
/**    console.log("idCategoria");
    console.log(idCategoria);
    console.log("bandera");
    console.log(bandera);*/
        
    if(bandera=="detalle"){
        console.log("---armarBreadCrumb detalle----");
        let idDetalle = idCategoria;
/**        console.log("idDetalle");
        console.log(idDetalle);*/
        let resBreadcrumbServices = await services.buscarCategoriasDetalle(idDetalle,res);
/**        console.log("resBreadcrumbServices");
        console.log(resBreadcrumbServices);*/
        let categorias= resBreadcrumbServices.map(e => e.name);
/**        console.log("categorias");
        console.log(categorias); */
        breadcrumb = categorias;
    }else{
        console.log("---armarBreadCrumb busqueda----");
        let categorias = idCategoria;
        console.log("ID categorias Busqueda");
        console.log(categorias);
        let resBreadcrumbServices = await services.buscarCategoriasBusqueda(categorias,res);
        console.log("resBreadcrumbServices");
        console.log(resBreadcrumbServices);
        

    }
    return breadcrumb;
}

self.busqueda = async function(req, res, next) { /*'/api/items?q=:query'*/
    console.log("busqueda Controller");

    var busqueda = req.query.search;
    //   console.log("busqueda : " + busqueda);

    let resultado = await services.buscarMeli(busqueda, res);
    //  console.log("buscarMeli return busqueda: " + JSON.stringify(resultado));
    //console.log("resulto Controller")

    let categorias = armarBreadcrumb(resultado[1],"busqueda"); //con la info del detalle preparo Breadcrumb

    let preciosActualizados = await separarPrecioDecimales(resultado[0]); /*Separo el precio en Enteros y Decimales*/
    //console.log("buscarMeli resultado precio separado: " + JSON.stringify(preciosActualizados));

    return res.json(preciosActualizados);
}

self.detalle = async function(req, res, next) { /*busco el detalle a partir del id*/
    console.log("----busqueda Detalle controller ----");

    let id = req.params.id;
    // console.log("router.get params.id : " + id);

    let meliDetalle = await services.buscarMeliDetalle(id, res);  

    let categoriasDetalle = await armarBreadcrumb(meliDetalle[1],"detalle"); /**Busco las categorias correspondientes*/
    console.log("categoriasDetalle Controller");
    console.log(categoriasDetalle);

    let precioActualizado = await separarPrecioDecimales(meliDetalle[0]);
    //console.log("precioActualizado");
    //console.log(precioActualizado);

    var meliDescripcion = await services.buscarMeliDescripcion(id, res);
    //console.log("respuesta del get Descripcion :" + meliDescripcion);

    var detalleParaEnviar = armarObjetoDescripcion(precioActualizado, meliDescripcion);

    //console.log(detalleParaEnviar); //objeto Detalle de la api de Meli
    return res.json(detalleParaEnviar);
}

module.exports = self;