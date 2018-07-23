import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({
      inputValue: value
    })
  }

  render() {
    const searchUrl = '/items?search=' + this.state.inputValue;
    return (
      <nav className='navbar'>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange.bind(this)} className="search" />
        <Link to={searchUrl}><button className="search-button">Buscar</button></Link>
      </nav>
    )
  }
}

export default Search;
