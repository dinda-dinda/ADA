exports.signo = function(m,d){

	let day = parseInt(d);
	let month = parseInt(m);
/*	if( day<"21"&&month=="1"){
		console.log("hello! soy de Capricornio");
	}else{
		console.log("no ando");
		};
}*/
  switch(m){

		case '1': 
			if( day >= 20){

				 console.log( "sos de Acuario" ); //lo muestra en 

				return "Acuario";
			
			}else{
				console.log( "sos de Capricornio" );
				return "Capricornio";
			}

		break;

		case '2': 
			if( day >= 21){

				return "Piscis";
			
			}else{

				return "Acuario";
			}

		break;

		case '3': 
			if( day >= 21){

				return "Aries";
			
			}else{

				return "Piscis";
			}

		break;

		case '4': 
			if( day >= 21){

				return "Tauro";
			
			}else{

				return "Aries";
			}

		break;

		case '5': 
			if( day >= 21){

				return "Geminis";
			
			}else{

				return "Tauro";
			}

		break;

		case '6': 
			if( day >= 21){

				return "Cancer";
			
			}else{

				return "Geminis";
			}

		break;

		case '7': 
			if( day >= 21){

				return "Leo";
			
			}else{

				return "Cancer";
			}

		break;

		case '8': 
			if( day >= 21){

				return "Virgo";
			
			}else{

				return "Leo";
			}

		break;

		case '9': 
			if( day >= 21){

				return "Libra";
			
			}else{

				return "Virgo";
			}

		break;

		case '10': 
			if( day >= 21){

				return "Escorpio";
			
			}else{

				return "Libra";
			}

		break;

		case '11': 
			if( day >= 21){

				return "Sagitario";
			
			}else{

				return "Escorpio";
			}

		break;
		case '12': 
			if( day >= 21){
				console.log( "sos de Acuario" );
				return "Capricornio";
			
			}else{

				return "Sagitario";
			}

		break;
	};
};