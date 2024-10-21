function esPrimo(num) {
    if (num <= 1)
        return false; // Números menores o iguales a 1 no son primos

    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false; // Si se encuentra un divisor, no es primo
    }
    return true; // Si no se encontró ningún divisor, es primo
}

function esPalindromo(num) {
    const cadena = num.toString(); // Convertimos el numero a cadena
    return cadena === cadena.split('').reverse().join(''); // Separa los elementos para ponerlos en sentido contrario
}

const primosYPalindromos = [];

for (let i = 1; i <= 100000; i++) {
    if (esPrimo(i) && esPalindromo(i)) {
        primosYPalindromos.push(i);
    }
}

document.write(primosYPalindromos.join(', ') + '<br><br>'); // Con Join pondremos un separador para separar cada numero por una coma
