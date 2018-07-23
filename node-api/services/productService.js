const rest = require('restler')
let self = {};

self.sendItem = function (id) {
  const itemData = new Promise(function (resolve, reject) {
    rest.get('https://api.mercadolibre.com/items/' + id).on('complete', function (result) {
      resolve(result)
    })
  })
  return itemData
}

self.sendDesc = function (id) {
  const itemDesc = new Promise(function (resolve, reject) {
    rest.get('https://api.mercadolibre.com/items/' + id + '/description').on('complete', function (result) {
      resolve(result)
    })
  })
  return itemDesc
}

self.getCategories = function (id) {
  const itemCat = new Promise(function (resolve, reject) {
    rest.get('https://api.mercadolibre.com/categories/' + id).on('complete', function (result) {
      resolve(result)
    })
  })
  return itemCat
}

module.exports = self;
