var numeroCont =1;
var numeroFibonacci = 0;
var numeroAnterior = 0;


while (numeroCont >= 1 && numeroCont < 11) {

    if (numeroAnterior == 0) {

        console.log(numeroCont+"= "+numeroFibonacci);

        numeroFibonacci=numeroFibonacci + 1;


    } else {
        numeroFibonacci = numeroFibonacci + numeroAnterior;

        console.log(numeroCont+" = "+numeroFibonacci);
    }



    numeroAnterior = numeroFibonacci;
    console.log(numeroCont+numeroFibonacci+numeroAnterior);
    numeroCont++;

}