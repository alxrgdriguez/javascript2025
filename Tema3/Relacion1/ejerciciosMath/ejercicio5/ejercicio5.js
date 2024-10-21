function esMayor(...numeros) {
    return Math.max(...numeros);
}

function esMenor(...numeros) {
    return Math.min(...numeros);
}

const numeros = [12, 15, 18, 20];

document.write("Mayor: " + esMayor(...numeros) + "<br>");
document.write("Menor: " + esMenor(...numeros));