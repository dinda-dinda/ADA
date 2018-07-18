var favoritos = [];

//ip y puerto al que se le realizaran los pedidos
var servidor = 'http://localhost:3000';

$(document).ready(function() {
    buscar(1);
    console.log("entre en hojas.js");
    
    /*Opciones variables*/
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
                pagina: "1",
                favorito: $("#favorito").val(),
                limbo: $("#limbo").val(),
                peciolo: $("#peciolo").val()
            },
            success: function(data) {
                console.log('ESTO VOLVIO DEL CONTROLADOR ' + JSON.stringify(data));
                let incommingData = JSON.parse(data);
                let Filtrado = [];
                Filtrado = incommingData.items;
                console.log("Filtrado length " + Filtrado.length);

                $("#gallery").children("figure").remove(); //elimino todos los figure que estan en Galeria
                for (var i = Filtrado.length - 1; i >= 0; i--) { //agrego los nuevos figure del Filtrado
                    $("#gallery").append(`<figure class="flex card card-1" data=${Filtrado[i].id}><img src= ${Filtrado[i].src}><h2>${Filtrado[i].especie}</h2><fav class=${Filtrado[i].favorito}></fav><h3>Limbo: ${Filtrado[i].limbo}</h3><h3>Peciolo: ${Filtrado[i].peciolo}</h3><a class="imgLinda"></a><button class="btnDetalle btn">Ver Detalle</button></figure>`)
                }

                $("#navGallery").children("p").remove();
                $("#navGallery").append(`<p class="small">${incommingData.rutasNav}/</p>`);
                
                construirPaginado(incommingData.cantPaginas);
                activarStar();
                verDetalle();
                
            },
            error: function(data) {
                console.log("ERROR");
                console.log(JSON.stringify(data));
            }
        });

    });
    
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
            url: servidor + endPoint,
            data: {
                id: idFavorito
            },
            success: function(data) {
                console.log("data " + data);
                estrella.toggleClass('noFavorito siFavorito');

                if (JSON.stringify(data) == "exito") {}
            },
            error: function(data) {

                console.log("ERROR: " + data);
            }
        });

    });
}

/*-----------Ver Detalle--------------*/
function verDetalle() {
    console.log("verDetalle");
     $(".btnDetalle").click(function() {
        let idSeleccionado = $(this).parents().attr('data');
        console.log("idSeleccionado: " + idSeleccionado);

        window.location.href= servidor+"/home/"+idSeleccionado;
        
        activarStar();

    });
  
}

function construirPaginado(cantPaginas) {
    console.log("construyendo Paginado - cantPaginas :" + cantPaginas);
    $('#paginado').children("a").remove();
    for (var i = 1; i < cantPaginas + 1; i++) {
        $('#paginado').append(`<a id="${i} href="" onClick=buscar(${i})>${i}</a>`);
    }
}

function buscar(nroPagina) {
    $.ajax({
        method: 'post',
        url: `${servidor}/home/buscar`,
        data: {
            pagina: nroPagina,
            favorito: $("#favorito").val(),
            limbo: $("#limbo").val(),
            peciolo: $("#peciolo").val()
        },
        success: function(data) {
            let incommingData = JSON.parse(data);
            let Filtrado = [];
            Filtrado = incommingData.items;
            
            $("#gallery").children("figure").remove(); //elimino todos los figure que estan en Galeria
            for (var i = Filtrado.length - 1; i >= 0; i--) { //agrego los nuevos figure del Filtrado
                $("#gallery").append(`<figure class="flex card card-1" data=${Filtrado[i].id}><img src= ${Filtrado[i].src}><h2>${Filtrado[i].especie}</h2><fav class=${Filtrado[i].favorito}></fav><h3>Limbo: ${Filtrado[i].limbo}</h3><h3>Peciolo: ${Filtrado[i].peciolo}</h3><a class="imgLinda"></a><button class="btnDetalle btn">Ver Detalle</button></figure>`)
            }

            $("#navGallery").children("p").remove();
            $("#navGallery").append(`<p class="small">${incommingData.rutasNav}/</p>`);

            construirPaginado(incommingData.cantPaginas);
            

            verDetalle();
            activarStar();
        },
        error: function(data) {
            console.log("ERROR");
            console.log(JSON.stringify(data));
        }
    });


};

 