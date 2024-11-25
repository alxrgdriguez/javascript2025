// Obtener referencias a los elementos necesarios
const addFila = document.getElementById('addFila');  // Botón para añadir una fila
const addFilaBoton = document.getElementById('addFilaBoton');  // Botón "+" para añadir fila
const deleteFilaBoton = document.getElementById('deleteFilaBoton');  // Botón "-" para eliminar fila
const tableBody = document.querySelector('#miTabla tbody');  // Cuerpo de la tabla
const celda1Input = document.getElementById('celda1');
const celda2Input = document.getElementById('celda2');
const celda3Input = document.getElementById('celda3');

// Función para añadir una fila a la tabla
function agregarFila() {
    const celda1 = celda1Input.value;
    const celda2 = celda2Input.value;
    const celda3 = celda3Input.value;

    // Verificar que todos los campos están completos
    if (celda1 === '' || celda2 === '' || celda3 === '') {
        alert('Por favor, complete todas las celdas antes de añadir una fila.');
        return;
    }

    // Crear la fila y las celdas
    const nuevaFila = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = celda1;
    const td2 = document.createElement('td');
    td2.textContent = celda2;
    const td3 = document.createElement('td');
    td3.textContent = celda3;

    // Crear celda de eliminación
    const tdAccion = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function () {
        nuevaFila.remove();
    });

    tdAccion.appendChild(botonEliminar);

    // Añadir celdas a la fila
    nuevaFila.appendChild(td1);
    nuevaFila.appendChild(td2);
    nuevaFila.appendChild(td3);
    nuevaFila.appendChild(tdAccion);

    // Añadir la fila al cuerpo de la tabla
    tableBody.appendChild(nuevaFila);

    // Limpiar los campos de texto
    celda1Input.value = '';
    celda2Input.value = '';
    celda3Input.value = '';
}

// Función para eliminar la última fila
function eliminarFila() {
    const filas = tableBody.querySelectorAll('tr');
    if (filas.length > 0) {
        filas[filas.length - 1].remove();
    } else {
        alert('No hay filas para eliminar.');
    }
}

// Añadir eventos a los botones
addFila.addEventListener('click', agregarFila);
addFilaBoton.addEventListener('click', agregarFila);
deleteFilaBoton.addEventListener('click', eliminarFila);
