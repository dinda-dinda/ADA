let alumno = new Alumno ("Pepe", "Feliz", "11/10/2012", 78654890, 7894),
let materia = new Materia (quimica,"ma y ju "),
console.log("Materia", materia);
materia.addNota(8);
console.log(materia);
let promedioMateria = materia.calcularPromedio();
alumno.addMateria(materia);

let m2 = new Materia("quimica", "ma y ju 19:00 a 22:00 hs");

m2.addNota(7);
m2/addNota(5);

alumno.addMateria(m2);

