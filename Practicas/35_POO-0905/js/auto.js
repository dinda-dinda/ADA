class Auto {

  constructor (patente="",modelo="") {
    this._patente = patente;
    this._modelo = modelo;
    this._anio = anio;
  }

  set patente(value) {
    this._patent = value;
  }
  get patente(){
  	return this._patente;
  }


  set modelo ( value ) {
    this._modelo = value;
  }
  get modelo(){
  	return this._modelo;
  }


  set anio ( value ) {
    this._anio = value;
  }
  get anio(){
  	return this._anio;
  }


  toString () {
    return this._patente + ', ' + this._modelo + ', ' + this._anio;
  }
}

