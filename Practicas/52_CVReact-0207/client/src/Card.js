import React,  { Component } from 'react';
import Square from './DinAVatar.png';
import Education from './Education.js';
import './Card.css';
import './Education.css';

class Card extends Component{
  render() {
     return(
     	<div className="Card">
     		<img src={Square} alt="DINDA"/>
     		
     		<section className="Info">
     			<h4>Hello & Welcome</h4>
     			<h1>I'M DINDA an Artist</h1>
     			<div className="InfoCard">
          		   	<ul>
     		     		<li><b>Age:     </b>28</li>
     		     		<li><b>Address: </b>La Habana 2254, Don Torcuato</li>
     		     		<li><b>Email:   </b>dindadindaart@gmail.com</li>
     		     		<li><b>Phone:   </b>+54 9 11-2306-2629</li>
     		     		<li><b>Website: </b>https://www.dinda.com.ar</li>
     		     	</ul>                    
     			</div>
                    <Education/>
     		</section>
     	</div>);
 }
}

export default Card;
