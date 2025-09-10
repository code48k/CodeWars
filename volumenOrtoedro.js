// Bob necesita una forma rápida de calcular el volumen de un ortoedro rectangular con tres valores: largo, ancho y alto.

// Escribe una función para ayudar a Bob con este cálculo.

function ortoedro(largo, ancho, alto){

    let volumen = largo * ancho * alto;

    return volumen + " cm³";
}

console.log(ortoedro(25, 10, 50));