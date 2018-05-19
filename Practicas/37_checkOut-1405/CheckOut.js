class CheckOut {

    constructor(numeroCompra, cuotas = "", envio = "") {
        this._numeroCompra;
        this._subtotal = subtotal;
        this._cuotas = 0;
        this._envio = false;
        this._financiacion = false;
        this._descuento = [];
    }

    static calcularDescuento(descuento) {		//static para llamarlo sin crear un objeto de esa clase
    	let valor = this._subtotal*descuento/100;
    	return valor;
    	// if(this._subtotal>1000){} by mecha

    }

    costoFinanciacion(fin3="1.03", fin6="1.15", fin12="1.42") {

    	let financiacion3= fin3;
    	let financiacion6= fin6;
    	let financiacion12= fin12;
 
    	if( this._cuotas == "" ){
   	
    	this._financiacion = 0;
    	
    	}else{

    	if (this._cuotas >= 3 && this._cuotas < 6){
    		let costoFinanciacion = this._subtotal*financiacion3;
    		this._financiacion = costoFinanciacion;

    	} else if (this._cuotas >= 6 && this._cuotas < 12){
    		let costoFinanciacion = this._subtotal*financiacion6;
    		this._financiacion = costoFinanciacion;

 		} else if (this._cuotas >=12){
    		let costoFinanciacion = this._subtotal*financiacion12;
    		this._financiacion = costoFinanciacion;
        }
 
    }
    costoEnvio(){
    	if(this._envio==true){

    	}
		let costoEnvio = this._costoEnvio;
	}
}