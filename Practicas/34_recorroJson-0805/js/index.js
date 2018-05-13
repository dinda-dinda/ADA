//AJAX
$.ajax({
        method: "GET", //EN MAYUS
        url: "https://jsonplaceholder.typicode.com/post/1/comments", //en string siempre
        data: "", // siempre que es post, va la propiedad data si no (GET) figura nada en el metodo va el default 					nada.		

    })

    .done(function(response) {
        console.log(response); // para ver que viene

        //aca va el codigo para mostrar
        	for (var i = response.length - 1; i >= 0; i--) {

        		let name = response[i].name;
        		let email = response[i].email;
        		let body = response[i].body;

        		$('#comentarios').append(`<h2>${name}</h2><spam>${email}</spam><p>${body}</p>`); 
        

        }

    })

