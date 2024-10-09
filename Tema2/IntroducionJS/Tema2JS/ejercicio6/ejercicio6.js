
// Declaramos las variables
let numero = 0;


// Pedimos al usuario que escriba un numero
numero = parseInt(prompt("Introduce un numero y te diré si es par o impar: "));

// Hacemos la condición para saber si el numero es par o impar
if (numero % 2 === 0) {
    alert("El numero es PAR");
} else {
    alert("El numero es IMPAR");
}