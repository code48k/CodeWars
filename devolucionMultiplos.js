// Cree una función con dos argumentos que devuelva un array de los primeros n múltiplos de x.

// Suponga que tanto el número dado como el número de veces que se contará serán números positivos mayores que 0.

// Devuelva los resultados como un array o una lista (según el lenguaje).

// Ejemplos:

// x = 1, n = 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// x = 2, n = 5 --> [2, 4, 6, 8, 10]

function devolucionMultiplos1(x, n){

    let array1 = [];

    for(let i=1; i<=n; i++){

        array1.push(x * i);

    }

    return array1;

}

let resultado1 = devolucionMultiplos1(1, 10);
console.log(resultado1);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function devolucionMultiplos2(x, n){

    let array2 = [];

    for(let i=1; i<=n; i++){

        array2.push(x * i);

    }

    return array2;

}

let resultado2 = devolucionMultiplos2(2, 5);
console.log(resultado2);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------