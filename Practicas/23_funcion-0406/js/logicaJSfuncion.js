/*Generar funci[on de login*/
/*Devuelva true en caso de logueo y false en caso contrario*/
/* Contador, con 3 errores bloquea el login*/
//fUNCION LOGIN QUE ENGLOBE LA OTRA FUNCION.
//Poner un ARRay con varios usuarios y contrasenias, buscar sobre el array y que nos de verdadero o falso

function validar(usario, password) {
    if (usuario == "pepe" && password == 1234)
        return true;
} else {
    return false;
} //Aca la termine de definir


function login(usuario, password) {

    var cantidad = 0;
    var valido = validar(usario, password);

    while (valido == false && cantidad < 3) { ///la utilizo.
        console.log("Usuario invalido");
        cantidad++;
        valido = validar(usuario, password);
    }

    if (valido) {
        console.log("Usuario bienvenido");
    }
    if (cantidad == 3 && !valido) {
        console.log("Usuario Bloqueado");
        //!valido, como es booleano, quiere decir false

    }
}

login("pepa", 4321);

//Hacer Ejercicios de Funciones!!