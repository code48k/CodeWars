// Completa la función que toma dos enteros (a, b, donde a < b) y devuelve un array de todos los enteros entre los parámetros de entrada, incluidos ellos.

// Por ejemplo:

// a = 1;

// b = 4;

function numerosEnteros(a, b){

    let respuesta = [];

    for (let i=1; i<=b; i++){

    respuesta.push(i)

    }

    return respuesta;
}

console.log(numerosEnteros(1, 4));