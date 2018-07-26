import React, { Component } from 'react';
import './App.css';
import CajaDeBusqueda from './CajaDeBusqueda.js'; 
import ResultadosBusqueda from './ResultadosBusqueda.js'; 
import DetalleDelProducto from './DetalleDelProducto.js';


import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <div className="App">
    		<CajaDeBusqueda/>
     
    <Router>
      <Switch>  	
		<Route exact path="/api/items" component={ResultadosBusqueda}/>
	    <Route path="/api/items/:id" component={DetalleDelProducto}/>
	  </Switch>
    </Router>
     </div>
    );
  }
}

export default App;
