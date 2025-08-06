// Su tarea consiste en crear una función que realice cuatro operaciones matemáticas básicas.

// La función debe tomar tres argumentos: operación(cadena/carácter), valor1(número), valor2(número).
// La función debe devolver el resultado de números después de aplicar la operación elegida.

// Ejemplos(Operador, valor1, valor2) --> salida
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function calculadora(operadores, valor1, valor2){

    switch(operadores){

        case "+":
            return valor1 + valor2;
        case "-":
            return valor1 - valor2;
        case "*":
            return valor1 * valor2;
        case "/":
            return valor1 / valor2;
        default:
            return "Operador no válido";
    }
}

console.log(calculadora('+', 4, 7));
console.log(calculadora('-', 15, 18));
console.log(calculadora('*', 5, 5));
console.log(calculadora('/', 49, 7));