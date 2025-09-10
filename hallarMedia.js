// Halla la media (promedio) de una lista de números en un array.

// Para hallar la media (promedio) de un conjunto de números, suma todos los números y divide el resultado entre el número de valores de la lista.

// Por ejemplo, una lista de 1, 3, 5, 7

// 1. Suma todos los números:

// 1 + 3 + 5 + 7 = 16

// 2. Divide entre el número de valores de la lista. En este ejemplo, la lista tiene 4 números.

// 16 / 4 = 4

// 3. La media (o promedio) de esta lista es 4.

let myArr = [1, 3, 5, 7];

function calculo(numeroArray){

let newArr = [];

let sumaResultado = 0;

for(let i=0; i<numeroArray.length; i++){

    if(numeroArray[i] > 0){

        newArr.push(numeroArray[i]);

    }

    }

        for(let n=0; n<newArr.length; n++){

        sumaResultado += newArr[n];
        

}


    return newArr.join(" + ") + " = " + sumaResultado + " / " + sumaResultado / 4;
    

}


console.log(calculo(myArr));

