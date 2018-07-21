const productService = require('../services/productService');
const productModel = require('../models/product');

let self = {};

self.getItem = function (req, res) {
  const id = req.params.id;

  productService.sendItem(id).then(function (data) {
    category_id = data.category_id
    productService.getCategories(category_id).then(function (category_id) {

      self.categories = [];
      const cats = category_id.path_from_root;
      for (var i = 0; i < cats.length; i++) {
        self.categories.push(cats[i].name)
      }

      productService.sendDesc(id).then(function (result) {
        data.description = result.plain_text
        data.categories = self.categories

        const a = new productModel(data).passItem()
          res.json(a)

      })
    })
  })
}

module.exports = self;
