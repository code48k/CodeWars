// Necesita escribir una función que invierta las palabras en una cadena dada. Las palabras siempre se separan por un solo espacio.

// Como la entrada puede tener espacios finales, también deberá ignorar los espacios innecesarios.

// Ejemplo (Entrada --> Salida)

// "Hola Mundo" --> "Hola Mundo"
// "Hola." --> "Hola."

// 1º CREAMOS UNA FUNCION
// 2º NECESITAMOS ESCRIBIR UN TEXTO EN UNA VARIABLE
// 3º NECESITAMOS INVERTIR EL TEXTO 
// 4º NECESITAMOS QUITAR LOS ESPACIOS TANTO INCIALES COMO FINALES
// 5º NECESITAMOS QUITAR ESPACIOS ENTRE PALABRAS

let cadena = "             ¡Hola,    soy     JavasCript    pero    ahora, me    converti     en JAJAJA!!!              ";
let cadenalimpia = cadena.trim().split(/\s+/).join(" ");
let cadenaRevertida = "";

function inversionStr(){

    for (let i = cadenalimpia.length-1; i>=0; i--){

        cadenaRevertida += cadenalimpia[i];

    }

}

inversionStr();

console.log(cadenaRevertida);




