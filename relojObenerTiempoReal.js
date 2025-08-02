// El reloj muestra h horas, m minutos y s segundos después de la medianoche.

// Tu tarea consiste en escribir una función que devuelva el tiempo transcurrido desde la medianoche en milisegundos.

function milisegundos(h, m, s){

    let calculo = (h * 60 * 60 + m * 60 + s) * 1000;

    return calculo;

}

console.log(milisegundos(1, 0, 0));