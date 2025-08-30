// Escriba una función que devuelva una cadena donde el nombre se intercambie con el apellido.

// Ejemplo (Entrada --> Salida)

// "John McClane" --> "McClane John"

function devolucionCadena(){ // INICIAMOS UNA FUNCIÓN LLAMADA devolucionCadena.

let nombre = "John McClane"; // DECLARAMOS UNA VARIABLE LLAMADA 'let nombre' CON UN VALOR "John McClane";

let reverse = nombre.split(" ").reverse().join(" ");

// .split(" ") // DIVIDE EL STRING EN UN ARRAY USANDO EL ESPACIO " " COMO SEPARADOR.

// "John McClane" → ["John", "McClane"]

// .reverse() // LE DA LA VUELTA AL ARRAY.

// ["John", "McClane"] → ["McClane", "John"]

// .join(" ") // UNE LOS ELEMENTOS DEL ARRAY EN UN NUEVO STRING, CON UN ESPACIO ENTRE ELLOS.

// ["John", "McClane"] → "John McClane"

    return reverse; // RETORNAMOS EL VALOR DE LA VARIABLE LLAMADA 'reverse'.

}

console.log(devolucionCadena()); // LLAMAS A LA FUNCIÓN, DENTRO DE LA CONSOLA.