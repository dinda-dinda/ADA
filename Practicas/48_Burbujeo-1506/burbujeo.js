function burbujeo(numerosMezclados) {

    var n = numerosMezclados.length;
    
    for (var i = 0; i < numerosMezclados.length; i++) {
        for (var z = 0; z < n; z++) {

            if (numerosMezclados[z] > numerosMezclados[z + 1]) {
                var mayor = numerosMezclados[z];
                numerosMezclados[z] = numerosMezclados[z + 1];
                numerosMezclados[z + 1] = mayor;

                console.log("menor = " + numerosMezclados[z] + "mayor = " + numerosMezclados[z + 1]);
            } else {
                console.log("menor = " + numerosMezclados[z] + "mayor = " + numerosMezclados[z + 1]);
            }
        }
        n--;

        console.log("numerosMezclados =" + numerosMezclados);

    }
}

let array = [1, 8, 7, 14, 5, 6, 3, 9, 2];

burbujeo(array);