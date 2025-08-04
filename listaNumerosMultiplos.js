// En este sencillo ejercicio, escribirás una función que toma dos enteros: n y límite; y devuelve una lista de múltiplos de n hasta, e incluso, límite.

// Se garantiza que n > 0 y límite >= n.

// Por ejemplo, si los parámetros pasados son (2, 6), la función debería devolver [2, 4, 6], ya que 2, 4 y 6 son múltiplos de 2 hasta 6.

// Ejemplos
// n = 2; límite = 6 --> [2, 4, 6]
// n = 2; límite = 5 --> [2, 4]

function numeroMultiplos(limite){

    const multiplo = [];

    for(let i=1; i<=limite; i++){

        if (i % 2 === 0){

        multiplo.push(i);

        }
    }

    return multiplo;
    
}

let limite = 20;
let resultado = numeroMultiplos(limite);
console.log(`Multiplos de 2 hasta ${limite}: ${resultado}`);