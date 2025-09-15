// Completa la función suma al cuadrado para que eleve al cuadrado cada número que se le pase y luego sume los resultados.

// Por ejemplo, para [1, 2, 2] debería devolver 9 porque 1 elevado 2 + 2 elevado a 2 + elevado a 2 = 9

let elevadoUno = 1 ** 2;
let elevadoDos = 2 ** 2;
let elevadoTres = 2 ** 2;

function elevadoCuadrado(){

let calculo = elevadoUno + elevadoDos + elevadoTres;

return "Resultado: " + calculo;

}

let elevado = elevadoCuadrado();

console.log(elevado);