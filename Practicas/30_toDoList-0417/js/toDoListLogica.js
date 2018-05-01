//Array de lista de tareas
var tareas = []; //aca


/**
 *   Muestra en el html un texto de tarea p 
 *  ingresado el imput y un checkbox si no hay ningun comment crea una UL
 *   @params 
 *   void 
 **/
function crearTarea() {
    console.log("crearTarea" + tareas.length);
    if (document.getElementById("tareaNueva").value == "" ||
        document.getElementById("tareaNueva").value == null) {
        alert("Texto vacio");
    } else {
        var listaTareas = document.getElementById('listaTareas');

        if (tareas.length == 0) {
            var ul = document.createElement('ul'); // la creo en el html.
            ul.setAttribute('id', 'tarea');
            ul.classList.add("ListaStyle"); //le agrego una clase a la ul    

            var li = document.createElement('li');
            var idMacht= tareas.length;

            li.setAttribute('id', tareas.length-1);
            li.classList.add("ListaStyle"); //le agrego una clase a la ul    


            /* ACA VA EL CHECK BOX!!!*/
            /*nuevo checkbox*/
            var check = document.createElement("INPUT");
            check.setAttribute("type", "checkbox");
            li.appendChild(check);

            tareas.push(document.getElementById("tareaNueva").value); //ingresar en el array el texto
            var texto = document.createElement("p");
            texto.textContent = tareas[tareas.length-1];
            li.appendChild(texto);

            /*nuevo boton de borrar tarea*/
            var trash = document.createElement("i");
            trash.innerHTML = '<i class="fa fa-trash-o"></i>';
            trash.setAttribute("type", "button");
            trash.setAttribute("data-id", tareas.length-1);
            trash.classList.add("claseTacho");
            li.appendChild(trash);


            ul.appendChild(li);
            listaTareas.appendChild(ul);

            tareaNueva.value = ""; //limpio el imput

        } else {
            publicar(listaTareas);
        }
    }
}

/**
 *   Muestra en el html las tareas ingresadas 
 *                  y un checkbox
 *   @params 
 *   void 
 **/

function publicar(misTareas) {
    console.log("publicar");
    var ul = document.getElementById('tarea');
   
    var tareaNueva = document.getElementById("tareaNueva");
    var text = tareaNueva.value;
    tareas.push(text); //ingreso al array el texto de entrada.
    /*nueva li*/

    var li = document.createElement('li');
    li.classList.add("ListaStyle"); //le agrego una clase a la list
    li.setAttribute('id',tareas.length-1);


    /*nuevo checkbox*/
    var check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    li.appendChild(check);

    /*nuevo texto de tarea*/
    var textoNewTarea = document.createElement("p");
    textoNewTarea.textContent = tareas[tareas.length - 1];
    li.appendChild(textoNewTarea);

    /*nuevo boton de borrar tarea*/
    var trash = document.createElement("i");
    trash.innerHTML = '<i class="fa fa-trash-o"></i>';
    trash.classList.add("claseTacho");
    trash.setAttribute("data-id", tareas.length-1);

    li.appendChild(trash);

    ul.appendChild(li);
    tareaNueva.value = ""; //limpio el imput


var btnTacho = document.getElementsByClassName("claseTacho");
btnTacho.addEventListener("click", eliminarTarea);
}




function eliminarTarea(){

//event.preventDefault();

//$(document).ready(function(){
        $(this).data('id').hide();
        $('#'+tareas.length).hide();
//});
}
/*
$('.borrar).on('click', function(event){

$(this).data('id');

})}*/

/*
x= btn.getAttribute('data-id'); 
li=document.getElementById(x);
lista.remove(li);

}

*/

/*/////////////////jquery en clase////////////////////*/
/*
$('#btnNuevo').on('click',function(event){
    /*me tengo que quedar con el valor del input*/
/*var t =    $('#nueva').val();

lista.push(t);
var li = '<li id="+lista.lenght+">'+t+'<button class= "borrar" data-id ='"+lista.length'>X</button></li>';
$('# to do').append(li);

})

$('.borrar').on('click',function(e){
    $(this).parent().remove();             //this esta bueno!
                                        
})



*/












var btnAgregarTarea = document.getElementById("agregarTarea"); //le agrego el listener
btnAgregarTarea.addEventListener("click", crearTarea); //programacion por eventos

var btnBorrarTareas = document.getElementById("borraTareas"); //le agrego el listener
btnBorrarTareas.addEventListener("click", limpiarTareas); //programacion por eventos

var btnTacho = document.getElementsByClassName("claseTacho");
btnTacho.addEventListener("click", eliminarTarea);
/*
event.preventDefault(); 

*/
function limpiarTareas() {
    var li = document.getElementsByTagName('li');
    console.log(li);
    var lisArray = Array.from(li);
    console.log(lisArray);
    lisArray.forEach(function(e) {
        console.log(e);
        e.value = "";
    });

}