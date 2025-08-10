// Se te dan dos ángulos interiores (en grados) de un triángulo.

// Escribe una función que devuelva el tercero.

// Nota: Solo se probarán números enteros positivos.

// https://en.wikipedia.org/wiki/Triangle

let angulo1 = 45; // ÁNGULO DE 45º.
let angulo2 = 45; // ÁNGULO DE 45º.
let sumaTotal = 180; // TENEMOS QUE CALCULARLO, SABEMOS QUE LA SUMA DE TODOS LOS ÁNGULOS TIENE QUE DAR EN LA SUMA 180º, POR LO CUAL, EL OTRO SERÍA 90º Y SERÍA UN TRIÁNGULO EQUILÁTERO. 

function triangulo(a, b){ // // DECLARAMOS UNA FUNCIÓN, Y ASIGNAMOS LOS DOS PARAMETROS QUE VIENE DE LA LLAMADA DE LA FUNCIÓN.

    let calculo = sumaTotal - (a + b); // 180º SERÍA EL TOTAL DE LA SUMA DE LOS ÁNGULOS DEL TRIÁNGULO, 'a + b' SON DE 90º, EL OTRO TENDRÍA OTROS 90º PARA FORMAR UN TRIÁNGULO EQUILÁTERO.

    return calculo; // RETORNAMOS EL VALOR DE LA FUNCIÓN, PARA DESPUÉS EJECUTARLO EN LLAMADA 'let calculo = triangulo(45, 45);'.

}

let calculo = triangulo(45, 45); // AQUÍ PASAMOS DOS ARGUMENTOS DE 45º CADA UNO DE ELLOS, TENEMOS DOS ANGULOS DEL TRIÁNGULO. ¿CÚAL SERÍA EL OTRO? MUY FÁCIL...
console.log(calculo); // IMPRIMIMOS POR CONSOLA LA VARIABLE 'calculo'.

