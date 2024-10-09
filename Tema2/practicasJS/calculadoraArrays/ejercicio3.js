// Funcion para sumar numeros en el array

/*function sumar(...numeros) {

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}

let funcionSumar = sumar(12, 50, 40)

alert(funcionSumar);*/


const array = [30, 20, 5];

const reduce = array.reduce((prev, curr) => prev + curr)

document.write(reduce)
