// Función para calcular la media de temperaturas por población
function mediaPoblacion(poblaciones, temperaturas) {
    let medias = []; // Array para almacenar las medias

    console.log(poblaciones);
    for (let i = 0; i < poblaciones.length; i++) {
        let suma = 0; // Suma de temperaturas
        for (let j = 1; j < temperaturas[i].length; j++) { // Empezar en 1 para omitir la poblacion
            suma += temperaturas[i][j];
        }
        let media = suma / (temperaturas[i].length - 1); // Calcular la media
        medias.push(media); // Guardar la media en el array
    }
    return medias; // Devolver el array de medias
}

// Función para encontrar la temperatura más alta en marzo
function temperaturaMarzo(poblaciones, temperaturas) {
    let maxTemperatura = -1000000; // Empezar con el valor más bajo
    let poblacion = '';

    for (let i = 0; i < poblaciones.length; i++) {
        if (temperaturas[i][2] > maxTemperatura) { // Marzo está en el índice 2
            maxTemperatura = temperaturas[i][2];
            poblacion = poblaciones[i];
        }
    }
    return { poblacion: poblacion, temperatura: maxTemperatura }; // Devolver población y temperatura
}

// Función para calcular la media de la temperatura en abril
function mediaAbril(temperaturas) {
    let sumaAbril = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        sumaAbril += temperaturas[i][3]; // Abril está en el índice 3
    }
    return sumaAbril / temperaturas.length; // Calcular y devolver la media
}





// Función para pintar la tabla
function pintarTabla(poblaciones, temperaturas) {
    const tabla = document.createElement('table'); // Crear la tabla
    const filaCabecera = document.createElement('tr'); // Fila para la cabecera

    // CREAMOS LOS TH
    const celdaCabecera = document.createElement('th');
    celdaCabecera.innerHTML = 'Población';
    filaCabecera.appendChild(celdaCabecera);

    // Añadir columnas para cada mes
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
    const medias = mediaPoblacion(poblaciones, temperaturas);
    for (let i = 0; i < meses.length; i++) {
        const celdaMes = document.createElement('th');
        celdaMes.innerHTML = meses[i];
        filaCabecera.appendChild(celdaMes);
    }

    // Mostrar el TH de la cabecera
    const mediaCabecera = document.createElement('th');
    mediaCabecera.innerHTML = 'Media';
    filaCabecera.appendChild(mediaCabecera);
    tabla.appendChild(filaCabecera);

    // Crear filas para cada población
    for (let i = 0; i < poblaciones.length; i++) {
        const fila = document.createElement('tr');
        const celdaPoblacion = document.createElement('td');
        celdaPoblacion.innerHTML = poblaciones[i];
        fila.appendChild(celdaPoblacion); // Añadir nombre de la población

        for (let j = 0; j < temperaturas[i].length; j++) {
            const celdaTemperatura = document.createElement('td');
            celdaTemperatura.innerHTML = temperaturas[i][j];
            fila.appendChild(celdaTemperatura);
        }


        // Meter todas las medias en la tabla
        const celdaMedia = document.createElement("td");
        celdaMedia.innerText = medias[i];
        fila.appendChild(celdaMedia);


        tabla.appendChild(fila); // Añadir fila a la tabla
    }

    document.body.appendChild(tabla); // Añadir tabla al cuerpo del documento
}

// Declaramos los Arrays
let poblaciones = ['Cuevas del Almanzora', 'Granada', 'Madrid', 'Soria', 'Malaga'];
let temperaturas = [
    [12, 13, 15, 18],     // Cuevas del Almanzora
    [4.5, 8, 9, 15],      // Granada
    [4, 5.8, 8, 13],      // Madrid
    [0, 1, 6, 10],        // Soria
    [14, 16.7, 18.4, 20.3] // Malaga
];

// Pintar la tabla
pintarTabla(poblaciones, temperaturas);

let marzoInfo = temperaturaMarzo(poblaciones, temperaturas);
document.write("<h2>Media de Abril: " + mediaAbril(temperaturas) + "</h2>");
document.write("<h2>Temperatura más alta en marzo en Malaga: " + marzoInfo.temperatura + "°C en " + marzoInfo.poblacion + "</h2>");
document.write("<h2>Media de temperaturas por población: " + mediaPoblacion(poblaciones, temperaturas) + "</h2>");
