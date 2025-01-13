let temporizador;
let segundos = 0;
let temporizadorActivo = false;
let temporizadorPausado = false;

// Asignación de eventos al cargar la página
window.onload = function () {
    // Obtención de los elementos
    const botonEmpezar = document.getElementById('empezar');
    const botonPausar = document.getElementById('pausar');
    const botonReanudar = document.getElementById('reanudar');
    const botonTerminar = document.getElementById('terminar');

    // Evento para empezar el juego
    botonEmpezar.addEventListener('click', empezarJuego);

    // Evento para pausar el temporizador
    botonPausar.addEventListener('click', pausarTemporizador);

    // Evento para reanudar el temporizador
    botonReanudar.addEventListener('click', reanudarTemporizador);

    // Evento para terminar el juego
    botonTerminar.addEventListener('click', terminarJuego);
};

function empezarJuego() {
    // Hacer que el botón de empezar desaparezca
    document.getElementById('empezar').style.display = 'none';

    // Mostrar los botones de Pausar y Terminar
    document.getElementById('pausar').style.display = 'inline-block';
    document.getElementById('terminar').style.display = 'inline-block';

    // Iniciar el temporizador
    iniciarTemporizador();
}

function iniciarTemporizador() {
    if (temporizadorActivo) return; // Si ya está corriendo el temporizador, no hacer nada
    temporizadorActivo = true;

    // Mostrar el temporizador en pantalla
    temporizador = setInterval(() => {
        segundos++;
        actualizarTiempo();
    }, 1000);
}

function actualizarTiempo() {
    // Convertir los segundos en formato horas:minutos:segundos
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    // Formatear el tiempo en formato hh:mm:ss
    let tiempoFormateado = formatearNumero(horas) + ':' + formatearNumero(minutos) + ':' + formatearNumero(segundosRestantes);
    document.getElementById('temporizador').innerText = 'Tiempo: ' + tiempoFormateado;

}

function formatearNumero(numero) {
    if (numero < 10) {
        return '0' + numero;
    } else {
        return numero.toString();
    }
}

function pausarTemporizador() {
    clearInterval(temporizador);
    temporizadorActivo = false;
    temporizadorPausado = true;

    // Mostrar el botón de reanudar y ocultar el de pausar
    document.getElementById('pausar').style.display = 'none';
    document.getElementById('reanudar').style.display = 'inline-block';
}

function reanudarTemporizador() {
    if (!temporizadorPausado) return; // Si no está pausado, no hacer nada
    temporizadorPausado = false;
    iniciarTemporizador();

    // Ocultar el botón de reanudar y mostrar el de pausar
    document.getElementById('reanudar').style.display = 'none';
    document.getElementById('pausar').style.display = 'inline-block';
}

function terminarJuego() {
    clearInterval(temporizador);
    temporizadorActivo = false;
    alert('Felicidades! Has completado el Puzzle deslizante.');
    document.getElementById('temporizador').innerText = 'Tiempo: 00:00:00';
    document.getElementById('empezar').style.display = 'inline-block';
    document.getElementById('pausar').style.display = 'none';
    document.getElementById('reanudar').style.display = 'none';
    document.getElementById('terminar').style.display = 'none';
}
