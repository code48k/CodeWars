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

function comprobar(){

    let texto = "HOLA, soy Donald";

    if (texto == "HOLA, soy Donald"){

        console.log("Verdadero");

    }

    else{

        console.log("Falso");

    }

}

let result = comprobar();