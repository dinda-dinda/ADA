var express = require('express');
var router = express.Router();
var apiController = require('./../z-controllers/apiController.js');

/*Administrar Busquedas*/

router.get('/items', apiController.busqueda); 
	
router.get('/items/:id', apiController.detalle); 

module.exports = router;
