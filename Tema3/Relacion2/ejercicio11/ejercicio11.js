// Creamos la tabla
const tabla = document.createElement('table');

// ---- ENCABEZADO DE LA TABLA ----

// Empezamos a construir la tabla
const cabeceraTr1 = document.createElement('tr');
const cabeceraCelda1 = document.createElement('th');
cabeceraCelda1.textContent = "Columna 1";

const cabeceraCelda2 = document.createElement('th'); // Crear la celda correctamente
cabeceraCelda2.textContent = "Columna 2"; // Asignar el texto

cabeceraTr1.appendChild(cabeceraCelda1);
cabeceraTr1.appendChild(cabeceraCelda2);
tabla.appendChild(cabeceraTr1);

// ---- INFORMACION DE LA TABLA ----

const tr1 = document.createElement('tr');
const celda1 = document.createElement('td');
celda1.textContent = "Informacion 1";
const celda2 = document.createElement('td');
celda2.textContent = "Informacion 2";

tr1.appendChild(celda1);
tr1.appendChild(celda2);
tabla.appendChild(tr1);

const tr2 = document.createElement('tr');
const celda3 = document.createElement('td');
celda3.textContent = "Informacion 3";
const celda4 = document.createElement('td');
celda4.textContent = "Informacion 4";

tr2.appendChild(celda3);
tr2.appendChild(celda4);
tabla.appendChild(tr2);



document.body.appendChild(tabla);



