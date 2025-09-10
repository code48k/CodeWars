// Los gametos masculinos o espermatozoides en humanos y otros mamíferos son heterogaméticos y contienen uno de dos tipos de cromosomas sexuales: X o Y. Sin embargo, los gametos femeninos u óvulos contienen solo el cromosoma sexual X y son homogaméticos.

// El espermatozoide determina el sexo de un individuo en este caso. Si un espermatozoide con un cromosoma X fecunda un óvulo, el cigoto resultante será XX o femenino. Si el espermatozoide contiene un cromosoma Y, el cigoto resultante será XY o masculino.

// Determina si el sexo de la descendencia será masculino o femenino según el cromosoma X o Y presente en el espermatozoide del macho.

// Si el espermatozoide contiene el cromosoma X, devuelve "¡Felicidades! Vas a tener una hija."; Si el espermatozoide contiene el cromosoma Y, devuelve "¡Felicidades! Vas a tener un hijo."

function cromosoma(){

let pregunta = "YYgit ";

switch (pregunta){
    case "XX":
        console.log("¡Felicidades! Vas a tener una hija.");
    break;
    case "XY":
        console.log("¡Felicidades! Vas a tener un hijo.");
    break;
        default:
    console.log("Cromosoma incorrecto")
        
}

}

cromosoma();