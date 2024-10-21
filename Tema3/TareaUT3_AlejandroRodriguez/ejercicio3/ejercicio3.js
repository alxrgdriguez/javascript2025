function letraDNI(letra) {
    // Definimos las letras del alfabeto
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const dnis = [];

    // Generamos los DNIs combinando números y letras
    for (let i = 1; i <= 999; i++) {
        // Generamos el número con padStart
        const numeroDNI = i.toString().padStart(3, '0');

        // Añadimos un DNI para cada letra
        for (let j = 0; j < letras.length; j++) {
            const letraDNI = letras[j];
            dnis.push(`${numeroDNI}${letraDNI}`);
        }
    }

    // Filtramos los DNIs que tengan la letra específica
    const filtrarDNI = dnis.filter(dni => dni.includes(letra));
    return filtrarDNI;
}

function pedirLetra() {
    // Pedimos la letra al usuario
    const letra = prompt("Introduce una letra de la A a la Z: ").toUpperCase();

    // Comprobamos que la letra introducida sea la correcta
    if (letra.length !== 1 || !/^[A-Z]$/.test(letra)) {
        alert("Error, nos has escrito una letra válida de la A a la Z.");
        return;
    }

    // Obtener los DNIS que contienen la letra
    const dnis = letraDNI(letra);

    // Mostramos los resultados
    document.write(`Número de DNIS que contienen la letra ${letra}: ${dnis.length}<br>`);
    document.write(`DNIS -> ${dnis.join(", ")}`);
}

// Llamamos a la función
pedirLetra();