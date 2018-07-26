import React, { Component } from 'react';
import loader from './../loader.gif';
import './../App.css';

class Loader extends Component {

  render() {
    return (
      <div id="Loader">
      <img id="arboles" alt="arboles" src={loader}></img>
      </div>
    );
  }
}

export default Loader;

