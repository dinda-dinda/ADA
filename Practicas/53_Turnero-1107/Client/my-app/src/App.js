import React, { Component } from 'react';
import Login from "./Login"
import Form from "./Form"
import './App.css';
import{
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
        <nav className="App-header">
          <li><Link to="/login">Login</Link></li>
        </nav>       
          <li><Link to="/form">Sacar Turno</Link></li>
    <Route path ="/form" component ={Form}/>                
    <Route path ="/login" component ={Login}/>        
      </div>
        </Router>

    );
  }
}

export default App;
