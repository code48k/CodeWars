// El reloj muestra h horas, m minutos y s segundos después de la medianoche.

// Tu tarea consiste en escribir una función que devuelva el tiempo transcurrido desde la medianoche en milisegundos.

function calculoReloj(h, m, s){

    let calcular = (h * 60 * 60 + m * 60 + s) * 1000;

    return calcular;
}

console.log(calculoReloj(1, 0, 0));