function palindrome(palindromoQuizas){

let mayusculas = palindromoQuizas.toUpperCase();
console.log("palindrome.toUpperCase : "+mayusculas);

var letters = /[a-z]/gi;
var letrasSueltas = mayusculas.match(letters);
if (letrasSueltas) {
console.log("cantidad de letras"+letrasSueltas.length);
}
var stringDerecho = letrasSueltas.join();
console.log("palindrome.letters : "+c);

var letrasSueltasReves = letrasSueltas.reverse();
console.log("palindrome.reverse : "+letrasSueltasReves);
var stringReves = letrasSueltasReves.join();

if(stringReves===stringDerecho){
	console.log("c'est un palindrome");
	return true;
}else{
	console.log("ce n'est pas un palindrome");
	return false;
}
}

palindrome("amar da drama");
