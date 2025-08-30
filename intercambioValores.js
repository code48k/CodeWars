// Dado un conjunto de números, devuelve el inverso aditivo de cada uno. Los positivos se convierten en negativos, y los negativos en positivos.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// Puede asumir que todos los valores son enteros. No modifique el array de entrada.

function devuelvePos1(){

let myArray1 = [1, 2, 3, 4, 5];

let empty1 = [];

for (let i=0; i<myArray1.length; i++){

    empty1 += myArray1[i];

    console.log(`${empty1 = -myArray1[i]}`);

}

}

devuelvePos1();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

const devuelvePos2 = function(){

let myArray2 = [1, -2, 3, -4, 5];

let empty2 = [];

for (let i=0; i<myArray2.length; i++){

    empty2 += myArray2[i];

    console.log(`${empty2 = -myArray2[i]}`);

}

}

devuelvePos2();