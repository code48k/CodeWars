// Contador de vocales en un texto.

let saludo = "Esta noche voy ver una película con mis padres";

let contador = 0;

for (let i=0; i<=saludo.length; i++){
        
    if (saludo[i] == "a" || saludo[i] == "e" || saludo[i] == "i" || saludo[i] == "o" || saludo[i] == "u"){

        contador++;

}

}

console.log(`Encontrado: ${contador} vocales`);