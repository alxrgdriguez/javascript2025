/*Hemos visto que una de las propiedades del objeto String es length, se pide realizar
una función que nos devuelva la longitud de un texto pedido por prompt.
Dentro de nuestro programa principal si la longitud es menor que 2 volveremos a pedir
la misma cadena hasta que el usuario introduzca un texto con longitud igual o superior
a 3 caracteres.*/

function pedirTexto() {
    let texto = prompt("Introduce un texto: ");
    while (texto.length < 3) {
        texto = prompt("Error al introducir la cadena, vuelve a ingresar el texto");
    }
    return texto;
}

let texto = pedirTexto();
document.write(`Tu palabra es: ${texto}`);
