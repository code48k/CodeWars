// Define una función que elimine los duplicados de un array de números no negativos y los devuelva como resultado.

// El orden de la secuencia debe ser el mismo.

// Ejemplos:

// Entrada -> Salida
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

let array1 = [1, 1, 2];

let borrar1 = [...new Set(array1)];

console.log(borrar1);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let array2 = [1, 2, 1, 1, 3, 2];

let borrar2 = [...new Set(array2)];

console.log(borrar2);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------