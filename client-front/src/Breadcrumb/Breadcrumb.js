import React, { Component } from 'react';

//Si las categorías vuelven en Arrays, el Breadcrumb puede acceder directamente a las props del contenedor padre. Solo hay que hacer un map.

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
