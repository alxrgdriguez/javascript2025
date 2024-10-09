
//Declaramos las variables
let primera = 0;
let segunda = 0;
let diferencia = 0;
let division = 0;
let resto = 0;

// Pedimos al usuario los numeros
primera = parseFloat(prompt("Introduce el primer numero: "));
segunda = parseFloat(prompt("Introduce el segundo numero: "));

// Calculamos
division = (primera / segunda);
resto = (primera % segunda);
diferencia = Math.abs(primera, segunda);

//Mostramos por pantalla los resultados
alert(`La division de ${primera} / ${segunda} = ${division}`);
alert(`La diferencia de ${primera} y ${segunda} = ${diferencia}`);
alert(`El resto de ${primera} entre ${segunda} = ${resto}`);
