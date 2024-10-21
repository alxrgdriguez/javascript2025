/* Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una
frase o texto (fuente) y luego la clave a buscar. En caso de encontrarla, imprimir la
posición, de lo contrario una leyenda. */

// Ingresas frase o texto
let texto = prompt("Ingresa una frase o texto");

// Ingresas la clave a buscar
let clave = prompt("Ingresa la clave a buscar");

let posicion = texto.indexOf(clave); //indexOf devuelve la posición de la clave en el texto

if (posicion === -1) {
    alert("La clave no se encuentra en el texto");
} else {
    alert(`La clave ${clave} se encuentra en el texto en la posición ${posicion}`);
}

