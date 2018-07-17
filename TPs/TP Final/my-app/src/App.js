import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import Resultados from './Resultados.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <Search/>
      <Resultados/>
      </div>
    );
  }
}

export default App;
