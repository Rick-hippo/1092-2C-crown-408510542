var express = require('express');
var router = express.Router();

const categories = require('../data/categories');

const categoryController_42 = require('../controllers/crown2Controller_42')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_42', { 
    title: 'BoCheng Zhan 408510542 (static)',
    data: categories
  });
});

router.get('/homepage', categoryController_42.getHomepage);

router.get('/shop_42/:product', categoryController_42.getProductsByCategory);

module.exports = router;