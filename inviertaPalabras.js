// Necesita escribir una función que invierta las palabras en una cadena dada. Las palabras siempre se separan por un solo espacio.

// Como la entrada puede tener espacios finales, también deberá ignorar los espacios innecesarios.

// Ejemplo (Entrada --> Salida)

// "Hola Mundo" --> "Hola Mundo"
// "Hola." --> "Hola."

let cadena = "¡Hola Mundo!!!";
let cadenaInvertida = "";

for (let i= cadena.length-1; i>=0; i--){

    cadenaInvertida += cadena[i];
}

console.log(cadenaInvertida);