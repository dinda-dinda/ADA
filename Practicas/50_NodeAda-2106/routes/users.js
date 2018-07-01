var express = require('express');
var router = express.Router();

var baseUsers = [];

/* POST users listing. */
router.post('/', function(req, res, next) {

    var user = {};
    user.nombre = req.body.nombre;
    user.apellido = req.body.apellido;
    user.telefono = req.body.telefono;
    user.email = req.body.email;


    user.push(baseUsers);

    return res.send(user);
});


/* GETForm */
router.get('/form', function(req, res, next) {

    res.render('form', { title: 'Formulario' });
});



module.exports = router;
