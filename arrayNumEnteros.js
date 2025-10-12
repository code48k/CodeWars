// Dado un array de números enteros. Devuelve un array, donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos. 

// 0 no es ni positivo ni negativo. Si la entrada es un array vacío o es nulo, devuelve un array vacío. Ejemplo: Para la entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], se debe devolver [10, -65].

let myArr = [1, -4, 7, 12, -9, -8, 21, 27, 32, -45];

for (let i=0; i<myArr.length; i++){

    myArr.pop();
    
}

console.log(myArr);