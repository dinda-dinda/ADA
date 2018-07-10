//ip y puerto al que se le realizaran los pedidos
var servidor = 'http://localhost:8080';
var express = require('express');
var router = express.Router();

var Hojas = [{
    id:"1",
    especie: "Malvon",
    limbo: "Peltada",
    peciolo: "Radial",
    src: "/images/hojas/hojaMalvon.jpg",
    favorito: "siFavorito"
}, {
    id:"2",
    especie: "Ginko",
    limbo: "Bilobulada",
    peciolo: "Paralelinervia",
    src: "images/hojas/hojaGinko.jpg",
    favorito: "noFavorito"
},{
    id:"3",
    especie: "Malvon1",
    limbo: "Peltada",
    peciolo: "Radial",
    src: "/images/hojas/hojaMalvon.jpg",
    favorito: "noFavorito"
}, {
    id:"4",
    especie: "Ginko1",
    limbo: "Bilobulada",
    peciolo: "Paralelinervia",
    src: "images/hojas/hojaGinko.jpg",
    favorito: "noFavorito"
},{
    id:"5",
    especie: "Malvon2",
    limbo: "Peltada",
    peciolo: "Radial",
    src: "/images/hojas/hojaMalvon.jpg",
    favorito: "noFavorito"
},{
    id:"6",
    especie: "Ginko2",
    limbo: "Bilobulada",
    peciolo: "Paralelinervia",
    src: "images/hojas/hojaGinko.jpg",
    favorito: "noFavorito"
},{
    id:"7",
    especie: "Malvon3",
    limbo: "Peltada",
    peciolo: "Radial",
    src: "/images/hojas/hojaMalvon.jpg",
    favorito: "noFavorito"
},{
    id:"8",
    especie: "Ginko3",
    limbo: "Bilobulada",
    peciolo: "Paralelinervia",
    src: "images/hojas/hojaGinko.jpg",
    favorito: "noFavorito"
},{
    id:"9",
    especie: "Malvon4",
    limbo: "Peltada",
    peciolo: "Radial",
    src: "/images/hojas/hojaMalvon.jpg",
    favorito: "noFavorito"
},{
    id:"10",
    especie: "Ginko4",
    limbo: "Bilobulada",
    peciolo: "Paralelinervia",
    src: "images/hojas/hojaGinko.jpg",
    favorito: "noFavorito"
},{
    id:"11",
    especie: "Begonia",
    limbo: "Acorazonada",
    peciolo: "Radial",
    src: "images/hojas/hojaBegonia.jpg",
    favorito: "noFavorito"
},{
    id:"12",
    especie: "Begonia2",
    limbo: "Acorazonada",
    peciolo: "Radial",
    src: "images/hojas/hojaBegonia.jpg",
    favorito: "noFavorito"
},{
    id:"13",
    especie: "Begonia3",
    limbo: "Acorazonada",
    peciolo: "Radial",
    src: "images/hojas/hojaBegonia.jpg",
    favorito: "noFavorito"
},{
    id:"14",
    especie: "Begonia4",
    limbo: "Acorazonada",
    peciolo: "Radial",
    src: "images/hojas/hojaBegonia.jpg",
    favorito: "noFavorito"
},{
    id:"15",
    especie: "Begonia5",
    limbo: "Acorazonada",
    peciolo: "Radial",
    src: "images/hojas/hojaBegonia.jpg",
    favorito: "noFavorito"
}];


router.get('/', function(req, res, next) {
    res.render('home', { title: 'Home', Hojas: Hojas, url: "Home" });
});
module.exports = router;