// Función de movimiento del juego terminal.

// En este juego, el héroe se mueve de izquierda a derecha. El jugador lanza el dado y avanza el número de espacios, indicado por el dado por dos veces.

// Crea una función para el juego terminal que tome la posición actual del héroe y el resultado (1-6) y devuelva la nueva posición.

// Ejemplo:

// move(0, 4) debe ser igual a 8
// move(2, 5) debe ser igual a 12
// move(3, 6) debe ser igual a 15

function move(pos, dados) {
    // let resultado = dados + dados;
    return pos + (dados) * 2;
}

console.log(move(0, 4));
console.log(move(3, 6));
console.log(move(2, 5));