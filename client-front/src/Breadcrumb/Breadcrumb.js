import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    return (
      <section className="breadcrumb-container">
        {this.props.categories.map((category, i) => {
          return (
            <span className='breadcrumb-category' key={i}>{category} <span className='breadcrumb-symbol'>> </span></span>
          )
        })}
      </section>
    )
  }
}

export default Breadcrumb;
