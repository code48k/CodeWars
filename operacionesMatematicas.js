// Su tarea consiste en crear una función que realice cuatro operaciones matemáticas básicas.

// La función debe tomar tres argumentos: operación(cadena/carácter), valor1(número), valor2(número).
// La función debe devolver el resultado de números después de aplicar la operación elegida.

// Ejemplos(Operador, valor1, valor2) --> salida
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function calcular(operador, valor1, valor2){

    switch (operador){
        case "+":
            return valor1 + valor2;
        case "-":
            return valor1 - valor2;
        case "*":
            return valor1 * valor2;
        case "/":
            return valor1 / valor2;
        default:
            return "Error de calculo";
        
    }

}

console.log(calcular('+', 4, 7)); // 11
console.log(calcular('-', 15, 18)); // -3
console.log(calcular('*', 5, 5)); // 25
console.log(calcular('/', 49, 7)); // 7