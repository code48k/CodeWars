// Recibirá una matriz a y un valor x. Solo necesita comprobar si la matriz proporcionada contiene el valor.

// a puede contener números o cadenas. x puede ser cualquiera de los dos.

// Devuelve verdadero si la matriz contiene el valor, falso en caso contrario.

function obtenerValor(){

    let array = [1, 5, 8, 12, 22, 30, 33, 41, 45, 55, 78, 99];
    let x = 5;

    for (let i=0; i<array.length; i++){

        if(array[i] === x){

            return true;

        }

    }

    return false;

}

let resultado = obtenerValor();
console.log(resultado);  