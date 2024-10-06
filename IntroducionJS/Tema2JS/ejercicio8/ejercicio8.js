// Declaramos las variables
let variable1;
let variable2;
let nombre = "";
let apellidos = "";


// Pedimos por teclado los numeros

nombre = prompt("Introduce tu nombre: ")
apellidos = prompt("Introduce tus apellidos: ")
variable1 = parseInt(prompt("Introduce un numero: "))
variable2 = parseInt(prompt("Introduce el segundo numero: "))

// Hacemos las condiciones

if ((variable1 > 0) && (variable2 < variable1)) {

    alert(`Tu nombres es ${nombre}`);

}

if ((variable1 > 0) && (variable2 >= variable1)) {

    alert(`Tu nombre y apellidos es: ${nombre} ${apellidos}`)

}

if ((variable1 < 0) && (variable2 > variable1) || (variable2 < variable1)) {

    alert(`Tu nombre y apellidos es: ${nombre} ${apellidos} independientemente de lo que escribas`)

}

