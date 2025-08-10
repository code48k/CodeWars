// Creé esta función para sumar cinco a cualquier número que se le pase y devolver el nuevo valor.

let a = 5; // DECLARAMOS E INICIAMOS UNA VARIABLE CON EL VALOR '5'.
let b; // DECLARAMOS UNA VARIABLE SIN NINGÚN VALOR, PARA DESPUÉS ASIGNARLE ALGÚN VALOR.

function suma(){ // DECLARACIÓN DE LA FUNCIÓN LLAMADA 'suma()'

    b = 9; // ASIGNAMOS A LA VARIABLE 'b' CON UN VALOR DE '9'.

    return a + b; // RETORNAMOS LA VARIABLE 'a + b'. DARÁ EL RESULTADO DE '14'.
}

let calculo = suma(); // AQUÍ EJECUTAMOS LA FUNCIÓN 'suma()', LA METEMOS DENTRO DE UNA VARIABLE LLAMADA 'calculo'.
console.log(calculo); // IMPRIMIMOS EL VALOR DE LA VARIABLE 'calculo' QUE ES LA SUMA TOTAL DEL CALCULO 'a + b'.