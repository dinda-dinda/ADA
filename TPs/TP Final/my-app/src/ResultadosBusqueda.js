import React, { Component } from 'react';
import Categorias from './Categorias.js'; 
import Paginado from './Paginado.js'; 
import Loader from './components/Loader.js';
import './App.css';
import {
  Link
} from 'react-router-dom'
const queryString = require('query-string');


class ResultadosBusqueda extends Component {
    constructor(props){
        super(props);
        this.state={
          productos:null,
          categorias:null
        }
    }

    componentDidMount(){
      const busqueda = queryString.parse(this.props.location.search)
      fetch(`/api/items?search=${busqueda.cajaBusqueda}`)
          .then(res =>{ 
            console.log(res);
            return res.json()
          })
          .then(res => {
            console.log("res");console.log(res);
            this.setState({productos:res[0].items,
                            categorias:res[1]})
            console.log(res[1])
          })
          .catch(function(e){
            console.log('no puede responder')
          })
    }
    
    
 render() {
  if (this.state.productos==null){
    return (<Loader/>);
  }else{
    return (
      <div className="resultadosDeBusquedaMain">
        <Categorias categorias={this.state.categorias}/>
      <ul id="listaDeProductos">
      {this.state.productos.map(u => <Link style={{ color:'black', textDecoration:'none'}} key={u.id} to={`/api/items/${u.id}`}>
        <li className="productoEncontrado">
            <img src={u.picture} alt="producto" className="imgProductoEncontrado"/>
            <div className="infoProducto">
              <h1 className="precioProducto"> {u.price.currency==='ARS'?'$':(u.price.currency==='USD'?'u$s': u.price.currency)}{u.price.amount+","}{u.price.decimals}</h1>
              <p className="lugarProducto">Tigre</p>
              <h2 className="nombreProducto">{u.title}</h2>
              <h2 className="condicionProducto">{u.condition}</h2>
            </div>                     
      </li> </Link>
      )}
      </ul>
      <Paginado/>
    </div>
    )
  }
}
}
export default ResultadosBusqueda;
