// Necesitamos una función que pueda transformar un número (entero) en una cadena.

// ¿Qué maneras de lograrlo conoces?

// Ejemplos (entrada --> salida):

// 123 --> "123"
// 999 --> "999"
// -100 --> "-100"

let num1; // DECLARAMOS UNA VARIABLE LLAMADA 'num1'.
let num2; // DECLARAMOS UNA VARIABLE LLAMADA 'num2'.
let num3; // DECLARAMOS UNA VARIABLE LLAMADA 'num3'.

function alterarNumeros(){ // DECLARAMOS UNA FUNCIÓN.

    num1 = String(123); // CONVERTIMOS UNA VARIABLE NUMÉRICA, A UNA CADENA DE TEXTO 'String(123)'.
    num2 = String(999); // CONVERTIMOS UNA VARIABLE NUMÉRICA, A UNA CADENA DE TEXTO 'String(999)'.
    num3 = String(-100); // CONVERTIMOS UNA VARIABLE NUMÉRICA, A UNA CADENA DE TEXTO 'String(-100)'.

}

alterarNumeros(); // EJECUTAMOS LA FUNCIÓN alterarNumeros();.
console.log(num1); // IMPRIMIMOS POR CONSOLA LA VARIABLE 'num1'.
console.log(typeof num1); // COMPROBAMOS QUE TIPO DE VARIABLE.
console.log(num2); // IMPRIMIMOS POR CONSOLA LA VARIABLE 'num2'.
console.log(typeof num2); // COMPROBAMOS QUE TIPO DE VARIABLE.
console.log(num3); // IMPRIMIMOS POR CONSOLA LA VARIABLE 'num3'.
console.log(typeof num3); // COMPROBAMOS QUE TIPO DE VARIABLE. 