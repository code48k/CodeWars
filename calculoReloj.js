// El reloj muestra h horas, m minutos y s segundos después de la medianoche.

// Tu tarea consiste en escribir una función que devuelva el tiempo transcurrido desde la medianoche en milisegundos.

function calculoReloj(h, m, s){ // DECLARAMOS UNA FUNCIÓN Y LE ASIGNAMOS TRES PARAMETROS QUE SON '(h, m, s)'.

    let calculo = (h * 60 * 60 + m * 60 + s) * 1000; // EN ESTA VARIABLE CALCULAMOS UNA HORA EN MILISEGUNDOS.

    return calculo; // RETORNAMOS EL VALOR DE LA VARIABLE 'calculo', PARA SACAR ESTE VALOR, FUERA DE LA FUNCIÓN.

}

let calculo = calculoReloj(1, 0, 0); // DECLARAMOS UNA VARIABLE 'calculo', Y LLAMAMOS A ESA FUNCIÓN 'calculoReloj(1, 0, 0)'. PARA QUE SE EJECUTE Y REALIZE LOS CALCULOS DE UNA HORA EN MILESEGUNDOS.
console.log(calculo); // IMPRIMIMOS POR CONSOLA LA VARIABLE 'calculo'.