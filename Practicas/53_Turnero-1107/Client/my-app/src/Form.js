import React, { Component } from 'react';

class Form extends Component {
  getValuesTurno () {
    var newTurno = {  service: $('#service').value(),
                      date: $('#date').value(),
                      name: $('#nameClient').value(),
                      email: $('#email').value()
                  }
    
    }

  submit () {
    var laPromesa = fetch('/skills')
    
    var nuevaPromesa = laPromesa.then( function(response){
      return response.json()
    } )

    nuevaPromesa.then(function (bodyTransformado) {
      bodyTransformado.forEach(s => alert(s))
    })
  }


  render() {
    return (
      <div>
        <label>elija una opcion</label>
        <select id="service" placeHolder="elija un servicio">
          <option value="alineacion">alineacion</option>
          <option value="balanceo">balanceo</option>
          <option value="rotacion">rotacion</option>
        </select>
        <input id="date" type="date"></input>

        <label>ingrese sus datos personales</label>
        <input id="nameClient" placeHolder="ingrese su nombre"></input>
        <input id="email"></input>

         <button id="btnTurno" onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export default Form;


