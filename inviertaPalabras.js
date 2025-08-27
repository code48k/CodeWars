// Necesita escribir una función que invierta las palabras en una cadena dada. Las palabras siempre se separan por un solo espacio.

// Como la entrada puede tener espacios finales, también deberá ignorar los espacios innecesarios.

// Ejemplo (Entrada --> Salida)

// "Hola Mundo" --> "Hola Mundo"
// "Hola." --> "Hola."

let cadena = "            ¡Hola,  soy      JavasCript me    converti en una sonrisa        JAJAJA!!!                     ";
let cadenaLimpia = cadena.trim().split(/\s+/).join(" ");
let cadenaRevertida = "";

function inversionPalabras(){

    for (let i = cadenaLimpia.length-1; i>=0; i--){

        cadenaRevertida += cadenaLimpia[i];

    }

}

inversionPalabras();

console.log(cadenaRevertida);