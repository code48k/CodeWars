// El reloj muestra h horas, m minutos y s segundos después de la medianoche.

// Tu tarea consiste en escribir una función que devuelva el tiempo transcurrido desde la medianoche en milisegundos.

function calculoReloj(h, m, s){ // DECLARAMOS LA FUNCIÓN Y LE ASIGNAMOS TRES PARAMETROS QUE SON '(h, m, s)'.

    let calculo = (h * 60 * 60 + m * 60 + s) * 1000; // EN ESTA VARIABLE RELLENAMOS EL CALCULO DE UNA HORA EN MILISEGUNDOS.

    return calculo; // RETORNAMOS EL VALOR DE LA VARIABLE 'calculo', PARA USARLA DESPUÉS, CUANDO EJECUTEMOS LA LLAMADA 'calculoReloj(1, 0, 0)'.

}

let calculo = calculoReloj(1, 0, 0); // DECLARAMOS UNA VARIABLE 'calculo', Y LLAMAMOS A ESA FUNCIÓN 'calculoReloj(1, 0, 0)'. PARA QUE REALIZE LOS CALCULOS A TRAVÉS DE LOS ARGUMENTOS ASIGNADOS, Y CALCULE SOLO UNA HORA EN MILISEGUNDOS.
console.log(calculo); // IMPRIMIMOS POR CONSOLA LA VARIABLE 'calculo'.