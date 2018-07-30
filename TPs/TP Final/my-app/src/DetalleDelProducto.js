import React, { Component } from 'react'; 
import Categorias from './Categorias.js'; 
import Loader from './components/Loader.js';
import './App.css';


class DetalleDelProducto extends Component {
  constructor(props){
    super(props);
    this.state={
      detalleDelProducto:null,
      categorias:null
      }
    }
  

    componentDidMount(){
      let paramId = this.props.match.params.id;

      fetch(`/api/items/${paramId}`)
            .then(res =>{
              console.log("res")
              console.log(res) 
              return res.json()})
          
          .then(res => {
            this.setState({detalleDelProducto:res[0],
                          categorias:res[1]})
console.log("this.state.detalleDelProducto")
            console.log(this.state.detalleDelProducto)
console.log("this.state.categorias")
            console.log(this.state.categorias)
            return res
            })

          .catch(function(e){
              console.log('no puede responder')
            })
  
    }


 render() {
  if (this.state.detalleDelProducto==null){
     return (<Loader/>);
  }else{
    return (
      <div id="producto">
        <Categorias categorias={this.state.categorias}/>
      {console.log(this.state.categorias)}
      {console.log(this.state.detalleDelProducto.item)}
   
        <section id="resumenProducto">
	      	<img name="imgDetalle" id="imgDetalle" alt="detalle" src={this.state.detalleDelProducto.item.picture}></img>
	      	<div id="infoPrincipal">
	      		<p id="soldQuantityCondition">{this.state.detalleDelProducto.item.condition}</p>
	      		<h1 id="title">{this.state.detalleDelProducto.item.title}</h1>
	      		<h2 id="precio">{this.state.detalleDelProducto.item.price.currency==='ARS'?'$':this.state.detalleDelProducto.item.price.currency} {this.state.detalleDelProducto.item.price.amount},{this.state.detalleDelProducto.item.price.decimals}</h2>
	      		<button id="btnComprar">Comprar</button>
	      	</div>
      	</section>
      	
      	<div id="moreInformation">
      		<h1 id="titleDescription">{this.state.detalleDelProducto.item.title}</h1>
      		<p id="productDescription">{this.state.detalleDelProducto.item.description}</p>
      	</div>
      </div>
    )
    }
  }
}

export default DetalleDelProducto;
