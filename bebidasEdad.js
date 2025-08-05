// Los niños beben ponche.

// Los adolescentes beben Coca-Cola.

// Los adultos jóvenes beben cerveza.

// Los adultos beben whisky.

// Crea una función que reciba la edad y devuelva lo que beben.

// Reglas:

// Niños menores de 14 años.

// Adolescentes menores de 18 años.

// Jóvenes menores de 21 años.

// Adultos tienen 21 o más.

// Ejemplos: (Entrada --> Salida)

// 13 --> "beber ponche"
// 17 --> "beber Coca-Cola"
// 18 --> "beber cerveza"
// 20 --> "beber cerveza"
// 30 --> "beber whisky"

function bebidas(edad){

    if (edad < 13){

        let resultado = "Son menores de edad";
    
        return resultado;

    }

    else if (edad >= 13 && edad <= 17) {

        let resultado = "Bebemos Ponche";
    
        return resultado;

    } 

    else if (edad >= 18 && edad <= 29){

        let resultado = "Bebemos Cerveza";
    
        return resultado;

    }

    else if (edad >=30){

        let resultado = "Bebemos Whisky";
    
        return resultado;
    }

}
let resultado = bebidas(30);
console.log(resultado);