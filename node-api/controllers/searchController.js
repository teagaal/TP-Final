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
        console.log(1);
      })
      let bestResult = filterArray[0]
      console.log(2);

      for (var i = 0; i < filterArray.length; i++) {
        if (bestResult.results <= filterArray[i].results) {
          console.log(3);
          bestResult = filterArray[i]
          console.log(bestResult);
        }
      }
      console.log(4);
      self.categories.push(bestResult.name);
      return self.categories
    }
    console.log(5);



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
