// Messi es un futbolista con goles en tres ligas:

// La Liga
// Copa del Rey
// Champions

// Completa la función para obtener su total de goles en las tres ligas.

// Nota: La entrada siempre será válida.

function messi(LaLiga, CopadelRey, Champions){

    let resultado = LaLiga + CopadelRey + Champions;

    return resultado;

}

let result = messi(2, 6, 2);
console.log(result);