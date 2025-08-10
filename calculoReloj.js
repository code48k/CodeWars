// El reloj muestra h horas, m minutos y s segundos después de la medianoche.

// Tu tarea consiste en escribir una función que devuelva el tiempo transcurrido desde la medianoche en milisegundos.

function calculoReloj(h, m, s){ // DECLARAMOS LA FUNCIÓN Y LE ASIGNAMOS TRES PARAMETROS QUE SON '(h, m, s)'.

    let calculo = ((h * 60 * 60 + m * 60 + s) * 1000); // EN ESTA VARIABLE HACEMOS EL CALCULO DE UNA HORA EN MILISEGUNDOS.

    return calculo; // RETORNAMOS EL VALOR DE LA VARIABLE 'calculo', PARA USARLA DESPUÉS.

}

let calculo = calculoReloj(1, 0, 0); // DECLARAMOS UNA VARIABLE 'calculo', Y LLAMAMOS A ESA FUNCIÓN 'calculoReloj(1, 0, 0)', PARA EJECUTARLA DESPUÉS, QUE REALIZE LOS CALCULO ATRAVÉS DE LOS ARGUMENTOS ASIGNADOS, CALCULARÁ SOLO UNA HORA EN MILISEGUNDOS.
console.log(calculo); // IMPRIMIMOS POR CONSOLA LA VARIABLE 'calculo'.