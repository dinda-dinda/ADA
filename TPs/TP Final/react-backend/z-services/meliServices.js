var express = require('express');
const axios = require('axios');
const self = {}

const MELI_API = 'https://api.mercadolibre.com/sites/MLA/search?offset=0&limit=4&q='
const MELI_PRODUCT = ''

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
    console.log("id");
    console.log(id);

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
    console.log("idDetalle");
    console.log(idDetalle);

    return axios
        .get(`https://api.mercadolibre.com/categories/${idDetalle}`)
        .then(function(respuestaCategorias) {
            let categorias = respuestaCategorias.data.path_from_root;
            console.log("categorias");
            console.log(categorias);
            return categorias;
        })
        .catch(e => (console.log("categoriasDetalle axios pincho")))
}

self.buscarCategoriasBusqueda = function(categorias, res) {
    console.log("---entro en meliServices buscarCategoriasDetalle---");
    console.log("categorias");
    console.log(categorias);
    let categoriasItems = {};
    for (var i = categorias.length - 1; i >= 0; i--) {
        let idCategoria = categorias[i];
        console.log("idCategoria");
        console.log(idCategoria);  

        ////////////crear nueva funcion async para incluir la llamada en cada iteracion~
        return axios
            .get(`https://api.mercadolibre.com/categories/${idCategoria}`)
            .then(function(respuestaCategorias) {
                console.log("respuestaCategorias.data");
                console.log(respuestaCategorias.data);
              /*
                let cantidadItems = respuestaCategorias.data.total_items_in_this_category;
                let categorias = respuetaCategorias.data.path_from_root.name;
                console.log("cantidadItems + categorias " + cantidadItems + categorias);
                return (e => {
                    console.log("LOVEYOU")
                })
            .catch(e => (console.log("categoriasDetalle axios pincho")))*/
            })
    }
}


module.exports = self;