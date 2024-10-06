// Declaramos las variables necesarias
let numero;
let multplicar;

// Pedimos al usuario que escriba el numero
numero = parseInt(prompt("Introduce un numero y te muestro su tabla de multplicar: "))


// Hacemos el bucle para mostrar la tabla de dicho numero
for (let i = 1; i <= 10; i++) {
    document.write(`${i} x ${numero} = ${i * numero} <br>`)
}


