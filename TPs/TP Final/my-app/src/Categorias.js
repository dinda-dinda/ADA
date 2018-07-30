import React, { Component } from 'react'; 
import Loader from './components/Loader.js';
import './App.css';

class Categorias extends Component {
    constructor(props){
        super(props);
        this.state={
          categorias:null
        }
    }

 render() {
  if (this.props.categorias==null){
    return (<Loader/>);
  }else{
    return (
      <div id="Categorias">
      {this.props.categorias.map((u, index) => console.log(index +" = " + u + " = " + u[index]))}
      {this.props.categorias.map((u, index) => <spam key= {index}>{u } > </spam>)}
      </div>
    );
  }
}
}
export default Categorias;
