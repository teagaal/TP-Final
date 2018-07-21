import React, { Component } from 'react';

//Hacer un useless constructor con para pasar props

class Breadcrumb extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(123);
    console.log(this.props.categories);
    const cats = this.props.categories;
    return (
      cats.map((categories, i) => {
        console.log(456);
        <div key={i}>
          <p className="cat">{categories}</p>
          <span>Yolo</span>
        </div>
      }))

  }
}

export default Breadcrumb;
