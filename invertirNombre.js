// Escriba una función que devuelva una cadena donde el nombre se intercambie con el apellido.

// Ejemplo (Entrada --> Salida)

// "John McClane" --> "McClane John"

let nombre = "John McClane";

let reversed = nombre.split(" ").reverse().join(" ");
console.log(reversed);