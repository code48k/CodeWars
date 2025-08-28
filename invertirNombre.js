// Escriba una función que devuelva una cadena donde el nombre se intercambie con el apellido.

// Ejemplo (Entrada --> Salida)

// "John McClane" --> "McClane John"

function devolucionCadena(){

let nombre = "John McClane";

let reverse = nombre.split(" ").reverse().join(" ");

    return reverse;
}

console.log(devolucionCadena());