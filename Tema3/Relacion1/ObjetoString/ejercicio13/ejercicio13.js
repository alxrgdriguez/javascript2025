// Funcion para determinar si una palabra es palíndromo
function esPalindromo(texto) {
    // Saber si es palíndromo
    if (texto === texto.split('').reverse().join('')) {
        return true;
    }
    else {
        return false;
    }

}

// Ingresar una palabra o texto por teclado
let palabra = prompt("Ingresa una palabra o texto");

// Mostrar si la palabra es palíndromo
if (esPalindromo(palabra.toLowerCase())) {
    alert("La palabra es palíndromo");
}
else {
    alert("La palabra no es palíndromo");
}