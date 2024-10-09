// Declaramos las variables
let numero;

// Pedimos por teclado el numero
numero = parseInt(prompt("Introduce un numero: "));

// Hacemos un for para tener un bucle descendente
for (let i = numero; i >= 0; i--) {
    document.write(i + "<br>")
}