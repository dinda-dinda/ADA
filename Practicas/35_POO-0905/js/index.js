$('#ejes').hide();

$('#tipo').on('change',e=> {

    let option = $('#tipo').val();
    if (option == "2") {
        $('#ejes').show();
    }
})

function getInfo(e) {
    e.preventDefault();

    let patente = $('#patente').val();
    let modelo = $('#modelo').val();
    let anio = $('#anio').val();

    let vehiculo;
    let tipo = $('#tipo').val();

    switch (tipo) {
        case '1':
            vehiculo = new Auto(patente);
            console.log("Auto: "+vehiculo);
            break;


        case '2':
            let ejes = $('#ejes').val();
            vehiculo = new Camion(patente, ejes);
            console.log("Camion: "+vehiculo);
            break;

        default:
             alert("Elija una opcion valida");
             break;

    }


    

}
/*
$(document).on('click','button',e=>{
e.preventDefault();
getPatente();
})
*/

$('#submit').on('click', getInfo);
//   var padre = $(this).parent();