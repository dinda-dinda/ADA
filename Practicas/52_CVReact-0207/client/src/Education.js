import React,  { Component } from 'react';
import Universidad from './UNAvisuales.jpg';
import ADA from './ADAlogo.jpg';
import './Education.css';	

class Education extends Component{
  render() {
     return(
         <div className="Education">

         <section className= "EducationBox">
            <div className="Universidad">
         		<img src={Universidad} alt="Universidad"/>
         	</div>
        
            <section className="Info">
         		<section className="InfoEducation">
         				<h1>UNA VISUALES</h1>
         				<h1 className="ColorText">Licenciatura en Artes Visuales</h1>
         		</section>
         	</section>
        </section>
        
        <section className= "EducationBox">
            <div className="ADA">
                <img src={ADA} alt="ADA"/>
            </div>
        
            <section className="Info">
                <section className="InfoEducation">
                    <h1>ADA</h1>
                    <h1 className="ColorText">FrontEnd Developer</h1>
                </section>
            </section>
        </section>
         
     	</div>);
  }
}

export default Education;
