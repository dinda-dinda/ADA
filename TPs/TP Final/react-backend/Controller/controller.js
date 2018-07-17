const self = {}

controlador.busqueda = function(req,res,next){

	    var apiMercadoLibre = fetch('https://api.mercadolibre.com/sites/MLA/search?q=​:query')
	}
    
    var nuevaPromesa = apiMercadoLibre.then( function(response){
      return response.json()
    	})

    nuevaPromesa.then(function (bodyTransformado) {
      bodyTransformado.forEach(s => document.getElementbyId('galeriaBuscador').append(<p>{s}</p>)
    		
  		})