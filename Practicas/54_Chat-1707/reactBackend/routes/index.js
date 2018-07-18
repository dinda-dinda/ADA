var express = require('express');
var router = express.Router();
var userController = require('/controllers/userController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Login User*/

router.post('/login', function(req, res, next) {
	let user = req.body.user;				//traigo el usuario del form
	let pass = req.body.pass;				//traigo el password del form
	userController.login(user,pass,res);	//resuelve el proceso de logeo del usuario.
});

router.post('/login', userController.login);
router.post('/registrar', userController.registrar);


/*Administrar Amigos*/

router.get('/agregarAmigo/:token/:name', userController.agregarAmigo); //mando el parametro del input metodo get para mandar un parametro y buscar informacion
router.put('/quitarAmigo/:token', userController.quitarAmigo); //para tarea quitar amigo metodo put para editar informacion

module.exports = router;
