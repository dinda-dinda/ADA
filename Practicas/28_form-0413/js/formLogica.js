var email = document.getElementById('email');

function validarObligatorio(){
var camposOblig = document.getElementByClassName('obligatorio');
if(camposOblig.value==""){

}

}
/**
 *  Valida mail 
 *   @params | email |
 *   true o false
 **/

function validarEmail(valor) {

    //controlador de expresion regular para validar Emails
    var checkEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    	console.log(checkEmail.test(email.value));

    if (checkEmail.test(email.value)) {
        alert("La dirección de email " + email.value + " es correcta!.");
        console.log("mail correcto");
        return true;
    } else {
        alert("La dirección de email es incorrecta!.");
        console.log ("mail incorrecto "+ email.value);
        return false;
    }
}

function validarForm() {
    console.log("validarForm");
//validar email
    if (email.value != "") {
        if (!validarEmail(email)) {
            var emailError = document.getElementById('email');
            emailError.innerHTML = "Formato de Email Invalido";
            console.log("Formato de Email Invalido");
        }
    } else {
        console.log("Falta Email");
    }

//
}

var boton = document.getElementById('boton');
boton.addEventListener("click", validarForm);