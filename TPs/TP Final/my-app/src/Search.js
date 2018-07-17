import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Search extends Component {

  render() {
    return (
      <nav className="Nav">
      	<img src={logo}></img>
      	<input id="buscador" alt="icono"></input>
      	<button>buscar</button>
      </nav>
    );
  }
}

export default Search;
