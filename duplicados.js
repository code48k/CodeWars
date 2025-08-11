// Dado un array de enteros, devuelve un nuevo array con cada valor duplicado.

// Por ejemplo:

// [1, 2, 3] --> [2, 4, 6]

let vacio = []; // DECLARAMOS E INICIAMOS UNA VARIABLE QUE ES CONVERTIDO EN UNA COLLECCIÓN DE DATOS, LLAMADAS 'array", PERO EN ESTE CASO, ESTÁ VACIO.
let array = [1, 2, 3]; // DECLARAMOS E INICIAMOS UNA VARIABLE QUE ES CONVERTIDO EN UNA COLLECCIÓN DE DATOS, LLAMADAS 'array', PERO ESTA LLENO CON LOS VALORES [1, 2, 3];.

function duplicado(){ // DECLARACIÓN DE UNA FUNCIÓN PARA EJECUTAR...

    for (numero of array){ // 'for...of' RECORRE VALORES DIRECTAMENTE (COMO EL CONTENIDO REAL DE UN ARRAY.

        vacio.push(numero * 2); // AQUÍ CALCULAMOS LOS VALORES AÑADIDOS A ESE 'array', Y LO MULTIMPLICAMOS * 2, PARA QUE DE RESULTADO [2, 4, 6];

    }

}

duplicado(); // LLAMAMOS A LA FUNCIÓN PARA EJECUTARLA.
console.log(vacio); // IMPRIMIMOS POR CONSOLA EL ARRAY, PERO SE CONVIERTE DUPLICADO EN NÚMEROS PARES.