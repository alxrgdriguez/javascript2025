// Obtener los elementos principales del HTML
const tablero = document.getElementById('tablero');  
const resultado = document.getElementById('resultado');  

// Variable para guardar el color seleccionado (rojo por defecto)
let colorSeleccionado = 'rojo';

// Función para generar un número aleatorio único sin repetir
function generarNumero(array) {
  let num;
  do {
    num = Math.floor(Math.random() * 16);
  } while (array.includes(num));
  array.push(num);  // Añadir el número al array
  return num;
}

const numerosUsados = [];  // Array para almacenar números únicos

// Crear las 16 casillas del tablero
for (let i = 0; i < 16; i++) {
  const num = generarNumero(numerosUsados);  // Usar la función para obtener un número único

  // Crear un elemento div para la casilla
  const casilla = document.createElement('div');
  casilla.id = num;  // Establecer el id como el número aleatorio
  casilla.textContent = num;  // Mostrar el número dentro de la casilla
  casilla.className = 'casilla';  // Añadir clase para estilos

  // Agregar un evento para cambiar el color cuando se hace click
  casilla.addEventListener('click', () => {
    if (colorSeleccionado === 'rojo') {
      casilla.style.backgroundColor = 'red';  // Pintar de rojo
    } else if (colorSeleccionado === 'blanco') {
      casilla.style.backgroundColor = 'white';  // Pintar de blanco
    }
  });

  // Añadir la casilla al tablero
  tablero.appendChild(casilla);
}

// Botón para limpiar todas las casillas (ponerlas en blanco)
document.getElementById('botonLimpiar').addEventListener('click', () => {
  const casillas = tablero.getElementsByClassName('casilla');
  for (let casilla of casillas) {
    casilla.style.backgroundColor = 'white';  // Restablecer color
  }
});

// Botón para seleccionar color rojo
document.getElementById('botonRojo').addEventListener('click', () => {
  colorSeleccionado = 'rojo';
});

// Botón para seleccionar color blanco
document.getElementById('botonBlanco').addEventListener('click', () => {
  colorSeleccionado = 'blanco';
});

// Botón para pintar las casillas en patrón de ajedrez
document.getElementById('botonAjedrez').addEventListener('click', () => {
  const casillas = tablero.getElementsByClassName('casilla');
  Array.from(casillas).forEach((casilla, index) => {
    casilla.style.backgroundColor = (index % 2 === (Math.floor(index / 4) % 2)) ? 'red' : 'white';
  });
});

// Botón para sumar los valores de las casillas rojas
document.getElementById('botonSumarRojas').addEventListener('click', () => {
  let suma = 0;
  const casillas = tablero.getElementsByClassName('casilla');
  for (let casilla of casillas) {
    if (casilla.style.backgroundColor === 'red') {
      suma += parseInt(casilla.id);  // Sumar el valor del id
    }
  }
  resultado.textContent = `Suma de rojas: ${suma}`;  // Mostrar resultado
});

// Botón para sumar los valores de las casillas blancas
document.getElementById('botonSumarBlancas').addEventListener('click', () => {
  let suma = 0;
  const casillas = tablero.getElementsByClassName('casilla');
  for (let casilla of casillas) {
    if (casilla.style.backgroundColor === 'white') {
      suma += parseInt(casilla.id);  // Sumar el valor del id
    }
  }
  resultado.textContent = `Suma de blancas: ${suma}`;  // Mostrar resultado
});
