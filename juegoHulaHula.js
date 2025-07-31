// Alex acaba de recibir un nuevo aro de hula hula. Le encanta, pero se siente desanimado porque su hermano pequeño es mejor que él.

// Escribe un programa donde Alex pueda introducir (n) cuántas vueltas da el aro y le devolverá un mensaje de ánimo:

// Si Alex consigue 10 o más aros, devuelve la cadena "Genial, ahora a por los trucos".

// Si no consigue 10 aros, devuelve la cadena "Sigue intentándolo hasta que lo consigas"
// .

function juego(){

    let n = 23;

    if (n >= 10){

        let resultado = "Genial, ahora a por los trucos";
        return resultado;

    }

    else if (n <= 10){

        let resultado = "Sigue intentándolo hasta que lo consigas";
        return resultado;
        
    }

}

let resultado = juego();

console.log(resultado);