function generarQuiniela() {
    const resultados = [];
    const opciones = ['1', 'X', '2'];

    for (let i = 0; i < 15; i++) {
        const resultadoAleatorio = opciones[Math.floor(Math.random() * opciones.length)];
        resultados.push(resultadoAleatorio);
    }

    return resultados;
}

const quiniela = generarQuiniela();

document.write(quiniela);
