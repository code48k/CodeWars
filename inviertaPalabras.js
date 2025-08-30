// Necesita escribir una función que invierta las palabras en una cadena dada. Las palabras siempre se separan por un solo espacio.

// Como la entrada puede tener espacios finales, también deberá ignorar los espacios innecesarios.

// Ejemplo (Entrada --> Salida)

// "Hola Mundo" --> "Hola Mundo"
// "Hola." --> "Hola."

let cadena = "            ¡Hola,  soy      JavasCript me    converti en una sonrisa        JAJAJA!!!                     "; // AQUÍ DECLARAS LA CADENA ORIGINAL, QUE ESTÁ LLENA DE ESPACIOS EXTRAS AL INICIO, EN MEDIO Y AL FINAL.

let cadenaLimpia = cadena.trim().split(/\s+/).join(" ");

// .trim() → QUITA LOS ESPACIOS SOBRANTES AL INICIO Y AL FINAL DE LA CADENA.

// .split(/\s+/) → DIVIDE LA CADENA EN UN ARRAY DE PALABRAS, USANDO UNA EXPRESIÓN REGULAR QUE CAPTURA UNO O MÁS ESPACIOS COMO SEPARADOR.
// ESTO HACE QUE TODOS LOS ESPACIOS MÚLTIPLES SE CONVIERTAN EN DIVISIONES LIMPIAS.

// .join(" ") → UNE ESE ARRAY DE NUEVO EN UN STRING, PERO AHORA CON SOLO UN ESPACIO ENTRE PALABRAS.

let cadenaRevertida = ""; // VARIABLE VACÍA DONDE IRÁS GUARDANDO LA CADENA INVERTIDA, CARÁCTER POR CARÁCTER. 

function inversionPalabras(){ // AQUÍ CREAS UNA FUNCIÓN QUE RECORRE LA CADENA LIMPIA DE ATRÁS HACIA ADELANTE.

    for (let i = cadenaLimpia.length-1; i>=0; i--){

// EMPIEZAS EN 'cadenaLimpia.length-1' (EL ÚLTIMO ÍNDICE DE LA CADENA).
// VAS RESTANDO i-- EN CADA VUELTA.

        cadenaRevertida += cadenaLimpia[i];

// CADA LETRA QUE ENCUENTRAS LA VAS CONCATENANDO (+=) EN 'cadenaRevertida'.

    }

}

inversionPalabras(); // LLAMAS A LA FUNCIÓN Y MUESTRAS EL RESULTADO.

console.log(cadenaRevertida); // IMPRIMIMOS POR CONSOLA LA VARIABLE LLAMADA 'cadenaRevertida' PARA MOSTRA EL RESULTADO.