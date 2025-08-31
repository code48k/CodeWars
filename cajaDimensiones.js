// Escriba una función que devuelva la superficie total y el volumen de una caja.

// La entrada será de tres enteros positivos distintos de cero: ancho, alto y profundidad.

// La salida dependerá del lenguaje, así que consulte las pruebas de ejemplo para el tipo de dato correspondiente (lista, tupla, estructura, consulta, etc.).

// Volumen = Largo x Ancho x Alto

// Aplica la fórmula: Multiplica estas tres dimensiones. 

// Ejemplo: Si una caja tiene 30 cm de largo, 20 cm de ancho y 15 cm de alto, el volumen será: 30 cm x 20 cm x 15 cm = 9,000 cm³. 

function vol(ancho, alto, profundidad){ // CREAMOS UNA FUNCIÓN CON TRES PARAMETROS LLAMADOS '(ancho, alto, profundidad)'.

    let volumen = ancho * alto * profundidad; // CREAMOS UNA VARIABLE LLAMADA VOLUMEN QUE CALCULA EL ANCHO, ALTO Y PROFUNDIDAD.

    return volumen + ' cm³'; // CONCATENAMOS EL TEXTO A LA VARIABLE 'volumen'. PARA CUANDO SE EJECUTE DE EL RESULTADO + 'cm³'.

}

let resultado = vol(30, 20, 15); // CREAMOS UNA VARIABLE LLAMADA 'resultado', QUE GUARDA COMO VALOR, LA LLAMADA DE LA FUNCIÓN PARA QUE SE EJECUTE Y LE PASAMOS TRES ARGUMENTOS '(30, 20, 15)'.

console.log(resultado); // IMPRIMIMOS LA VARIABLE 'resultado'. 