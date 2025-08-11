// Messi es un futbolista con goles en tres ligas:

// La Liga
// Copa del Rey
// Champions

// Completa la función para obtener su total de goles en las tres ligas.

// Nota: La entrada siempre será válida.

function golesTemporada(LaLiga, CopadelRey, Champions){ // DECLARAMOS UNA FUNCIÓN CON TRES PARAMETROS, PARA PODER CALCULAR DESPUÉS LA SUMA DE LOS GOLES POR TEMPORADA.

    return LaLiga + CopadelRey + Champions; // RETORNAMOS LOS VALORES DE CADA UNA DE LAS LIGAS.

}

let totalGoles = golesTemporada(3, 8, 2); // DECLARAMOS UNA VARIABLE, Y DENTRO DE ELLA LLAMAMOS A LA FUNCIÓN, Y LE PASAMOS LOS VALORES DE LOS GOLES, COMO ARGUMENTOS, 'golesTemporada(3, 8, 2).
console.log(totalGoles); // IMPRIMIMOS LA VARIABLE LLAMADA 'totalGoles', QUE NOS DARÁ LA SUMA DE TODOS LOS GOLES DE MESSI, QUE HA METIDO EN CADA UNA DE LAS LIGAS.