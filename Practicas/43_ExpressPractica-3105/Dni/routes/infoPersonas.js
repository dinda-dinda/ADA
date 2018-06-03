var express = require('express');
var router = express.Router();

var personas = [{ 
	dni: "3048796",
	nombre:"Fulano",
	gs: "0+",
	alergias: "No posee"
},{
	dni:"34648933",
	nombre:"Dinda",
	gs: "0+",
	alergias: "No posee"
},{
	dni:"32945799",
	nombre:"Apyx",
	gs: "A+",
	alergias: "No posee"
}];
/*
recorrerArray function(personas){
	for (var i = personas.length - 1; i >= 0; i--) {

		for (var j = i.length - 1; j >= 0; j--) {
		var dni  	= i[j].dni;
		var nombre 	= i[j].nombre;
		var gs 		= i[j].gs;
		var alergia = i[j].alergia;
		console.log("dni :"+dni+", nombre: "+nombre+", gs: "+gs+", alergia: "+alergia);

		}
	
	var usuario[i] = nombre + dni + gs + alergia;  ===>??? esto sirve para algo?

}
*/

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('infoPersonas', { title: 'Informacion byh', infoPersonas:personas});
});

module.exports = router;
