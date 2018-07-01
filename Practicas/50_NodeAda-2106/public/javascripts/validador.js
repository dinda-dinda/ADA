/*  Validador de inputs // ingresa label para completar los campos requeridos. 
 *  @params nombre, apellido, telefono, email  |  | return  envio de datos. 
 */
function validador(nombre, apellido, telefono, email) {
    //controla que complete todo lo requerido en el form
    //usar promises
    try {
        (nombre != undefined && apellido != undefined && telefono != undefined && email != undefined);
        (isValidEmailAddress(email)); /*validador de Email*/
        (isValidThisNumber(telefono)); /*validador de Telefono*/
        $.ajax({
            type: "POST",
            url: "/user",
            data: { nombre: nombre, apellido: apellido, email: email, telefono: telefono }
        });
    } catch (e) {
        if (!isValidThisNumber(telefono)) { $('#telReq').innerHTML("Telefono de 7 a 10 digitos"); } else { $('#telReq').innerHTML("") };
        if (!isValidEmailAddress(email)) { $('#emailReq').innerHTML("Ingrese un email valido"); } else { $('#emailReq').innerHTML("") };
        //si los campos son undefined pone etiquetas o/y los quita.
        if (nombre = undefined) { $('#nombReq').innerHTML("* ingrese un Nombre *"); } else { $('#nombReq').innerHTML("") };
        if (apellido = undefined) { $('#apelReq').innerHTML("* ingrese un apellido *"); } else { $('#apelReq').innerHTML("") };
        if (telefono = undefined) { $('#telReq').innerHTML("* ingrese un telefono *"); } else { $('#telReq').innerHTML("") };
        if (email = undefined) { $('#emailReq').innerHTML("* ingrese un email *"); } else { $('#emailReq').innerHTML("") };
        //hacer res.render()
    };

}


//Funcion con Expresion Regular Para validar numero de telefono de 7 a 10 caracteres
function isValidThisNumber(phoneNumber) {
    var RegEx = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/i;
    return RegEx.test(phoneNumber);
}

//Funcion con Expresion Regular Para validar el email
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

function onclickBtn() {
    console.log("entro boton");
    var nombre = $('input[name=nombre]').val();
    console.log(nombre);
    var apellido = $('input[name=apellido]').val();
    console.log(apellido);
    var telefono = $('input[name=telefono]').val();
    console.log(telefono);
    var email = $('input[name=email]').val();
    console.log(email);

    validador(nombre, apellido, telefono, email);

}