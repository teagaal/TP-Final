import React, { Component } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Search from '../Search/Search'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await fetch('http://localhost:3001/api/items/' + id);
    const JSON = await response.json();
    this.setState({ data: JSON })
  }

  render() {
    console.log(this.state.data.categories);
    return (
      <section className="main">
        {this.state.data &&
          <React.Fragment>
            <Search />

            <Breadcrumb categories={this.state.data.categories} />

            <section className="product">
              <div className="product-container">
                <div className="product-main">
                  <img src={this.state.data.picture} />
                  <div className="product-data">
                    <span className="condition">{this.state.data.condition}</span>
                    <span className="sold">{this.state.data.sold_quantity} vendidos</span>
                    <p className="title">{this.state.data.title}</p>
                    <p className="price">${this.state.data.price.amount}</p>
                    <button type="button">Comprar</button>
                  </div>
                </div>
                <p className="desc-title">Descripción</p>
                <p className="desc">{this.state.data.description}</p>
              </div>
            </section>
          </React.Fragment>
        }
      </section>
    )
  }
}

export default Product;
