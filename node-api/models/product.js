class Product {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.currency_id = data.currency_id;
    this.thumbnail = data.thumbnail;
    this.condition = data.condition;
    this.shipping = data.shipping.free_shipping;
    this.sold_quantity = data.sold_quantity;
    this.description = data.description;
    this.categories = data.categories
  }

  getProduct() {
    return {
      id: this.id,
      title: this.title,
      price: this.formatPrice(this.price),
      picture: this.thumbnail,
      condition: this.formatCondition(this.condition),
      free_shipping: this.shipping
    }
  }

  passItem() {

    return {
      id: this.id,
      title: this.title,
      price: this.formatPrice(this.price),
      picture: this.thumbnail,
      condition: this.formatCondition(this.condition),
      free_shipping: this.shipping,
      sold_quantity: this.sold_quantity,
      description: this.description,
      categories: this.categories
    }
  }

  formatPrice(price) {
    const toString = price.toString();
    const splitPrice = toString.split(',');
    return {
      currency: this.currency_id,
      amount: parseInt(splitPrice[0]),
      decimals: parseInt(splitPrice[1])
    }
  }

  formatCondition(condition) {
    if (condition === "new") {
      return this.condition = "Nuevo"
    } else {
      return this.condition = "Usado"
    }
  }
}

module.exports = Product;
