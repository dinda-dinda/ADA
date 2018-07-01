/*Dinda Indaburo
TP3 - MemoTest 

ADA BootCamp FrontEnd
3era Generacion TM 2018 

Profesora Belen Alegre
Adjunto Ezequiel Gonzalez
*/

/*
*Escondo el tablero y el aside, creo dinamicamente una pantalla de entrada
donde Cargo el Nombre y el tipo de juego que sera utilizado en la siguiente.
**/
function newGame() {
	let nav = $('#headerNav').hide();
    let infoJuego = $('#infoJuego').hide();
    let tablero = $('#play').hide();


    function crearEntrada() {

        let backgroundEntrada = document.createElement('div');
        backgroundEntrada.setAttribute('id', 'backgroundEntrada');
        $('#todo').append(backgroundEntrada);

        let newGameWindow = document.createElement('div');
        newGameWindow.classList.add('Entrada');
        newGameWindow.setAttribute('id', 'newGameWindow');
        backgroundEntrada.append(newGameWindow);

        $('#newGameWindow').append('<h2 class="Titulo">MemoTest</h2>');
        $('#newGameWindow').append('<h2 class="Titulo">GREEN</h2>');

        let labelJugador = document.createElement('label');
        labelJugador.innerHTML = '<label>Ingrese Nombre Jugador</label>';
        newGameWindow.append(labelJugador);
        $('#newGameWindow').append('<label id="obligatorio"></label>');

        let jugador = document.createElement('input'); //para poner nombre    
        jugador.setAttribute('id', 'jugador');
        jugador.setAttribute('maxlenght', '20');
        newGameWindow.append(jugador);

        let labelArray = document.createElement('label'); //etiqueta
        labelArray.innerHTML = '<label>Elija el juego</label>';
        newGameWindow.append(labelArray);

        let array = document.createElement('select'); //para elegir juego    
        array.setAttribute('id', 'tipoJuego');
        newGameWindow.append(array);

		/*--DIFICULTAD SLIDE-----------------------------------------*/
        $('#newGameWindow').append(`<div id="nivelJuego"></div>`)
        $('#nivelJuego').append('<label>Turnos :</label><h3 id="dificultad" ></h3>');
        $('#nivelJuego').append('<div id="slidecontainer" class="slidecontainer"><input id="myRange" type="range" max="18" min="8" value="12" class="slider"></div>');
        $('#slidecontainer').append('<div id="labels"><label id="dificil">dificil</label><label id="intermedio">intermedio</label><label id="facil">facil</label></div>');


        var slider = document.getElementById("myRange");
		var output = document.getElementById("dificultad");
		output.innerHTML = slider.value; // Display the default slider value


		// Update the current slider value (each time you drag the slider handle)
		slider.oninput = function() {
    	output.innerHTML = this.value;
		}

		/*-------------------------------------------*/
        let optionArboles = document.createElement('option'); //para elegir juego    
        optionArboles.innerHTML = "Arboles";
        optionArboles.setAttribute('val', 'Arboles');
        array.append(optionArboles);

        let optionFlores = document.createElement('option'); //para elegir juego    
        optionFlores.innerHTML = "Flores";
        optionFlores.setAttribute('value', 'Flores');
        array.append(optionFlores);

        $('#newGameWindow').append('<button id="readyToPlay" class="button"><span>Ready </span></button>');
       
        readyToPlay.addEventListener('click', validarNombre);

    }
    setTimeout(crearEntrada, 1000);
}

newGame();

/*
*Cargo los valores Ingresados al memoTest y le doy play
*/
function cargarNuevoJuego() {
	let nav = $('#headerNav').show();
    let presentacion = $('#backgroundEntrada').hide();
    let presentacion2 = $('#headerGreen').hide();
    let infoJuego = $('#infoJuego').show(); //	HACER! ANIMACION ASIDE
    let tablero = $('#play').show();

    let nombreJugador = $('input').val();
    $('#nombreJugador').text(nombreJugador); //guardo el nombre del imput
    let dificultad = document.getElementById("myRange").value;

    let tipoJuego = $('select option:selected').val(); //me traigo el valor del select

    MemoTest(tipoJuego, dificultad, nombreJugador);

}

/*
*Valido que el campo de Nombre este completo.
*/
function validarNombre() {
    let obligatorio = $('#obligatorio');
    let nombreJugador = $('input').val();
    
    if (nombreJugador == ""||nombreJugador == undefined) {
        obligatorio.text("* Campo obligatorio");
        return false;
    } else {
        obligatorio.text("");
    	cargarNuevoJuego();    
    }
}
/*--------header en movimiento-----*/
var $header = $('.header'),
    $inner = $('.inner'),
    $nav = $('nav'),
    navHeight = 75;

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop(),
      headlineHeight = $header.outerHeight() - navHeight,
      navOffset = $nav.offset().top;

  $header.css({
    'opacity': (1 - scrollTop / headlineHeight)
  });
  $inner.children().css({
    'transform': 'translateY('+ scrollTop * 0.4 +'px)'
  });
  if (navOffset > headlineHeight) {
    $nav.addClass('scrolled');
  } else {
    $nav.removeClass('scrolled');
  }
});

/*--DEVELOPER BUTTONS!-- descomentar las lineas a continuacion
y tambien las lineas DEVELOPER del HTML*/
/*
function developerGanar(){
let nombreJugador = $('input').val();
    $('#nombreJugador').text(nombreJugador); //guardo el nombre del imput
    let dificultad = document.getElementById("myRange").value;

    let tipoJuego = $('select option:selected').val(); //me traigo el valor del select    

startRanking();
ingresarGanador(nombreGanador, tipoJuego, dificultad);    
}
developerWin.addEventListener('click', developerGanar);

function developerPerder(){
 startRanking();
 displayRanking();
}
developerLose.addEventListener('click', developerPerder);
function limpiarLS() {
    console.log("limpiarLS");
    localStorage.clear();
}
cleanLS.addEventListener('click', limpiarLS);
*/

