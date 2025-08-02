// En esta kata, crearás una función que recibe una lista y devuelve una lista con el orden inverso.

// Ejemplos (Entrada -> Salida)
// * [1, 2, 3, 4] -> [4, 3, 2, 1]
// * [9, 2, 0, 7] -> [7, 0, 2, 9]

let array1;
let vacio1;

function recibeDevuelveLista1(){

    array1 = [1, 2, 3, 4];

    vacio1 = [];
    
    for (let i=0; i>array1.length; i--){

        vacio1.push(Number(array1[i]));

    }

    return array1;
}

let resultado1 = recibeDevuelveLista1();

console.log(resultado1);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let array2;
let vacio2;

function recibeDevuelveLista2(){

    array2 = [9, 2, 0, 7];

    vacio2 = [];
    
    for (let i=0; i>array2.length; i--){

        vacio2.push(Number(array2[i]));

    }

    return array2;
}

resultado2 = recibeDevuelveLista2();

console.log(resultado2);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------