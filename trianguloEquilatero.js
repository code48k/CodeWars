// Se te dan dos ángulos interiores (en grados) de un triángulo.

// Escribe una función que devuelva el tercero.

// Nota: Solo se probarán números enteros positivos.

// https://en.wikipedia.org/wiki/Triangle

let angulo1 = 45; // ANGULO DE 45 DE GRADOS
let angulo2 = 45; // ANGULO DE 45 DE GRADOS
let angulo3; // TENEMOS QUE CALCULARLO, SABEMOS QUE LA SUMA DE TODOS LOS ANGULOS TIENE QUE DAR EN LA SUMA 180º, POR LO CUAL EL OTRO SERÍA 90º Y ES UN TRIANGULO EQUILÁTERO. 

function triangulo(a, b){

    let calculo = 180 - (a + b);

    return calculo;

}

let calculo = triangulo(45, 45);
console.log(calculo);

