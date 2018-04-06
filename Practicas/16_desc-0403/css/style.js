/*
Dado un monto total, calcular el valor del descuento
que se aplicara y el monto total a pagar.

-Si el monto es menor a 500 no se realiza descuento,
-Si el monto esta entre 501 y 1000 se realiza un 10%,
-Si el monto esta entre 1001 y 1500 se realiza un 15%,
-Si el monto es mayor a 1500 se realiza un 20%.

Adicionalmente por pago con tarjeta de credito en 
3 pagos recargo del 5%
6 pagos recargo del 10%
*/

var monto;
var descuento: 0;
var montoconDesc;

var cuotas=0;
var valorDesc;

var tarjeta =false;
var recargo;
var montoconRec;

monto = 450;

  /*DESCUENTOS*/

if (monto <= 500) {
    descuento = 0;

}
if (monto > 500) && (monto <= 1000) {
    descuento = 10;

}
if (monto >= 1001) && (monto < 1500) {
    descuento = 15;

}
if (monto > 1500) {
    descuento = 20;

}

if (descuento != 0) {
    valorDesc = (monto * descuento) / 100;
} else{ valorDesc=0;}

    montoconDesc = monto - valorDesc;

  /*TARJETA!*/

if (tarjeta = true && cuotas == 3) {
    recargo = 5;

} else if (tarjeta = true && cuotas >= 6) {
    recargo = 10;

}  else (tarjeta=false || cuotas< 3 ) {
    recargo = 0;
}

if (recargo!=0) {

valorRec =  (montoconDesc *recargo)/100;

} else { 

valorRec=0;
}

montoconRec = montoconDesc + valorRec;

/*montos finales*/

montoFinal = monto+valorRec-valorDesc;

console.log("Su recargo por pago de tarjeta de "+cuotas+ " : " + recargo + "% = -$"+valorDesc);

console.log("Su descuento es:" + descuento + "% = -$"+valorDesc);
console.log("Su recargo por pago de tarjeta de "+cuotas+ " : " + recargo + "% = -$"+valorDesc);


console.log("Valor a pagar $"+montoFinal)
