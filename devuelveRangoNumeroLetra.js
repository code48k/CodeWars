// Cuando se proporciona un número entre 0 y 9, se devuelve en letras. Tenga en cuenta que se garantiza que la entrada esté dentro del rango de 0 a 9.

// Entrada: 1

// Salida: "Uno".

// Si su lenguaje lo admite, intente usar una sentencia switch.
// No debe eliminar ni añadir elementos del array.

function devuelveNumeroLetra(){

let numero = 6;

    switch (numero){
        case 0:
            console.log("El número introducido es cero");
        break;
        case 1:
            console.log("El número introducido es uno");
        break;
        case 2:
            console.log("El número introducido es dos");
        break;
        case 3:
            console.log("El número introducido es tres");
        break;
        case 4:
            console.log("El número introducido es cuatro");
        break;
        case 5:
            console.log("El número introducido es cinco");
        break;
        case 6:
            console.log("El número introducido es seis");
        break;
        case 7:
            console.log("El número introducido es siete");
        break;
        case 8:
            console.log("El número introducido es ocho");
        break;
        case 9:
            console.log("El número introducido es nueve");
        break;
        default:
            console.log("Introduce un número porfavor");

    }

}

devuelveNumeroLetra();