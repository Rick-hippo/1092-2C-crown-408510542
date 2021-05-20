var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_42', { title: 'BoCheng Zhan 408510542' });
});

module.exports = router;
