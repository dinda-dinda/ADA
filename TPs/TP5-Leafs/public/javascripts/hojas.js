var favoritos = [];

//ip y puerto al que se le realizaran los pedidos
var servidor = 'http://localhost:3000';

$(document).ready(function() {
    console.log("entre en hojas.js");
    $.getJSON(servidor + "/",
        function(data) {
            for (var i = data.peciolo.length - 1; i >= 0; i--) {
                console.log("data= " + data);
                var opcion = $(".peciolo-select option[value='-1']").clone();
                opcion.attr("value", data.peciolo[i]);
                opcion.html((data.peciolo)[i]);
                $(".peciolo-select").append(opcion);
            }
        });

    $("#botonFiltro").click(function() {
        $.ajax({
            method: 'post',
            url: `${servidor}/home/buscar`,
            data: {
                favorito: $("#favorito").val(),
                limbo: $("#limbo").val(),
                peciolo: $("#peciolo").val()
            },
            success: function(data) {
                console.log('ESTO VOLVIO DEL CONTROLADOR ' + JSON.stringify(data));
                let incommingData = JSON.parse(data);
                let Filtrado = [];
                Filtrado = incommingData.HojasFiltro;
                console.log("Filtrado length " + Filtrado.length);

                $("#navGallery").children("p").remove();
                $("#gallery").children("figure").remove(); //elimino todos los figure que estan en Galeria


                for (var i = Filtrado.length - 1; i >= 0; i--) { //agrego los nuevos figure del Filtrado
                    $("#gallery").append(`<figure class="flex" data=${Filtrado[i].id}><img src= ${Filtrado[i].src}><h2>${Filtrado[i].especie}</h2><fav class=${Filtrado[i].favorito}></fav><h3>Limbo: ${Filtrado[i].limbo}</h3><h3>Peciolo: ${Filtrado[i].peciolo}</h3><a class="imgLinda"></a><button id=${Filtrado[i].Nombre}+${Filtrado[i].Forma}>Ver Detalle</button></figure>`)
                }


                $("#navGallery").append(`<p>${incommingData.ruta}/</p>`);
                activarStar();
            },
            error: function(data) {
                console.log("ERROR");
                console.log(JSON.stringify(data));
            }
        });

    });
    activarStar();
});

function activarStar() {
    $("fav").click(function() {
    		let estrella = $(this);
            let clase = $(this).attr('class');
            let idFavorito = $(this).parents().attr('data');

            let endPoint;
            if (clase == "noFavorito") { //lo paso a favorito
                endPoint = "/home/agregarFavorito";
            } else {
                endPoint = "/home/sacarFavorito";
            }

            $.ajax({
                method: 'post',
                url: servidor+endPoint,
                data: {
                    id: idFavorito
                },
                success: function(data) {
                    console.log("data "+data);
                    estrella.toggleClass('noFavorito siFavorito');

                    if (JSON.stringify(data) =="exito") {
                    }
                },
                error: function(data) {

                    console.log("ERROR: " + data);
                }
            });

        });
    }