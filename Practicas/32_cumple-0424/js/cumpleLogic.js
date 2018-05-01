var jsonCumple;
var cumples = [];
var datosGuardados = localStorage.getItem("cumples");
console.log("QUE HAY EN LA VARIABLE LOCAL " + localStorage.getItem("cumples"));


if(datosGuardados== null){
	cumples = [];
}else{
	cumples = JSON.parse(datosGuardados).cumples;
}


$('.avatar').on('click', function(e) {

    var imgElegido = $(this).data('avatar');
    $('#nombreImg').val("");
    $('#nombreImg').val(imgElegido);
})

$('#botnListo').on('click', function(f) {
        var info = {
            nombre: $('#nombreCumple').val(),
            fecha: $('#fechaCumple').val(),
            avatarElegido: $('#nombreImg').val()
        };

        cumples.push(info); //lo pusheo en el arraycumple
        	/*

        jsonCumple = {
            "cumples": cumples,
            "total": cumples.length //los totales se muestran para generar los paginados
        }
        var jsonStringify = JSON.stringify(jsonCumple);
        localStorage.setItem("cumples", jsonStringify);

        console.log("QUE HAY EN LA VARIABLE LOCAL " + localStorage.getItem("cumples"));

})
/*
$('#botnLimpiar').on('click', function(f) {

	localStorage.clear();
	})*/
/*
function validarCampos() {
    let camposRequeridos = document.getElementsByClassName("requiredClass");
    let inputsArray = Array.from(camposRequeridos);
    inputsArray.forEach(function(inputsArray) {
            if (inputsArray.value == "") {
            		console.log("inputsArray"+inputsArray);
                return false;
            }
            return true;
        })


    }
*/
    /*

    $('#botnlisto').on('click',function(d){


    $('#nombreCumple').val(nombre);
    console.log(nombre);

    console.log(avatarElegido);
    var sourceImgElegida = val('img/'+avatarElegido+'.png')
    $('#avatarCumple').attr('src',sourceImgElegida);

    console.log(sourceImgElegida);


    })*/