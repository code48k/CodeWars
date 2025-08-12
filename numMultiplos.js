// En este sencillo ejercicio, escribirás una función que toma dos enteros: n y límite; y devuelve una lista de múltiplos de n hasta, e incluso, límite.

// Se garantiza que n > 0 y límite >= n.

// Por ejemplo, si los parámetros pasados son (2, 6), la función debería devolver [2, 4, 6], ya que 2, 4 y 6 son múltiplos de 2 hasta 6.

// Ejemplos
// n = 2; límite = 6 --> [2, 4, 6]
// n = 2; límite = 5 --> [2, 4]

function Multiplo(n, limite){ // DECLARAMOS E INICIAMOS UNA FUNCIÓN CON DOS PARAMETROS, PARA CALCULAR 'n' QUÉ TENDRÁ UN VALOR DE 0, Y 'limite' TENDRA UN VALOR MÁXIMO DE 6.

    let valorVacio = []; // DECLARAMOS UNA VARIABLE PARA TENER DENTRO DE ELLA, UN ARRAY VACÍO PARA LLENARLO PARA DESPUÉS.

    for(let i=n; i<=limite; i++){ // EMPIEZA UN BUCLE FOR. INICIALIZA 'i' CON EL VALOR DE 'n'.

// CONDICIÓN DE CONTINUACIÓN: 'i' <= 'limite', EL BUCLE SEGUIRÁ MIENTRAS 'i' SEA MENOR O IGUAL QUE 'limite.'

// INCREMENTO: 'i++' HACE QUE 'i' AUMENTE DE UNO EN UNO EN CADA ITERACIÓN.

        if(i % 2 === 0){ // 'i % 2' ES EL RESTO DE DIVIDIR 'i' ENTRE 2, SI EL RESTO ES 0 (===0) ENTONCES 'i' ES PAR. ESTA LÍNEA FILTRA LOS PARES. SOLO DEJA PASAR LOS NÚMEROS QUE SON DIVISIBLES ENTRE 2 SIN RESTO.

            valorVacio.push(i); // SI LA CONDICIÓN ANTERIOR SE CUMPLE, AÑADE EL VALOR 'i' AL FINAL DEL ARRAY 'valorVacio' USANDO EL MÉTODO PUSH.

        }
    }

    return valorVacio; // RETORNAMOS ESTE VALOR PARA EJECUTARLO FUERA DE LA FUNCIÓN.

}

let result = Multiplo(2, 6); // AQUÍ TENEMOS UNA VARIABLE, QUE DENTRO DE ELLA, LLAMAMOS A LA FUNCIÓN LA EJECUTAMOS CON DOS ARGUMENTOS, PARA LUEGO PASARLO COMO PARAMETROS 'Multiplo(2, 6)'.
console.log(result); // IMPRIMIMOS POR CONSOLA LA VARIABLE LLAMADA 'result'.