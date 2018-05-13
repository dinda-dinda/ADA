class Materia {

    constructor(nombre, horarios) {
        this._nombre = nombre;
        this._horario = horario;
        this._notas = [];

    }

    addNota(nota){
    	this._notas.push(nota);
    }

    calcularPromedio() {
        let largo = this._notas.length;
        let total = 0;

        for (i = 0; i < largo; i++) {
            total += this._notas[i].promedio;
        }
        let promedio = total / largo;
        return promedio;
    }
}