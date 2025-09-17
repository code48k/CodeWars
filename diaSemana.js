// Complete la función que devuelve el día de la semana según el número ingresado:

// 1 devuelve "Domingo"
// 2 devuelve "Lunes"
// 3 devuelve "Martes"
// 4 devuelve "Miércoles"
// 5 devuelve "Jueves"
// 6 devuelve "Viernes"
// 7 devuelve "Sábado"

// En caso contrario, devuelve "Incorrecto, ingrese un número entre 1 y 7".

function valorSemana(){

let valor = 1;

diaSemana(valor);

}

function diaSemana(valor){
    
    switch (valor){

    case 1:
        console.log("Domingo");
    break;

    case 2:
        console.log("Lunes");
    break;

    case 3:
        console.log("Martes");
    break;

    case 4:
        console.log("Miercoles");
        break;

    case 5:
        console.log("Jueves");
        break;

    case 6:
        console.log("Viernes");
        break;

    case 7:
        console.log("Sabado");  
        break;
        
    default:
        console.log("En caso contrario, devuelve Incorrecto, ingrese un número entre 1 y 7");

}

}

valorSemana();