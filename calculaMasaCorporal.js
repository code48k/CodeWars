// Escriba la función IMC que calcula el índice de masa corporal (IMC = peso / altura²).

// Si IMC <= 18,5, devuelve "Bajo peso".

// Si IMC <= 25,0, devuelve "Normal".

// Si IMC <= 30,0, devuelve "Sobrepeso".

// Si IMC > 30, devuelve "Obesidad".

let peso = 90; // Peso en Kilogramos.
let altura = 1.75 * 1.75; // Estatura de la persona elevado por sí mismo.
let imc = peso / altura; // Calculo de la IMC (Masa Corporal).

function calculaMasaCorporal(){

    if (imc <= 18.5){
        console.log("Bajo peso");
        
    }

    else if (imc <= 25.0){
        console.log("Normal");

    }

    else if (imc <= 30.0){
        console.log("Sobrepeso");

    }

    else if (imc>30){
        console.log("Obesidad");

    }
}

calculaMasaCorporal(); 