import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import List from '../List/List'
import Search from '../Search/Search'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
const queryString = require('query-string');


class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  async componentDidMount() {
    const searchWord = queryString.parse(this.props.location.search)
    const query = searchWord.search;
    const response = await fetch('http://localhost:3001/api/items?q=' + query);
    const JSON = await response.json();
    this.setState({ data: JSON });
  }

  render() {
    return (
      <section className="main">
        <Search />

        {this.state.data &&
          <Breadcrumb categories={this.state.data.categories} />}

        <section className="product-results">
          {this.state.data &&
            this.state.data.items.map((product, i) => {
              const productUrl = '/items/' + product.id
              return (
                <Link to={productUrl} key={i}>
                  <List
                    picture={product.picture}
                    price={product.price.amount}
                    decimals={product.price.decimals}
                    title={product.title}
                  />
                </Link>
              )
            })
          }
        </section>
      </section>
    )
  }
}

export default Results;
