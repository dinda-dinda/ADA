class Camion {
// .cantEjes  | acoplar()
// .tara     
  constructor (patente="",ejes="") {
    this._patente = patente;
    this._ejes = ejes;
    this._anio = anio;
    this._velocidad;

  }
/* Uso el acelerar y frenar para cambiar el atributo 
  set _velocidad(value) {
    this._velocidad = value;
  }*/
  get patente(){
    return this._patente;
  }


  set patente(value) {
    this._patent = value;
  }
  get patente(){
  	return this._patente;
  }


  set ejes(value) {
    this._ejes = value;
  }
  get ejes(){
    return this._ejes;
  }


  set anio(value) {
    this._anio = value;
  }
  get anio(){
    return this._anio;
  }


  toString () {
    return this._patente + ', ' + this._ejes + ', ' + this._anio;
  }

  /***
  **
  ****/
  acelerar(aceleracion){
    this._velocidad+=aceleracion;
  }
  frenar(){
    this._velocidad = 0;
  }
}
