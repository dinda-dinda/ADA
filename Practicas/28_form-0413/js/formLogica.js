var email = document.getElementById('email');
var inputDni = document.getElementById('NumDoc');
var camposOblig = document.getElementsByClassName('obligatorio');


//Pais, Provincia y Ciudad
var comboPais = ["Selecciona Pais", "Argentina", "Venezuela"];

var BuenosAires = ["Selecciona Ciudad", "Tigre", "Hurlingham", "CABA"];
var Cordoba = ["Selecciona Ciudad", "Villa General Belgrano", "Capilla del Monte", "San Marcos Sierra"];
var RioNegro = ["Selecciona Ciudad", "El Bolson", "Bariloche", "Catriel"];

var Maracaibo = ["Selecciona Ciudad", "1", "2", "3"];
var NuevaAndalucia = ["Selecciona Ciudad", "1", "2", "3"];
var Caracas = ["Selecciona Ciudad", "1", "2", "3"];
var SinSeleccion = ["Selecciona Provincia"];

var comboProvArg = ["Selecciona Provincia", "Buenos Aires", "Cordoba", "RioNegro"];
var ciudXProvArg = [SinSeleccion, BuenosAires, Cordoba, RioNegro];

var comboProvVen = ["Selecciona Provincia", "Maracaibo", "Nueva Andalucia", "Caracas"];
var ciudXProvVen = [SinSeleccion, Maracaibo, NuevaAndalucia, Caracas];

var ciudadesPorPais = [SinSeleccion, ciudXProvArg, ciudXProvVen];

var provXPais = [SinSeleccion, comboProvArg, comboProvVen];


/*variables de campos requeridos*/
var nacionR = document.getElementById('nacionRequired');
var nombreR = document.getElementById('nombreRequired');
var fechNacR = document.getElementById('fecNacRequired');
var numDocR = document.getElementById('numDocRequired');
var calleR = document.getElementById('calleRequired');
var emailR = document.getElementById('emailRequired');



function cargarNacionalidades() {
    var sel = document.getElementById('Nacionalidad');
    for (var i = 0; i < comboPais.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = comboPais[i];
        opt.value = comboPais[i];
        sel.appendChild(opt);
    }
}

function cargarPaises() {
    var sel = document.getElementById('Pais');
    for (var i = 0; i < comboPais.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = comboPais[i];
        opt.value = comboPais[i];
        sel.appendChild(opt);
    }
}

function cargarProvincias() {
    limpiarSelector("Provincia");
    var paisSeleccionado = document.getElementById("Pais").value;
    var sel = document.getElementById('Provincia');
    for (var i = 0; i < comboPais.length; i++) {
        if (comboPais[i] == paisSeleccionado) {
            for (var x = 0; x < provXPais[i].length; x++) {
                var opt = document.createElement('option');
                opt.innerHTML = provXPais[i][x];
                opt.value = provXPais[i][x];
                sel.appendChild(opt);
            }
        }
    }
    cargarCiudades(); //CARGO LAS CIUDADES ASI YA CAMBIA AUTOMATICAMENTE
}

function cargarCiudades() {
    limpiarSelector("Ciudad");
    var paisSeleccionado = document.getElementById("Pais").value; //VEO QUE PAIS ESTA SELECCIONADO
    for (var i = 0; i < comboPais.length; i++) {
        if (comboPais[i] == paisSeleccionado) {
            var provinciaSeleccionada = document.getElementById("Provincia").value; //VEO QUE PROVINCIA ESTA SELECCIONADA
            var sel = document.getElementById('Ciudad');
            for (var x = 0; x < provXPais[i].length; x++) {
                if (provXPais[i][x] == provinciaSeleccionada) { //POR CADA CIUDAD DE ESA PROVINCIA DE ESE PAIS AGREGO UN OPTION
                    for (var z = 0; z < ciudadesPorPais[i][x].length; z++) { //en i ppor pais y en x por provincia
                        var opt = document.createElement('option');
                        opt.innerHTML = ciudadesPorPais[i][x][z];
                        opt.value = ciudadesPorPais[i][x][z];
                        sel.appendChild(opt);
                    }
                }
            }
        }
    }
}

//Metodo para limpiar contenido de los selectores, pasar por parametro id del selector html
function limpiarSelector(idSelector) {
    let selector = document.getElementById(idSelector);
    while (selector.hasChildNodes()) {
        selector.removeChild(selector.firstChild);
    }
}

/**
 *  Valida mail 
 *   @params | email |
 *   true o false
 **/

function validarEmail(valor,emailR) {

    //controlador de expresion regular para validar Emails
    var checkEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    console.log(checkEmail.test(email.value));

    if (checkEmail.test(email.value)) {
        console.log("mail correcto");
        nombreR.innerHTML = "";
        return true;
    } else {
        emailR.innerHTML="Dirección de email requerida.";
        console.log("mail incorrecto " + email.value);
        return false;
    }
}


/**
 *  limpio los imput, traigo por etiqueta de html. texto y checked
 *   
 *
 **/
function limpiar() {
    var inputs = document.getElementsByTagName('input');
    console.log(inputs);
    var inputsArray = Array.from(inputs);
    console.log(inputsArray);
    inputsArray.forEach(function(e) {
        //console.log(e);
        if (e.type == 'checkbox') {
            e.checked = false; //checkbox
        } else {
            e.value = ""; //input text
        }
    });
    var selects = document.getElementsByTagName('select');
    Array.from(selects);
}

/*variables para la validacion de genero*/
var radioButtonFem = document.getElementById('fem');
var radioButtonMasc = document.getElementById('masc');
var radioButtonOtro = document.getElementById('otro');

/*
 * valida que se haya elegido una opcion de genero
 *param radioButtonOtro, radioButtonMasc, radioButtonFem
 *return boolean
 */
function validarGenero(radioButtonOtro, radioButtonMasc, radioButtonFem) {

    let gR = document.getElementById('generoRequired');

    if (radioButtonOtro.checked == true || radioButtonMasc.checked == true || radioButtonFem.checked == true) {
        gR.innerHTML = "";
        return true;
        console.log("radioButton checked");
    } else {
        console.log("radioButton not checked")
        gR.innerHTML = "Campo Requerido";
        return false;
    }
}


/*
 * valida que se haya elegido una opcion de genero
 *param radioButtonOtro, radioButtonMasc, radioButtonFem
 *return boolean
 */
function validarCampos(nacionR, nombreR, fechNacR, calleR) {


    let selecNacionalidad = document.getElementById('Nacionalidad');
    console.log(selecNacionalidad);
    if (selecNacionalidad.value == "Selecciona Pais") {
        nacionR.innerHTML = "Campo Requerido";
    } else {
        nacionR.innerHTML != "";
        console.log("selecciona Pais, chequeado ok");
    }

    let inputNombre = document.getElementById('Nombre');
    if (inputNombre.value == "") {
        nombreR.innerHTML = "Campo Requerido";
        //return false;
    } else {
        nombreR.innerHTML = "";
        console.log("Nombre, chequeado ok");
    }

    let inputFecNac = document.getElementById('fecNac');
    if (inputFecNac.value == "") {
        fechNacR.innerHTML = "Campo Requerido";
        //return false;
    } else {
        fechNacR.innerHTML = "";
        console.log("Fecha de Nac, chequeado ok");
    }


    let inputCalle = document.getElementById('calle');

    if (inputCalle.value == "") {
        calleR.innerHTML = "Campo Requerido";
        //return false;
    } else {
        calleR.innerHTML = "";
        console.log("Calle, chequeado ok");
    }

    return true;

}

/* //////////para validar DNI

*Valida que el dni sea un numero
*@params labeldeError numDocR
*Return boolean
*/
function validarDni(numDocR,inputDni) {
        console.log("input dni " + inputDni.value);
    if (inputDni.value == "") {
        numDocR.innerHTML = "campo requerido";
        return false;
    } else {
        var n = parseInt(inputDni.value);
        if (isNaN(n)){
            numDocR.innerHTML = "campo requerido, sólo números";
            return false;
        }
        numDocR.innerHTML = ""; 
        return true; 
    }
}
/*ERROR Para preguntar! 
Al validar, si es un numero, isNaN me reconoce como numero 
un string que comience con numero 
*/

function validar() {
    validarCampos(nacionR, nombreR, fechNacR, calleR);
    validarDni(numDocR,inputDni);
    validarEmail(email,emailR);

}

var boton = document.getElementById('boton');

/*boton.addEventListener("click", limpiar);*/
boton.addEventListener("click", validar);

var inputPais = document.getElementById("Pais");
inputPais.addEventListener("change", cargarProvincias);
var inputPais = document.getElementById("Provincia");
inputPais.addEventListener("change", cargarCiudades);

cargarNacionalidades();
cargarPaises();