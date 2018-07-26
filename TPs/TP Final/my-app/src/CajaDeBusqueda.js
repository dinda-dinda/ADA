import React, { Component } from 'react';
import logo from './PetithojaTransp.png';
import lupa from './search.svg';
import BusquedaErrorLabel from './BusquedaErrorLabel.js';
import './App.css';

class CajaDeBusqueda extends Component {
	constructor(props){
		super(props);
		this.state={
			cajaBusqueda:'',
			busquedaError:'',
			busquedaValida:false}
	}

	/**/
  handleBusquedaInput (e) {
      const buscar = e.target.name;
      const value = e.target.value;
      this.setState({[buscar]: value},() => { this.validateField(buscar, value) });
  }

	/*Valido la caja de busqueda
	* params fieldName, Value || Return setState = obj{busquedaValida:true, busquedaError:} 
	*/
  validateField (fieldName, value){
  	let busquedaError = this.state.busquedaError;
  	let busquedaValida = this.state.busquedaValida;
	var RegExpression = /^[a-zA-Z\s]*$/; 
   	
   	switch(fieldName){
   		case'cajaBusqueda':
   		busquedaValida=value.match(RegExpression);
		busquedaError = busquedaValida ? '' : ' Busqueda Erronea ';
		break;
	default:
		break;
	}
  	this.setState({busquedaError: busquedaError,
  					busquedaValida: busquedaValida
                  }, this.validarBusqueda)
  }
	render() {
		return (
	      <form action='/api/items' method='get' className="Nav">
			<img src={logo} alt="hoja"></img>

	      	<input className="cajaBusqueda" name="cajaBusqueda" value={this.state.cajaBusqueda} onChange={(event) => 
	      		this.handleBusquedaInput(event)} placeholder="Nunca dejes de buscar">
	      	</input>
	      	
	      	<BusquedaErrorLabel busquedaErrorLabel={this.state.busquedaError} /> 
	      	<button type="submit" id="btnBuscar" disabled={!this.state.busquedaValida}>
	      			<img src={lupa} alt="lupa"></img>
	      	</button>
	      </form>
	    );
	}
}

export default CajaDeBusqueda;

