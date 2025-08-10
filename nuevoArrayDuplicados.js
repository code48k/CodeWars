// Dado un array de enteros, devuelve un nuevo array con cada valor duplicado.

// Por ejemplo:

// [1, 2, 3] --> [2, 4, 6]

function nuevoArrayDuplicado(a, b){

    let miArray = [];

    for (let i=1; i<=b; i++){

        miArray.push(a * i * 2);
    }

    return miArray;
}

let resultado = nuevoArrayDuplicado(1, 3);
console.log(resultado);