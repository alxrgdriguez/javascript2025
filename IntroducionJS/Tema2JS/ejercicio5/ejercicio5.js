// Declaramos las variables de tipo String
let cadena1 = "";
let cadena2 = "";
let cadena3 = "";

// Pedmimos al usuario que escriba por teclado
cadena1 = (prompt("Introduce una cadena de texto: "));
cadena2 = (prompt("Introduce otra cadena texto: "));

cadena3 = cadena1 + cadena2;
cadena1 += cadena2;

alert(cadena3);
alert("El contenido de cadena1 ahora es: " + cadena1);
