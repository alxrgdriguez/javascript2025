
/*Ejemplos iniciales JavaSript*/

document.write("Hola Mundo"); // write escribe en el documento de la página
console.log("Hola Mundo Consola"); //conselo.log escribe en la terminal de inspeccionar (F12)
alert("Hola Mundo"); // Hace una ventana emergente o popup


// Confirmacion

let respuesta;
respuesta = confirm("¿Desea cancelar la información?");
alert("Usted a elegido " + respuesta);

//Prompt

let provincia;
provincia = prompt("Introduzca la provincia ", "Valencia");
alert("Usted ha introducido la siguiente información " + provincia);
console.log("Operación realizada con éxito");

let num1 = parseInt(prompt("Introduce el primer numero"));
let num2 = parseInt(prompt("Introduce el segundo numero"));
let suma = (num1 + num2);
let mensaje = `El resultado de ${num1} + ${num2} = ${suma}`;

alert(mensaje)

document.getElementById("cabecera").innerHTML = "El resultado es " + suma;

// O​peradores
let numero1 = 3;
let numero2 = 5;

numero2 += numero1;
numero2 -= numero1;
numero2 *= numero1;
numero2 /= numero1;
numero2 %= numero1;

/*Operadores de comparación */
let a = 4; b = 5, c = "5";
console.log("El resultado de la expresión 'a==c' es igual a " + (a == c));
console.log("El resultado de la expresión 'a===c' es igual a " + (a === c));
console.log("El resultado de la expresión 'a!=c' es igual a " + (a != c));
console.log("El resultado de la expresión 'a!==c' es igual a " + (a !== c));
console.log("El resultado de la expresión 'a==b' es igual a " + (a == b));
console.log("El resultado de la expresión 'a!=b' es igual a " + (a != b));
console.log("El resultado de la expresión 'a>b' es igual a " + (a > b));
console.log("El resultado de la expresión 'a<b' es igual a " + (a < b));
console.log("El resultado de la expresión 'a>=b' es igual a " + (a >= b));
console.log("El resultado de la expresión 'a<=b' es igual a " + (a <= b));


/*Estructuras de control*/

let edadAna, edadLuis;
// Usamos parseInt para convertir a entero
edadAna = parseInt(prompt("Introduce la edad de Ana", ""));
edadLuis = parseInt(prompt("Introduce la edad de Luis", ""));

if (edadAna > edadLuis) {
    console.log("Ana es mayor que Luis.");
    console.log(" Ana tiene " + edadAna + " años y Luis " + edadLuis);
}
else {
    console.log("Ana es menor o de igual edad que Luis.");
    console.log(" Ana tiene " + edadAna + " años y Luis " + edadLuis);
}

// Bucle For

for (i = 2; i <= 30; i += 2) {
    console.log(i);
}
console.log("Se han escrito los números pares del 2 al 30");

// Buble While

let i = 2;
while (i <= 30) {
    console.log(i);
    i += 2;
}
console.log("Ya se han mostrado los números pares del 2 al 30");

// Bucle Do-While
let auxclave;
do {
    auxclave = prompt("introduce la clave ", "vivaYo")
} while (auxclave !== "EstaeslaclaveJEJEJE")
console.log("Has acertado la clave");


// Ejemplo Funciones JS

let num_1;
let num_2;

do {

    num_1 = parseInt(prompt("Introduce un numero: "))

} while (isNaN(num_1))

do {

    num_2 = parseInt(prompt("Introduce otro numero: "))

} while (isNaN(num_2));
let sumar = num_1 + num_2;
alert(`La suma de los numeros es ${suma}`);


// Ejemplos función flecha

let suma2 = (a, b) => a + b;
document.write(`La suma es ${suma2(12, 30)}`)
