//ip y puerto al que se le realizaran los pedidos
var servidor = 'http://localhost:8080';


var HojasFiltro = [];

var controlador = {

    Hojas: [{
        id: "1",
        especie: "Malvon",
        limbo: "Peltada",
        peciolo: "Radial",
        src: "/images/hojas/hojaMalvon.jpg",
        favorito: "siFavorito"
    }, {
        id: "2",
        especie: "Ginko",
        limbo: "Bilobulada",
        peciolo: "Paralelinervia",
        src: "/images/hojas/hojaGinko.jpg",
        favorito: "noFavorito"
    }, {
        id: "3",
        especie: "Malvon1",
        limbo: "Peltada",
        peciolo: "Radial",
        src: "/images/hojas/hojaMalvon.jpg",
        favorito: "noFavorito"
    }, {
        id: "4",
        especie: "Ginko1",
        limbo: "Bilobulada",
        peciolo: "Paralelinervia",
        src: "/images/hojas/hojaGinko.jpg",
        favorito: "noFavorito"
    }, {
        id: "5",
        especie: "Malvon2",
        limbo: "Peltada",
        peciolo: "Radial",
        src: "/images/hojas/hojaMalvon.jpg",
        favorito: "noFavorito"
    }, {
        id: "6",
        especie: "Ginko2",
        limbo: "Bilobulada",
        peciolo: "Paralelinervia",
        src: "/images/hojas/hojaGinko.jpg",
        favorito: "noFavorito"
    }, {
        id: "7",
        especie: "Malvon3",
        limbo: "Peltada",
        peciolo: "Radial",
        src: "/images/hojas/hojaMalvon.jpg",
        favorito: "noFavorito"
    }, {
        id: "8",
        especie: "Ginko3",
        limbo: "Bilobulada",
        peciolo: "Paralelinervia",
        src: "/images/hojas/hojaGinko.jpg",
        favorito: "noFavorito"
    }, {
        id: "9",
        especie: "Malvon4",
        limbo: "Peltada",
        peciolo: "Radial",
        src: "/images/hojas/hojaMalvon.jpg",
        favorito: "noFavorito"
    }, {
        id: "10",
        especie: "Ginko4",
        limbo: "Bilobulada",
        peciolo: "Paralelinervia",
        src: "/images/hojas/hojaGinko.jpg",
        favorito: "noFavorito"
    }, {
        id: "11",
        especie: "Begonia",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "/images/hojas/hojaBegonia.jpg",
        favorito: "noFavorito"
    }, {
        id: "12",
        especie: "Begonia2",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "/images/hojas/hojaBegonia.jpg",
        favorito: "noFavorito"
    }, {
        id: "13",
        especie: "Begonia3",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "/images/hojas/hojaBegonia.jpg",
        favorito: "noFavorito"
    }, {
        id: "14",
        especie: "Begonia4",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "/images/hojas/hojaBegonia.jpg",
        favorito: "noFavorito"
    }, {
        id: "15",
        especie: "Begonia5",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "/images/hojas/hojaBegonia.jpg",
        favorito: "siFavorito"
    }]


}
controlador.agregarFavorito = function(req, res) {
    let idFavorito = req.body.id;
    for (var i = controlador.Hojas.length - 1; i >= 0; i--) {
        if (controlador.Hojas[i].id == idFavorito) {
            controlador.Hojas[i].favorito = "siFavorito";
            console.log("entro a Favorito");
            res.send("exito"); //
        }
    }
}

controlador.sacarFavorito = function(req, res) {
    let idFavorito = req.body.id;
    
    for (var i = controlador.Hojas.length - 1; i >= 0; i--) {
        if (controlador.Hojas[i].id == idFavorito) {
            controlador.Hojas[i].favorito = "noFavorito";
            res.send("exito"); //
        }
    }

}


controlador.buscarHojas = function(req, res) {
    HojasFiltro = [];
    let paginaSolicitada = req.body.pagina;
    let favorito = req.body.favorito;
    let limbo = req.body.limbo;
    let peciolo = req.body.peciolo;

    /*---------rutas del nav----------- Info
    */
    let rutaFavorito = "";
    let rutaLimbo = "";
    let rutaPeciolo = "";

    /*filtros con banderas---------------------------------*/
    for (var i = controlador.Hojas.length - 1; i >= 0; i--) {

        let filtroLimbo = true;
        let filtroPeciolo = true;
        let filtroFavorito = true; 

        if (peciolo != "Todas"){ 
            if( controlador.Hojas[i].peciolo!= peciolo){
                filtroPeciolo = false;
                rutaPeciolo = " > " + peciolo;
            }
        }
        if (favorito != "Todas"){ 
            if( controlador.Hojas[i].favorito!= favorito){
                filtroFavorito = false;
                rutaFavorito = " > " + favorito;
            }
        }
        if (limbo != "Todas"){ 
            if( controlador.Hojas[i].limbo!= limbo){
                filtroLimbo = false;
                rutaLimbo = " > " + limbo;
            }
        }
        if(filtroPeciolo && filtroLimbo && filtroFavorito){
                HojasFiltro.push(controlador.Hojas[i]);
        }
    } 

     let ruta = "Home" + rutaFavorito + rutaLimbo + rutaPeciolo;
     /*termina rutas nav*/
    
    /*paginado DESARROLLAR*/
    let itemsXPagina = 6;    
    let cantPaginas = Math.ceil(HojasFiltro.length/itemsXPagina);

    /*obj respuesta*/
        let dataEnviar = {
            nroPagina: "",
            cantPaginas: "",
            itemsXPagina : "",
            items:[],
            rutasNav:""
        };

    /*REspuesta*/
        dataEnviar.nroPagina=paginaSolicitada;
        dataEnviar.cantPaginas=cantPaginas;
        dataEnviar.itemsXPagina=itemsXPagina;
        dataEnviar.rutasNav=ruta;

        let posicion = 0;
        for (var i = (dataEnviar.nroPagina-1)*itemsXPagina; i < HojasFiltro.length; i++) {
            if(posicion<itemsXPagina){
                dataEnviar.items.push(HojasFiltro[i]);
            }
            posicion++;
        }

    res.send(JSON.stringify(dataEnviar)); //envia JSOn


}

controlador.home = function(req, res) {

    //console.log(controlador.Hojas);    
    res.render('home', { title: 'Home', Hojas: controlador.Hojas, url: "Home" });
}

controlador.detalle = function(req, res) {
    let idElegido = req.params.id;
    console.log("idElegido"+idElegido);
    let hojaDetalle = "not found";

    for (var i = controlador.Hojas.length - 1; i >= 0; i--) {
        if (controlador.Hojas[i].id == idElegido) {
            hojaDetalle = controlador.Hojas[i];
      
        }
    }
    
    console.log("hojaDetalle : "); console.log(JSON.stringify(hojaDetalle));    
    res.render('detalle', { title: 'Detalle', item: hojaDetalle});
}



module.exports = controlador