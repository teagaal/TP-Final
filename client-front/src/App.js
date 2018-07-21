import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './Search/Search';
import Results from './Results/Results';
import Product from './Product/Product';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/items" component={Results} />
          <Route path="/items/:id" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;
