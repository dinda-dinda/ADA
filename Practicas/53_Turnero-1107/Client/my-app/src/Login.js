import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
         <h2>ingrese a su cuenta de Administrador</h2>
         <label>elija una opcion</label>
         <select>
          <option value="alineacion">alineacion</option>
          <option value="balanceo">balanceo</option>
          <option value="rotacion">rotacion</option>
         </select>
         <input type="date"></input>

         <button id="btnTurno">submit</button>
      </div>
    );
  }
}

export default Login;
