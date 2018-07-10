//ip y puerto al que se le realizaran los pedidos
var servidor = 'http://localhost:8080';


var HojasFiltro = [];
var DATA = [];

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
        src: "images/hojas/hojaGinko.jpg",
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
        src: "images/hojas/hojaGinko.jpg",
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
        src: "images/hojas/hojaGinko.jpg",
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
        src: "images/hojas/hojaGinko.jpg",
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
        src: "images/hojas/hojaGinko.jpg",
        favorito: "noFavorito"
    }, {
        id: "11",
        especie: "Begonia",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "images/hojas/hojaBegonia.jpg",
        favorito: "noFavorito"
    }, {
        id: "12",
        especie: "Begonia2",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "images/hojas/hojaBegonia.jpg",
        favorito: "noFavorito"
    }, {
        id: "13",
        especie: "Begonia3",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "images/hojas/hojaBegonia.jpg",
        favorito: "noFavorito"
    }, {
        id: "14",
        especie: "Begonia4",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "images/hojas/hojaBegonia.jpg",
        favorito: "noFavorito"
    }, {
        id: "15",
        especie: "Begonia5",
        limbo: "Acorazonada",
        peciolo: "Radial",
        src: "images/hojas/hojaBegonia.jpg",
        favorito: "noFavorito"
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

controlador.buscarPeciolo = function(req, res) {

    resultado = ['Radial', "Paralelinervia"];

    var respuesta = {
        'peciolo': resultado //DATA
    };

    res.send(JSON.stringify(respuesta)); //envia JSOn

}

controlador.buscarHojas = function(req, res) {
    DATA = [];
    HojasFiltro = [];
    let favorito = req.body.favorito;
    let limbo = req.body.limbo;
    let peciolo = req.body.peciolo;


    /*rutas del nav*/
    let rutaFavorito = "";
    let rutaLimbo = "";
    let rutaPeciolo = "";

    if (favorito != "Todas") {
        rutaFavorito = " /" + favorito;
    } else if (limbo != "Todas") {
        rutaLimbo = " /" + limbo;
    } else if (peciolo != "Todas") {
        rutaPeciolo = " /" + peciolo;
    }

    let ruta = "Home" + rutaFavorito + rutaLimbo + rutaPeciolo;
    console.log("ruta : " + ruta);
    /*termina rutas nav*/
    /*filtros*/

    for (var i = controlador.Hojas.length - 1; i >= 0; i--) {

        if (peciolo == controlador.Hojas[i].peciolo) {
            HojasFiltro.push(controlador.Hojas[i]);
        } else if (limbo == controlador.Hojas[i].limbo) {
            HojasFiltro.push(controlador.Hojas[i]);
        } else if (favorito == controlador.Hojas[i].favorito) {
            HojasFiltro.push(controlador.Hojas[i]);
        }
    }

    /*paginado*/
    let cantPaginas = 0;
    if (HojasFiltro.length <= 6) {
        HojasFiltro = HojasFiltro;
        cantPaginas = 1;
    } else if (HojasFiltro.length > 6) {

        cantPaginas = (HojasFiltro.length / 3) * 2;


    }

    DATA = {
        ruta: ruta,
        HojasFiltro: HojasFiltro,
        cantPaginas: cantPaginas
    };
    res.send(JSON.stringify(DATA)); //envia JSOn


}

module.exports = controlador