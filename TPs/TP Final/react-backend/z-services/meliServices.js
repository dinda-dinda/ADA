var express = require('express');
const axios = require('axios');
const self = {}

const MELI_API = 'https://api.mercadolibre.com/sites/MLA/search?offset=0&limit=4&q='
const MELI_PRODUCT = ''
const MELI_CATEGORIES ='https://api.mercadolibre.com/categories/'

self.buscarMeli = function(busqueda, res) {
    return axios
        .get(`${MELI_API}${busqueda}`)
        .then(function(data) {

            var nuevaBusqueda = {
                "name": "Dinda",
                "lastName": "Indaburo",
                "items": []
            };
            /*      data.categories=[];
                    data.items=[];*/
            var resultados = data.data.results;
            /**console.log("resultados");
                    console.log(resultados);*/
            let categoriesBusqueda = [];

            for (var i = 0; i < resultados.length; i++) {

                categoriesBusqueda.push(resultados[i].category_id);

                let prod = {
                    id: resultados[i].id,
                    title: resultados[i].title,
                    price: {
                        currency: resultados[i].currency_id,
                        amount: resultados[i].price,
                        decimals: 0
                    },
                    picture: resultados[i].thumbnail,
                    condition: resultados[i].attributes.value_name,
                    free_shipping: resultados[i].shipping.free_shipping
                }

                nuevaBusqueda.items.push(prod);
            }

            /** console.log("categoriesBusqueda: ");
             console.log(categoriesBusqueda);

             console.log("nuevaBusqueda :");
             console.log(nuevaBusqueda.items);*/
            return nuevaBusqueda = [nuevaBusqueda, categoriesBusqueda];
        })
}
/**
 *return array [objetoDetalle, categoria]
 */

self.buscarMeliDetalle = function(id, res) {
    console.log("---------entro en meliServices Detalle---------")
/**    console.log("id");
    console.log(id);*/

    return axios
        .get(`https://api.mercadolibre.com/items/${id}`)
        .then(function(respuestaGet) {
            console.log("-----get axios Buscar Detalle---------")
            //  console.log("respuestaGet : "+respuestaGet);
            var resultados = respuestaGet.data; //info producto

            /** console.log("resultados"+resultados);        
             console.log(resultados);     */

            var nuevoDetalle = {
                "name": "Dinda",
                "lastName": "Indaburo",
                "item": null

            };

            let detalle = {
                id: resultados.id,
                title: resultados.title,
                price: {
                    currency: resultados.currency_id,
                    amount: resultados.price,
                    decimals: 0
                },
                picture: resultados.thumbnail,
                condition: resultados.condition,
                free_shipping: resultados.shipping.free_shipping,
                description: ""
            };

            nuevoDetalle.item = detalle;
            let breadcrumb = resultados.category_id;

            return nuevoDetalle = [nuevoDetalle, breadcrumb];
        })
        .catch(e => (console.log("detalle axios pincho")))

}

self.buscarMeliDescripcion = function(id, res) {
    console.log("---------entro en meliServices a buscarDescripcion---------")
    /**  console.log("id");
      console.log(id);
    */
    return axios
        .get(`https://api.mercadolibre.com/items/${id}/description`)
        .then(function(respuestaGet) {
            console.log("-----get axios Descripcion---------")
            // console.log("respuestaGet : "+respuestaGet);
            var resultadoDescripcion = respuestaGet.data.plain_text; //descripcion producto

            //    console.log("resultadoDescripcion : "+resultadoDescripcion);        
            //    console.log(resultadoDescripcion);
            return resultadoDescripcion;
        })
        .catch(e => {
            console.log("rompio buscarDescripcion meliServices")
        })
}

self.buscarCategoriasDetalle = function(idDetalle, res) {
    console.log("---entro en meliServices buscarCategoriasDetalle---");
    /**console.log("idDetalle");console.log(idDetalle);*/

    return axios
        .get(`${MELI_CATEGORIES}${idDetalle}`)
        .then(function(respuestaCategorias) {
            let categorias = respuestaCategorias.data.path_from_root;
            /**console.log("categorias");console.log(categorias);*/
            return categorias;
        })
        .catch(e => (console.log("categoriasDetalle axios pincho")))
}

async function iterador(idCategoria){
          /**console.log("entro en la funcion de iterador");*/
        return axios
            .get(`${MELI_CATEGORIES}${idCategoria}`)
            .then(function(respuestaCategorias) {
                let totalItems = respuestaCategorias.data.total_items_in_this_category;
              /**  console.log("respuestaCategorias.data.total_items_in_this_category");
                console.log(respuestaCategorias.data.total_items_in_this_category);*/

                let categorias = respuestaCategorias.data.path_from_root;
              /**  console.log("respuestaCategorias.data.path_from_root");
                console.log(respuestaCategorias.data.path_from_root);
                console.log("categorias");
                console.log(categorias);*/
                let info = [totalItems,categorias];
              /**console.log("info");
                console.log(info);*/
                return info
            })
            .catch(e => (console.log("come on axios catch!")))
}


self.buscarCategoriasBusqueda  = async function(categorias, res) {
    console.log("---entro en meliServices buscarCategoriasDetalle---");
    let categoriasItems = [];
/**    console.log("categoriasItems ANTES");
        console.log(categoriasItems);*/

    for (var i = categorias.length - 1; i >= 0; i--) {
        let idCategoria = categorias[i];
/**        console.log("idCategoria");
        console.log(idCategoria);  */
        let cantidad = await iterador(idCategoria);
        categoriasItems.push(cantidad);
       
/**       console.log("cantidad de respuesta de iterador!");
       console.log(cantidad);*/
    }
/**        console.log("categoriasItems DESPUES");
        console.log(categoriasItems);
        console.log(JSON.stringify(categoriasItems));*/
        return categoriasItems;
                /*
                let cantidadItems = respuestaCategorias.data.total_items_in_this_category;
                let categorias = respuetaCategorias.data.path_from_root.name;
                console.log("cantidadItems + categorias " + cantidadItems + categorias);
                return (e => {
                    console.log("LOVEYOU")
            .catch(e => (console.log("categoriasDetalle axios pincho")))*/            
          
}
module.exports = self;