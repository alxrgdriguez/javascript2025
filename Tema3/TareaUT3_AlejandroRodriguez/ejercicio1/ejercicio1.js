let dnis = [];
let tiempoIntervalo;

// Función para calcular la letra del DNI
function calcularLetraDNI(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET'; // Letras posibles
    return letras[dni % 23]; // Calculo de la letra
}

// Funcion para solicitar el DNI
function pedirDNI() {
    let dni = '';

    do {

        dni = prompt("Introduce su DNI (escribe -1 para detener el programa");

        if (dni == '-1') {
            clearInterval(tiempoIntervalo); // Detener el intervalo
            return; // Salir de la funcion una vez escrito -1
        }

    } while (isNaN(dni) || dni.length !== 8)

    // Añadimos el DNI al array
    dnis.push(dni);
    document.write(`DNI QUE HAS INTRODUCIDO: ${dni} - LETRA: ${calcularLetraDNI(dni)}`);
}

// Llamamos a la función para solicitar el DNI la primera vez
pedirDNI();

// Establecemos el intervalo para solicitar el DNI cada 2 segundos, pongo 2 segundas para que se vea que funciona
tiempoIntervalo = setInterval(pedirDNI, 2000);

