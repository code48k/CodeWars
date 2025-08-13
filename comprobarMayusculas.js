// ¿Está la cadena en mayúsculas?

// Tarea

// Crear un método para comprobar si la cadena está en MAYÚSCULAS.

// Ejemplos (entrada -> salida)

// "c" -> Falso

// "C" -> Verdadero

// "Hola, soy Donald" -> Falso

// "HOLA, soy Donald" -> Verdadero

// "ACSKLDFJSgSKLDFJSKLDFJ" -> Falso

// "ACSKLDFJSGSKLDFJSKLDFJ" -> Verdadero

// En este Kata, se dice que una cadena está en MAYÚSCULAS cuando no contiene ninguna letra minúscula, por lo que cualquier cadena que no contenga ninguna letra se considera trivialmente en MAYÚSCULAS.

const setencia1 = "c";
const palabra1 = "C"; // 'true'

console.log(setencia1.toUpperCase(palabra1).includes(palabra1)); // EL MÉTODO 'incluse()' DETERMINA SI UNA CADENA DE TEXTO PUEDE SER ENCONTRADA DENTRO DE OTRA CADENA DE TEXTO DEVOLVIENDO 'true' O 'false'. 'toUpperCase() ES UN MÉTODO PARA CONVERTIR LAS MINUSCULAS EN MAYUSCULAS.

// ----------------------------------------------------------------------------------------------------------------------------------------------------

const setencia2 = "Hola, soy Donald";
const palabra2 = "HOLA, soy Donald"; // 'false'

console.log(setencia2.toUpperCase(palabra2).includes(palabra2));

// ----------------------------------------------------------------------------------------------------------------------------------------------------

const setencia3 = "ACSKLDFJSgSKLDFJSKLDFJ";
const palabra3 = "ACSKLDFJSGSKLDFJSKLDFJ"; // 'true'

console.log(setencia3.toUpperCase(palabra3).includes(palabra3));

// ----------------------------------------------------------------------------------------------------------------------------------------------------