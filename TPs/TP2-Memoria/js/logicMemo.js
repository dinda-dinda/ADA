var arboles = [
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg"
];

var primerImagen = {
    'imagen': null,
    'id': ''
};

var segundaImagen = {
    'imagen': null,
    'id': ''
};

/*        todos los img que estan en el figure les pone el attributo src default    
 *        @param  -  return 
 */
function voltarCartas() {

    let backImg = "img/backImg.jpg";
    $('img').attr("src", backImg).delay( 800 ).fadeIn( 400 );
}


function guardarIDsSegundaCarta(id, arboles){
            segundaImagen.imagen = arboles[id];  //pongo src en objeto segundaImagen.imagen el numero de index que corresponde con el id del figure
            segundaImagen.id = id; //me guardo el id del figure en primerImagen.
            console.log(segundaImagen);
}
function borrarIDsPrimerSegundaImagenNull(primerImagen, segundaImagen,id){
            primerImagen.imagen = null;
            primerImagen.id = null;
            segundaImagen.imagen = null;
            segundaImagen.id = null;
}

/*        las imagenes que tienen la img del array las vuelve a la default        
 *        @param  segundaImg -  return 
 */
function chequearCartas(id) {
    //    let id = $(this).attr("id"); //En cada scope guardo el id del figure para comparar
    console.log("chequearCartas + id = " + id);

    if (primerImagen.imagen == null) { //si no tengo nada guardado como 1era imagen,
        primerImagen.imagen = arboles[id]; //pongo src en objeto primerImagen.imagen el numero de index que corresponde con el id del figure
        primerImagen.id = id; //me guardo el id del figure en primerImagen.
    } else {
        if (primerImagen.imagen == arboles[id] && //Si el src guardada en primerImagen es igual al numero de index
            primerImagen.id != id) { //comparo el nuevo id de la segunda imagen con el guardado en primera imagen
  
            guardarIDsSegundaCarta(id, arboles);          
  
            //console.log("id : "+id);
            $("#" + primerImagen.id).off(); //quito evento ;1era imagen
            $("#" + segundaImagen.id).off(); //quito el evento a la segunda imagen
  
            $("#" + primerImagen.id).first().removeClass('notChecked'); //le quito la clase notChecked
            $("#" + segundaImagen.id).first().removeClass('notChecked'); //le quito la clase notChecked
            $("#" + primerImagen.id).first().addClass('checked'); //agrego nueva clase checked
            $("#" + segundaImagen.id).first().addClass('checked'); //agrego nueva clase checked
            
//            alert("SON IGUALES");
            borrarIDsPrimerSegundaImagenNull(primerImagen, segundaImagen,id);

        } else {
  
            guardarIDsSegundaCarta(id,arboles);            
  
            function showNext(id, segundaImagen, primerImagen){
             //   $("#" + segundaImagen.id).hide(1000);
              //  $("#" + primerImagen.id).hide(1000);
                $("#" + segundaImagen.id).show(1000);
                $("#" + primerImagen.id).show(1000);
                
                console.log("showNext");
            }
            showNext(id, segundaImagen, primerImagen);
            let segundaImg = id;
            darVuelta(segundaImg,id);
        }

    }
}

/*        vuelve a la default las imagenes que ya tienen un src seteado con la img del array        
 *        @param  segundaImg -  primerImagen null
 *
 */
function darVuelta(segundaImg,id) {
    let backImg = "img/backImg.jpg";
    $("#" + primerImagen.id).find(':first-child').attr("src", backImg); //vuelta 1er imagen
    $("#" + segundaImg).find(':first-child').attr("src", backImg); //vuelta 2da imagen
    $("#" + primerImagen.id).removeClass("mirando");
    $("#" + segundaImg).removeClass("mirando").delay(2000).fadeIn();
    borrarIDsPrimerSegundaImagenNull(primerImagen,segundaImagen,id);
}

/*        trae el atributo ID del Figure, lo compara con el Index del array arboles
 *     donde esta el src que le corresponde, cambiando la imagen de default.
 *        @param  -  return id
 */
function verCarta() {
    var id = $(this).attr("id");
    $(this).find(':first-child').attr("src", arboles[id]); 
    $(this).addClass("mirando");//    
    chequearCartas(id);
}

/*        cambia los index del contenido de un array
 *        @param array  -  return array(con el mismo contenido en distinto index)
 */
function mezclarArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
$('figure').on('click', verCarta);


mezclarArray(arboles);
voltarCartas();