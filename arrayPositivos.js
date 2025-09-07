// Obtienes un array de números y devuelves la suma de todos los positivos.

// Ejemplo:

// [1, -4, 7, 12, -9, -8, 21, 27, 32, -45] => 1 + 7 + 12 + 21 + 27 + 32 = 100

// Nota: Si no hay nada que sumar, la suma es 0 por defecto.

let myArr = [1, -4, 7, 12, -9, -8, 21, 27, 32, -45];

function sumar(numeroArray){

    let nuevoArrNum = [];
    let sumaResultado = 0;

    for(let i=0; i<numeroArray.length; i++){

        if(numeroArray[i] >= 0){

            nuevoArrNum.push(numeroArray[i]);
        }

    }

    for(let x=0; x<nuevoArrNum.length; x++){

        sumaResultado += nuevoArrNum[x];

    }

    return nuevoArrNum.join(" + ") + " = " + sumaResultado;

}

console.log(sumar(myArr));