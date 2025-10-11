// Contador de vocales en un texto

let saludo = "Esta noche voy ver una película con mis padres";

let vacio = 0;

for (let i=0; i<=saludo.length; i++){
        
    if (saludo[i] == "a" || saludo[i] == "e" || saludo[i] == "i" || saludo[i] == "o" || saludo[i] == "u"){

        vacio++;

}

}
    console.log(vacio);