/*Dinda
TP3 - MemoTest BeGreen

ADA BootCamp FrontEnd
3era Generacion TM 2018

Profesora Belen Alegre
Adjunto Ezequiel Gonzalez
*/

var nombreGanador = "";
var tipoJuego = "";
var intentos = 0;
var boton;

var infoGanador = {
    nro: "10",
    nombreGanador: "",
    comentario: "",
    juego: "",
    intentos: 0
};

var historico = [];
var historicoOrdenado=[];
/*LOCAL STORAGE*/
var rankingGuardado = localStorage.getItem("rankingGuardado"); //traigo del LS


function existeRanking() {
    console.log("rankingGuardado :"+rankingGuardado);

    if (rankingGuardado === null || rankingGuardado== undefined) {
        crearRanking();

    } else {
        console.log("entre al else del existeRanking");
        localStorage.getItem("rankingGuardado");
        historico = JSON.parse(rankingGuardado).historico;
    }
}


function crearRanking() {
    historico = [{
        nro: "001",
        nombreGanador: "Dinda",
        juego: "Flores",
        intentos: 8,
        comentario: "XOX"
    }, {
        nro: "002",
        nombreGanador: "Apyx",
        juego: "Arboles",
        intentos: 8,
        comentario: "APY"
    }];

    var jsonRanking = {
        "historico": historico,
        "total": historico.length //los totales se muestran para generar los paginados
    }

    rankingGuardado = JSON.stringify(jsonRanking);
    localStorage.setItem("rankingGuardado", rankingGuardado); /*Guardo en LocalStorage*/

}




/*
 *    *  Crea el entorno visual del Ranking.
 */
function startRanking() {
    let nav = $('#headerNav').hide();
    let infoJuego = $('#infoJuego').hide();
    let tablero = $('#play').hide();

    /*backgroundRanking fondo del Ranking 100vw 100vh*/
    let ranking = document.createElement('main');
    ranking.setAttribute('id', 'ranking');
    ranking.setAttribute('class', 'ranking');
 
    $('#todo').append(ranking);

    /*HEADER*/
    $('#ranking').append('<header>' +
        '<h2 class="TituloRanking">MemoTest</h2>' +
        '<h2 class="TituloRanking">GREEN</h2></header>');
}
/*
 *  Arma el Ranking cargado en el array historico.
 *  return
 * 
 */
function displayRanking(nombreGanador, tipoJuego, intentos) {
    existeRanking()
    let jsonRanking = JSON.parse(rankingGuardado);
    let historico = jsonRanking.historico;

    /*Creo pantalla de Ranking*/
    $('#ranking').append('<section id="backgroundHistorico">' +
                            '<div id="historico" class="sectionLi">' +
                            '<h1 id="rankingHistoricoTitulo">Ranking Historico</h1>' +
                            '<table id="rankingUl"></table>' +
                            '<div>'+ 
                        '</section>');
    /*Descripcion Ranking*/
    $('#rankingUl').append(`<tr class="TH">
                                <th><h3 class="THNum">#Num</h3></th>
                                <th><h1 class="THNombre" >Nombre</h1></th>
                                <th><h2 class="THJuego" >Juego</h2></th>
                                <th><h3 class="THMovs">Meta</h3></th>
                                <th><h2 class="THComm" >Comentario</h2></th>
                            </tr>`);

    /*Ordeno Array de Rankings "burbujeo" recorro y comparo con cada elemento*/
    historicoOrdenado = historico;
    for (var i = 0; i < historicoOrdenado.length; i++) {
        for (var j = 0; j < historicoOrdenado.length-i-1; j++) { 

               if(historicoOrdenado[j].intentos<historicoOrdenado[j+1].intentos){ //si uno es menor que el otro lo cambia de lugar
                let temporal= historicoOrdenado[j+1];       //el seg lo pongo en temporal
                historicoOrdenado[j+1] = historicoOrdenado[j];     
                historicoOrdenado[j] = temporal;
                }

        }
       
    }

    /*Agrego Atributo de Orden segun */
    let largo = historicoOrdenado.length;
    console.log("largo= "+largo);
    for (var i = historicoOrdenado.length - 1; i >= 0; i--) {
        historicoOrdenado[i].nro =largo-(i);
        console.log("i +"+i);
    }
  /*  for (var i = 0; i < historicoOrdenado.length; i++) {
        historicoOrdenado[i].nro= i+1;
    }*/

    /*Despliego Ranking por Array Historico*/

    for (var i = historicoOrdenado.length - 1; i >= 0; i--) {
        $('#rankingUl').append(`<tr>
                                    <td><h3 class="juego">${historicoOrdenado[i].nro}</h3></td>
                                    <td><h1 class="nombreGanador">${historicoOrdenado[i].nombreGanador}</h1></td>
                                    <td><h2 class="juego">${historicoOrdenado[i].juego}</h2></td>
                                    <td><h3 class="juego">${historicoOrdenado[i].intentos}</h3></td>
                                    <td><h2 class="comentario" >${historicoOrdenado[i].comentario}</h2></td>
                                </tr>`);
    }
  
}

/* 
 *   Arma el formulario de ganador que ingresa en el ranking y arma infoGanador
 *   @params = nombreGanador || tipoJuego || intentos
 */
function ingresarGanador(nombreGanador, tipoJuego, intentos) {
    /* INPUTS DE FORM PARA AGREGAR RANKING*/
    /*info Ganador*/
    $('#ranking').append(`<section id="ganadorRanking" class="sectionLi alignCenter">
                            <h1 class="rankingCell">${nombreGanador}</h1>
                            <p class="rankingCell">Tipo de Juego</p>
                            <spam class="rankingCell">${tipoJuego}</spam></br>
                            <p class="rankingCell">Cantidad de movimientos</p>
                            <spam class="rankingCell">${intentos}</spam>
                        </<section>`);

    infoGanador.nombreGanador = nombreGanador;
    infoGanador.juego = tipoJuego;
    infoGanador.intentos = intentos;
    /*Input para ingresar comentario!*/

    $('#ganadorRanking').append('<section id="comment" class="sectionLi">' +
                                    '<label>Ingresar Comentario</label>' +
                                    '<input id="commentGanador" maxlenght="20"></input>' +
                                    '<button id="grabarRanking">Grabar</button>' +
                                '</section>');

    grabarRanking.addEventListener('click', guardarGanador);
}

/*
 *   Obtiene el comentario y hace el push del obj infoGanador en historico.
 */

function guardarGanador() {
    let commentGanador = $('#commentGanador').val();
    infoGanador.comentario = commentGanador;

    var newRecord = {
        nro: "10",
        nombreGanador: infoGanador.nombreGanador,
        comentario: infoGanador.comentario,
        juego: infoGanador.juego,
        intentos: infoGanador.intentos
    };

    existeRanking();
    historico.push(newRecord);

    var jsonRanking = {
        "historico": historico,
        "total": historico.length //los totales se muestran para generar los paginados
    }
   
    rankingGuardado = JSON.stringify(jsonRanking);
    localStorage.setItem("rankingGuardado", rankingGuardado); /*Guardo en LocalStorage*/

    $('#ganadorRanking').hide();  /*quito formulario de Comentario e informacion del ganador.*/
    displayRanking();    
}

