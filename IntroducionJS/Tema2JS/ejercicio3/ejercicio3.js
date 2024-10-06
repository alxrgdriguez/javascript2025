
// Declaramos variables al usuario
let num1 = 0;
let num2 = 0;
let suma = 0;
let producto = 0;

// Pedimos las variables al usuario
num1 = parseFloat(prompt("Introduce el primer numero: "));
num2 = parseFloat(prompt("Introduce el segundo numero: "));

// Calculamos 
suma = num1 + num2;
producto = num1 * num2;

//Mostramos por pantalla los resultados

alert(`La suma de los numeros ${num1} + ${num2} = ${suma}`);
alert(`La multiplicacion de los numeros ${num1} x ${num2} = ${producto}`);
