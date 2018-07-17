//ip y puerto al que se le realizaran los pedidos
var servidor = 'http://localhost:8080';
var express = require('express');
var router = express.Router();
var controlador = require('./../controller.js');

router.get('/:id', function(req, res, next) {

    controlador.Detalle;

});
module.exports = router;