class Persona {
    constructor(nombre, apellido, fecha, dni){
        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaNac = fechaNac;
        this._dni = dni;
    }
set nombre(value){
    this._nombre = value;
}

get nombre () {
    return this._nombre;
}

set fechaNac(value){
    this._fechaNac = value;
}

get fechaNac(){
    return this._fechaNac;
}

getEdad (){
    let hoy = "2018-05-11" // deberia ser un new Date();

    return (hoy - this._fechaNac);
}
}