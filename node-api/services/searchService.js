const rest = require('restler');
const productModel = require('../models/product');

let self = {};

self.doSearch = function (query) {

  const searchData = new Promise(function (resolve, reject) {
    rest.get('https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=4').on('complete', function (result) {

      resolve(result)
    })
  })

  return searchData
}

self.getObject = function (data) {
  let items = [];
  for (var i = 0; i < data.length; i++) {
    items.push(new productModel(data[i]).getProduct());

  }
  return items
}



module.exports = self;
