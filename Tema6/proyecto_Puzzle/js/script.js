let temporizador;
let segundos = 0;
let temporizadorActivo = false;
let temporizadorPausado = false;

// Asignación de eventos al cargar la página
function asignarEventos() {
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

// Al cargar la página, verificamos si el juego ya ha comenzado
window.addEventListener('load', () => {
    if (sessionStorage.getItem('juegoIniciado') === 'true') {
        document.getElementById('empezar').style.display = 'none';
        document.getElementById('pausar').style.display = 'inline-block';
        document.getElementById('terminar').style.display = 'inline-block';

        iniciarTemporizador();
    }
});

// Función para iniciar el juego
function empezarJuego() {
    document.getElementById('empezar').style.display = 'none';
    document.getElementById('pausar').style.display = 'inline-block';
    document.getElementById('terminar').style.display = 'inline-block';

    iniciarTemporizador();
    sessionStorage.setItem('juegoIniciado', 'true');
    setTimeout(() => {
        location.reload();  // Recarga para reiniciar el puzzle sin detener el temporizador
    }, 100);
}

// Iniciar el temporizador
function iniciarTemporizador() {
    if (temporizadorActivo) return; 
    temporizadorActivo = true;

    temporizador = setInterval(() => {
        segundos++;
        actualizarTiempo();
    }, 1000);
}

// Actualizar el tiempo en el temporizador
function actualizarTiempo() {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    let tiempoFormateado = formatearNumero(horas) + ':' + formatearNumero(minutos) + ':' + formatearNumero(segundosRestantes);
    document.getElementById('temporizador').innerText = 'Tiempo: ' + tiempoFormateado;
}

function formatearNumero(numero) {
    return numero < 10 ? '0' + numero : numero.toString();
}

function pausarTemporizador() {
    clearInterval(temporizador);
    temporizadorActivo = false;
    temporizadorPausado = true;

    document.getElementById('pausar').style.display = 'none';
    document.getElementById('reanudar').style.display = 'inline-block';
}

function reanudarTemporizador() {
    if (!temporizadorPausado) return;
    temporizadorPausado = false;

    iniciarTemporizador();
    document.getElementById('reanudar').style.display = 'none';
    document.getElementById('pausar').style.display = 'inline-block';
}

function terminarJuego() {
    clearInterval(temporizador);
    temporizadorActivo = false;

    document.getElementById('temporizador').innerText = 'Tiempo: 00:00:00';
    document.getElementById('empezar').style.display = 'inline-block';
    document.getElementById('pausar').style.display = 'none';
    document.getElementById('reanudar').style.display = 'none';
    document.getElementById('terminar').style.display = 'none';
}

let filas = 4;  
let columnas = 4;  
let movimientos = 0;
let tablero = [];
let vacio = { fila: -1, columna: -1 }; 

// Array con el orden de las imágenes (1 a 16)
let imgOrden = [
    "1", "2", "3", "4", 
    "5", "6", "7", "8", 
    "9", "10", "11", "12", 
    "13", "14", "15", "blanco"
].sort (() => Math.random() - 0.5);

function crearPuzzle() {

    // Crear las piezas del puzzle
    for (let i = 0; i < filas; i++) {
        tablero[i] = [];
        for (let j = 0; j < columnas; j++) {
            let pieza = document.createElement("img");
            pieza.id = `${i}-${j}`;
            const imagen = imgOrden.shift();
            if (imagen === "blanco") {
                vacio.fila = i;
                vacio.columna = j;

            }

            pieza.src = `./img/${imagen}.gif`;
            pieza.classList.add("pieza");

            // Establecer el evento de clic para mover las piezas
            pieza.addEventListener("click", function() {
                console.log(i, j);
                moverPieza(i, j);
            });

            document.getElementById("tablero").appendChild(pieza);
            tablero[i][j] = pieza;
        }
    }
};

function moverPieza(fila, columna) {

    // Si la pieza está en la posición vacía, no hacer nada
    if(fila === vacio.fila && columna === vacio.columna) {
        return;
    }

    // Si la pieza blanca está abajo, mueve la pieza arriba

    const piezaPulsada = tablero[fila][columna];
    let piezaAbajo 
    let piezaArriba 

    if(fila !== 0 && fila !== 3) {
        piezaAbajo = tablero[fila+1][columna];
        piezaArriba = tablero[fila-1][columna];
    }

    const piezaDerecha = tablero[fila][columna+1];
    const piezaIzquierda = tablero[fila][columna-1];

    if(piezaDerecha && piezaDerecha.src.includes("blanco")) {

        const srcPierzaDerecha = piezaDerecha.src;
        piezaDerecha.src = piezaPulsada.src;
        piezaPulsada.src = srcPierzaDerecha;
        vacio.columna = columna + 1;
    }

    if(piezaIzquierda && piezaIzquierda.src.includes("blanco")) {
        const srcPierzaIzquierda = piezaIzquierda.src;
        piezaIzquierda.src = piezaPulsada.src;
        piezaPulsada.src = srcPierzaIzquierda;
        vacio.columna = columna - 1;
    }

    if(piezaAbajo && piezaAbajo.src.includes("blanco")) {
        const srcPierzaAbajo = piezaAbajo.src;
        piezaAbajo.src = piezaPulsada.src;
        piezaPulsada.src = srcPierzaAbajo;
        vacio.fila = fila + 1;
    }

    if(piezaArriba && piezaArriba.src.includes("blanco")) {
        const srcPierzaArriba = piezaArriba.src;
        piezaArriba.src = piezaPulsada.src;
        piezaPulsada.src = srcPierzaArriba;
        vacio.fila = fila - 1;
    }
    


}


crearPuzzle();
asignarEventos();
