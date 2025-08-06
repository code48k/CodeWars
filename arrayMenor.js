// Dado un array de enteros, la solución debe encontrar el entero más pequeño.

// Por ejemplo:

// Dado [34, 15, 88, 2], la solución devolverá 2.
// Dado [34, -345, -1, 100], la solución devolverá -345.

let array1 = [34, 15, 88, 2];

let vacio1 = array1[0];

for(let i=0; i<array1.length; i++){

    if(array1[i] < vacio1){

        vacio1 = array1[i];
    }
}

console.log(vacio1);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let array2 = [34, -345, -1, 100];

let vacio2 = array2[0];

for(let i=0; i<array2.length; i++){

    if(array2[i] < vacio2){

        vacio2 = array2[i];
    }
}

console.log(vacio2);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
