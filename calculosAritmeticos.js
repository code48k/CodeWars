// Su tarea consiste en crear una función que realice cuatro operaciones matemáticas básicas.

// La función debe tomar tres argumentos: operación(cadena/carácter), valor1(número), valor2(número).
// La función debe devolver el resultado de números después de aplicar la operación elegida.

// Ejemplos(Operador, valor1, valor2) --> salida
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function calculos(operador, valor1, valor2){ // DECLARAMOS UNA FUNCIÓN CON TRES PARAMETROS '(operador, valor1, valor2'.

    switch(operador){ // PALABRA CLAVE QUE ABRE LA ESTRUCTURA Y DEFINE QUÉ VALOR VAS A EVALUAR. 
        case "+": // CADA OPCIÓN POSIBLE; SI LA VARIABLE COINCIDE CON EL VALOR DEL 'case "+"', EJECUTA ESE BLOQUE.
            return valor1 + valor2; // OPERACIÓN PARA REALIZAR LA SUMA.
        case "-": // CADA OPCIÓN POSIBLE; SI LA VARIABLE COINCIDE CON EL VALOR DEL 'case "-"', EJECUTA ESE BLOQUE.
            return valor1 - valor2; // OPERACIÓN PARA REALIZAR LA RESTA.
        case "*": // CADA OPCIÓN POSIBLE; SI LA VARIABLE COINCIDE CON EL VALOR DEL 'case "*"', EJECUTA ESE BLOQUE.
            return valor1 * valor2; // OPERACIÓN PARA REALIZAR LA MULTIPLICACIÓN.
        case "/": // CADA OPCIÓN POSIBLE; SI LA VARIABLE COINCIDE CON EL VALOR DEL 'case "/"', EJECUTA ESE BLOQUE.
            return valor1 / valor2; // OPERACIÓN PARA REALIZAR LA DIVISIÓN.
        default: // EL PLAN B, LO QUE PASA SI NADA COINCIDE.
            return "Introduce un número correcto";
    }
    
}

console.log(calculos('+', 4, 7)); // ASIGNAMOS LOS ARGUMENTOS '(operador, valor1, valor2)', PARA LUEGO PASARLOS A LA FUNCIÓN COMO PARAMETROS, EL RESULTADO SERÍA 11.
console.log(calculos('-', 15, 18)); // ASIGNAMOS LOS ARGUMENTOS '(operador, valor1, valor2)', PARA LUEGO PASARLOS A LA FUNCIÓN COMO PARAMETROS, EL RESULTADO SERÍA -3.
console.log(calculos('*', 5, 5)); // ASIGNAMOS LOS ARGUMENTOS '(operador, valor1, valor2)', PARA LUEGO PASARLOS A LA FUNCIÓN COMO PARAMETROS, EL RESULTADO SERÍA 25.
console.log(calculos('/', 49, 7)); // ASIGNAMOS LOS ARGUMENTOS '(operador, valor1, valor2)', PARA LUEGO PASARLOS A LA FUNCIÓN COMO PARAMETROS, EL RESULTADO SERÍA 7.