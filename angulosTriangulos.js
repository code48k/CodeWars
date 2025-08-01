// Se te dan dos ángulos interiores (en grados) de un triángulo.

// Escribe una función que devuelva el tercero.

// Nota: Solo se probarán números enteros positivos.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {

    let resultado = 180 - (a + b);

    return resultado;

}

let result = otherAngle(90, 90);

console.log(result);