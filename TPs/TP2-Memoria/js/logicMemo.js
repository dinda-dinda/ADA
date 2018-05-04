var arrArboles = [
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

function voltarCartas() {
    let backImg = "img/backImg.jpg";
    $('img').attr("src", backImg);
}

function chequearCartas() {
    let id = $(this).attr("id");
    $(this).find(':first-child').attr("src", arrArboles[id]);

    if (primerImagen.imagen == null) {
        primerImagen.imagen = arrArboles[id]; //pongo src en objeto primerIm .imagen index-array
        primerImagen.id = id; //me guardo el id del figure
    } else {
        if (primerImagen.imagen == arrArboles[id] &&
            primerImagen.id != id) { //comparo
            $(this).off(); //quito el evento
            $("#" + primerImagen.id).off(); //quito evento ;1era imagen
            alert("SON IGUALES");
      
        } else {
            let backImg = "img/backImg.jpg";
            $("#" + primerImagen.id).attr("src", backImg);
            $(this).attr("src", backImg);
        }
        primerImagen.imagen = null;
        primerImagen.id = null;
    }
}




function cambiarImg() {
    let id = $(this).attr("id");
    $(this).find(':first-child').attr("src", arrArboles[id]);

}


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

$('figure').on('click', chequearCartas);
mezclarArray(arrArboles);
voltarCartas();