import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="item">
        <div className="item-image">
          <img src={this.props.picture} />
        </div>
        <div className="item-price">
          <span className="price">{this.props.price}</span>
        </div>
        <div className="item-title">
          <p className="title">{this.props.title}</p>
        </div>
      </div>
    )
  }
}

export default List;