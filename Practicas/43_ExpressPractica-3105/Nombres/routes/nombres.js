var express = require('express');
var router = express.Router();

  var nenas = ['Isabel','Eduviges','Solange','Fernanda']
  var nenes = ['Bartolomeo','Segismundo','Oliverio','Aurelio']
  var nombres = nenas.concat(nenes);

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

/* GET nombres. */
router.get('/', function(req, res, next) {
 
 var nombresAleatorio = shuffle(nombres);
  res.render('nombres', { title:'nombres mixtos',nombres: nombresAleatorio});

});


router.get('/nenas', function(req, res, next) {
 
 var nenaArray = shuffle(nenas); 
  res.render('nenas', { title: 'nombres de nenas', nena: nenaArray});

});

router.get('/nenes', function(req, res, next) {
 
 var neneArray = shuffle(nenes); 
  res.render('nenes', { title: 'nombres de nenes', nene: neneArray});

});


/*  var nombre = nombres[Math.floor(Math.random()*nombres.length)]; //random nombre*/
module.exports = router;	

