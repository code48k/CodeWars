// Función de movimiento del juego terminal.

// En este juego, el héroe se mueve de izquierda a derecha. El jugador lanza el dado y avanza el número de espacios según el número que salga, y ese número que salga será el valor por dos veces.

// Crea una función para el juego terminal que tome la posición actual del héroe y el resultado (1-6) y devuelva la nueva posición.

// Recuerda que un dado no tiene más números (1-6).

// Ejemplo:

// move(0, 4) debe ser igual a 8
// move(2, 5) debe ser igual a 12
// move(3, 6) debe ser igual a 15

function move(posicion, dado){

    let resultado = posicion + (dado) * 2;

    return resultado;

}

console.log(move(0, 4));
console.log(move(2, 5));
console.log(move(3, 6));