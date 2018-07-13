var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/skills', function(req, res, next) {
  res.json(['HTML', 'CSS', 'JS', 'p5', 'Arduino'])
});

module.exports = router;
