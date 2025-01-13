// Calculadora sencilla
let resultado = document.getElementById('resultado');
let operacion = '';

// Funcion para agregar caracteres al resultado de la calculadora
function agregarCaracter(caracter) {
  // Si hay un error de sintaxis, limpiamos el resultado antes de continuar
  if (operacion === 'Error de Sintaxis') {
    operacion = '';  
  }
  operacion += caracter;
  resultado.textContent = operacion;
}

// Funcion para limpiar el resultado de la calculadora
function limpiarResultado() {
  operacion = '';
  resultado.textContent = operacion;
}

// Funcion para calcular el resultado de la calculadora cuando se presiona el boton igual
function calcularResultado() {
  try {
    operacion = eval(operacion).toString();
  } catch (e) {
    operacion = 'Error de Sintaxis';
  }

  resultado.textContent = operacion;
}

// Funcion para manejar todos los botones de la calculadora
function manejarBoton(valor) {
  agregarCaracter(valor);
}

function inicializar() {
  document.getElementById('siete').onclick = function() { manejarBoton('7'); };
  document.getElementById('ocho').onclick = function() { manejarBoton('8'); };
  document.getElementById('nueve').onclick = function() { manejarBoton('9'); };
  document.getElementById('division').onclick = function() { manejarBoton('/'); };
  document.getElementById('cuatro').onclick = function() { manejarBoton('4'); };
  document.getElementById('cinco').onclick = function() { manejarBoton('5'); };
  document.getElementById('seis').onclick = function() { manejarBoton('6'); };
  document.getElementById('multiplicacion').onclick = function() { manejarBoton('*'); };
  document.getElementById('uno').onclick = function() { manejarBoton('1'); };
  document.getElementById('dos').onclick = function() { manejarBoton('2'); };
  document.getElementById('tres').onclick = function() { manejarBoton('3'); };
  document.getElementById('resta').onclick = function() { manejarBoton('-'); };
  document.getElementById('cero').onclick = function() { manejarBoton('0'); };
  document.getElementById('suma').onclick = function() { manejarBoton('+'); };
  document.getElementById('limpiar').onclick = limpiarResultado;
  document.getElementById('igual').onclick = calcularResultado;

}

inicializar();
