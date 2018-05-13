class Alumno extends Persona {

    constructor(nombre, apellido, fecha, dni, legajo) {
    
    super (nombre, apellido, fecha, dni);
    this._legajo = legajo;
    this._colegio;
    this._materias=[];
    }

    set legajo (value){
        this._legajo = value;
    }

    get legajo(){
        return this._legajo;
    }

    addMateria(materia){
        this._materias.push(materia);
    }

 
    calcularPromedio() {
        let largo = this._materias.length;
        let total = 0;

        for (i = 0; i < largo; i++) {
            total += this._materias[i].calcularPromedio();
        }

        let promedio = total / largo;
        return promedio;
    }

    getMaterias(){
        return this._materias
    }
}