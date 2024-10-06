// Declaramos las variables
let numero;

// Pedimos por teclado el numero
numero = parseInt(prompt("Introduce un numero: "));

for (let i = 1; i <= numero; i++) {
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br />");
}
