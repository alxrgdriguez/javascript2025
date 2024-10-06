
// Declaramos las variables y las pedimos al usuarioa
const filas = parseInt(prompt("Introduce el número de filas:"));
const columnas = parseInt(prompt("Introduce el número de columnas:"));

// Crear tabla
const tabla = document.createElement('table');

for (let i = 0; i < filas; i++) {
    const fila = document.createElement('tr');
    for (let j = 0; j < columnas; j++) {
        const celda = document.createElement('td');

        // Pintar de amarillo si la columna es par
        if (j % 2 === 0) {
            celda.style.backgroundColor = 'yellow';
        }
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
}



// Agregar la tabla al html
document.body.appendChild(tabla);

