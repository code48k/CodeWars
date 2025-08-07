// Define una función que elimine los duplicados de un array de números no negativos y los devuelva como resultado.

// El orden de la secuencia debe ser el mismo.

// Ejemplos:

// Entrada -> Salida
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function eliminarValoresDuplicados(){

    let array = [1, 2, 1, 1, 3, 2];

    let resultado = [...new Set(array)];

    return resultado;

}

let resultado = eliminarValoresDuplicados();

console.log(resultado);