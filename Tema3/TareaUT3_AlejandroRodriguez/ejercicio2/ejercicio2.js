/**
 * Funcion para saber la fecha actual
 */
function mostrarFechaActual() {
    let fechaActual = new Date();
    alert(`Fecha actual: ${fechaActual.toString()}`)
}

// Pongo 2 segundas para que se vea que funciona
const tiempoIntervalo = setTimeout(mostrarFechaActual, 2000);

