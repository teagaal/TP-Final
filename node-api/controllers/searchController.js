const searchService = require('../services/searchService')
const productModel = require('../models/product')

let self = {};

self.Search = function (req, res) {
  const query = req.query['q'];


  searchService.doSearch(query).then(function (data) {

    self.categories = [];

    const gotFilters = data.filters[0] ? data.filters[0] : [];

    if (gotFilters == data.filters[0]) {
      self.categories = gotFilters.values[0].path_from_root.map((category) => {
        return category.name
      })
    } else {
      let filterArray = [];
      data.available_filters[0].values.map((filterResults) => {
        filterArray.push(filterResults)
      })
      let bestResult = filterArray[0]

      for (var i = 0; i < filterArray.length; i++) {
        if (bestResult.results <= filterArray[i].results) {
          bestResult = filterArray[i]
        }
      }
      self.categories.push(bestResult.name);
      return self.categories
    }

    const items = searchService.getObject(data.results)

    return res.json({
      author: {
        name: 'Neko',
        lastname: 'Mandarina'
      },
      categories: self.categories,
      items: items
    })
  })
}

module.exports = self;
