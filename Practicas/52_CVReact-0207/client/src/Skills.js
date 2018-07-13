import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component{
  submit () {
    var laPromesa = fetch('/skills')
    
    var nuevaPromesa = laPromesa.then( function(response){
      return response.json()
    	})

    nuevaPromesa.then(function (bodyTransformado) {
      bodyTransformado.forEach(s => document.getElementbyId('programacion').append(<p>{s}</p>)
    		)
  		})
	}
	render() {
    return (
      <div className="Skills">
    		<p>Programacion</p> 
    		<button onClick={this.submit}>iNFO</button>
    			<div id="programacion"></div>
    		<p>Arte Interactivo</p> 
    			<div id="arteInteractivo"></div>
    		<p>Pintura, Dibujo y Escultura</p>
    		<p>Realidad Virtual y Aumentada</p>
    	</div>
    );
  }
}
export default Skills;
