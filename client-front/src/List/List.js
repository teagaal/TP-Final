import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <article className="item">
        <div className="item-image">
          <img src={this.props.picture} />
        </div>
        <div className="item-desc">
          <p className="price">${this.props.price}</p>
          <p className="title">{this.props.title}</p>
        </div>
      </article>
    )
  }
}

export default List;
