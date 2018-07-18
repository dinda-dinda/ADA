var express = require('express');
var router = express.Router();
var userController = require('/controllers/chatController.js');

/* GET home page. */
router.post('/enviarMensaje', chatController.enviarMensaje); 
router.get('/chequearMensajes/:token',chatController.chequearMensajes);

module.exports =router;
