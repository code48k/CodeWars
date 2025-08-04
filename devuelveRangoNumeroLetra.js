// Cuando se proporciona un número entre 0 y 9, se devuelve en letras. Tenga en cuenta que se garantiza que la entrada esté dentro del rango de 0 a 9.

// Entrada: 1

// Salida: "Uno".

// Si su lenguaje lo admite, intente usar una sentencia switch.
// No debe eliminar ni añadir elementos del array.

function devuelveNumeroLetra(){

let numero = 6;

switch (numero){
    case 0:
        console.log("El número introducido es 0: CERO");
    break;
    case 1:
        console.log("El número introducido es 1: UNO");
    break;
    case 2:
        console.log("El número introducido es 2: DOS");
    break;
    case 3:
        console.log("El número introducido es 3: TRES");
    break;
    case 4:
        console.log("El número introducido es 4: CUATRO");
    break;
    case 5:
        console.log("El número introducido es 5: CINCO");
    break;
    case 6:
        console.log("El número introducido es 6: SEIS");
    break;
    case 7:
        console.log("El número introducido es 7: SIETE");
    break;
    case 8:
        console.log("El número introducido es 8: OCHO");
    break;
    case 9:
        console.log("El número introducido es 9: NUEVE");
    break;
    default:
        console.log("Introduce un número porfavor");

}

}
        
devuelveNumeroLetra();