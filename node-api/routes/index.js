var express = require('express');
var router = express.Router();
const searchController = require('../controllers/searchController');
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/items', searchController.Search)

router.get('/api/items/:id', productController.getItem)

module.exports = router;
