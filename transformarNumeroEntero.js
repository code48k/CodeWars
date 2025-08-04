// Necesitamos una función que pueda transformar un número (entero) en una cadena.

// ¿Qué maneras de lograrlo conoces?

// Ejemplos (entrada --> salida):

// 123 --> "123"
// 999 --> "999"
// -100 --> "-100"

let num1;
let num2;
let num3;

function transformarNumero(){

    num1 = String(123);
    num2 = String(999);
    num3 = String(-100);

}

transformarNumero();

console.log(`EL número num1 es pasado a string ${num1}
EL número num1 es pasado a string ${num2}
EL número num1 es pasado a string ${num3}`);