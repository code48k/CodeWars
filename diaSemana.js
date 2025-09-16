// Complete la función que devuelve el día de la semana según el número ingresado:

// 1 devuelve "Domingo"
// 2 devuelve "Lunes"
// 3 devuelve "Martes"
// 4 devuelve "Miércoles"
// 5 devuelve "Jueves"
// 6 devuelve "Viernes"
// 7 devuelve "Sábado"

// En caso contrario, devuelve "Incorrecto, ingrese un número entre 1 y 7".

let valor = "Sabado";

function diaSemana(){
    switch (valor){

    case "Domingo":
        console.log("Domingo");
    break;

    case "Lunes":
        console.log("Lunes");
    break;

    case "Martes":
        console.log("Martes");
    break;

    case "Miercoles":
        console.log("Miercoles");
        break;

    case "Jueves":
        console.log("Jueves");
        break;

    case "Viernes":
        console.log("Viernes");
        break;

    case "Sabado":
        console.log("Sabado");  
        break;
        
    default:
        console.log("En caso contrario, devuelve Incorrecto, ingrese un número entre 1 y 7");
}

}

diaSemana();