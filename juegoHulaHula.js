// Alex acaba de recibir un nuevo aro de hula hula. Le encanta, pero se siente desanimado porque su hermano pequeño es mejor que él.

// Escribe un programa donde Alex pueda introducir (n) cuántas vueltas da el aro y le devolverá un mensaje de ánimo:

// Si Alex consigue 10 o más aros, devuelve la cadena "Genial, ahora a por los trucos".

// Si no consigue 10 aros, devuelve la cadena "Sigue intentándolo hasta que lo consigas".

let aros = 10; // NÚMERO DE AROS QUE HA METIDO ALEX.

function cuantosAros(){ // DECLARAMOS E INICIAMOS UNA FUNCIÓN PARA EJECUTAR LOS CALCULOS.

    if (aros >= 10){ // DECLARAMOS UN CONDICIONAL QUE, SIEMPRE SU VALOR SEA MAYOR O IGUAL '>= 10', NO SALDRÁ ESTE MENSAJE "Genial, ahora a por los trucos".

        return "Genial, ahora a por los trucos"; // RETORNAMOS ESTE VALOR EN CASO, QUE LA CONDICIÓN SE CUMPLA.

    }

    else if (aros < 10){ // DECLARAMOS UN CONDICIONAL QUE, SIEMPRE SU VALOR SEA MENOR '<10', NOS SALDRÁ ESTE MENSAJE "Sigue intentándolo hasta que lo consigas".

        return "Sigue intentándolo hasta que lo consigas"; // RETORNAMOS ESTE VALOR EN CASO, QUE LA CONDICIÓN SE CUMPLA.

    }
}

console.log(cuantosAros());