// Nota: Esta kata está inspirada en "¡Convertir un número en una cadena!". Pruébala también.

// Descripción
// Necesitamos una función que pueda transformar una cadena en un número. ¿Qué maneras de lograrlo conoces?

// Nota: No te preocupes, todas las entradas serán cadenas, y cada cadena es una representación perfectamente válida de un número entero.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

let vacio = [];

function convertirNumStr1234(){

    let array = [1, 2, 3, 4];

    for (let i=0; i<array.length; i++){

        vacio.push(String(array[i]));
    
    }

}

convertirNumStr1234();

console.log(vacio);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

vacio = [];

function convertirNumStr605(){

    let array = [6, 0, 5];

    for (let i=0; i<array.length; i++){

    vacio.push(String(array[i]));

    }

}

convertirNumStr605();

console.log(vacio);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

vacio = [];

function convertirNumStr1405(){

    let array = [6, 0, 5];

    for (let i=0; i<array.length; i++){

    vacio.push(String(array[i]));

    }

}

convertirNumStr1405();

console.log(vacio);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

vacio = [];

function convertirNumStr7(){

    let array = [-7];

    for (let i=0; i<array.length; i++){

    vacio.push(String(array[i]));

    }

}

convertirNumStr7();

console.log(vacio);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------