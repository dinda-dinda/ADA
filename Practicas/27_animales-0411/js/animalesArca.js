//primera clase JS utilizando Objetos

const animales=[{
    nombre		: "serpiente",
    cantPatas	: 0,
    alimentacion: "carnivora",
    saludar		: function saludo() {
        console.log("hola soy " + this.nombre)
    },
    vuela		: false

}, {
    nombre		: "conejo",
    cantPatas	: 4,
    alimentacion: "vegetariano",
    saludar		: function saludo() {
        console.log("hola soy " + this.nombre)
    },
    vuela		: false
}, {
    nombre		: "loro",
    cantPatas	: 2,
    alimentacion: "vegetariano",
    saludar		: function saludo() {
        console.log("hola soy " + this.nombre)
    },
    vuela		: true
}, {
    nombre		: "dinosaurio",
    cantPatas	: 2,
    alimentacion: "carnivoro",
    saludar		: function saludo() {
        console.log("hola soy " + this.nombre)
    },
    vuela		: false
}, {
    nombre		: "humano",
    cantPatas	: 2,
    alimentacion: "vegetariano",
    saludar		: function saludo() {
        console.log("hola soy " + this.nombre)
    },
    vuela		: false
}];

console.log(animales);

for (var i = animales.length - 1; i >= 0; i--) {

 if((animales[i].cantPatas>= 2 )&& (animales[i].alimentacion == "vegetariano")) {
       console.log(animales[i].nombre+" sube al arca de Noe");

    } else {
        console.log(animales[i].nombre+" muere ahogado en el Mar Egeo");
    }
}