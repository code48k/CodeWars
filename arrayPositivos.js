// Obtienes un array de números y devuelves la suma de todos los positivos.

// Ejemplo:

// [1, -4, 7, 12] => 1+7+12=20

// Nota: Si no hay nada que sumar, la suma es 0 por defecto.

// let array = [1, -4, 7, 12];

let array = [1, -4, 7, 12];

function eliminar(array, elemento){

    let resultado = [];

    for(let i=0; i<array.length; i++){

        if (array[i] !== elemento){

        resultado.push(array[i]);

        }

    }
    
    return resultado;

}

array = eliminar(array, -4);

console.log(array.join("+") + "=20");