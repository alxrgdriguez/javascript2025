// Ejercicio donde se diga el mayor de 3 numeros de un array


function mayorTres(...numeros) {

    /*if (numeros.length !== 3) {
        //throw new Error("El array debe contener exactamente 3 numeros");

    }*/

    return Math.max(...numeros);

}

let numero1 = parseInt(prompt("Introduce un numero: "));
let numero2 = parseInt(prompt("Introduce el segudno numero: "));
let numero3 = parseInt(prompt("Introduce el tercer numero: "));

alert(mayorTres(numero1, numero2, numero3))