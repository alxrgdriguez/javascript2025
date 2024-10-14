function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generarNumeros = [];

for (let i = 1; i <= 6; i++) {
    generarNumeros.push(random(1, 49));
}

document.write(generarNumeros)