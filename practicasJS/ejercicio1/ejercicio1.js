// Funcion para decir si es primo

function esPrimo(numero) {

    if (numero % 2 === 0) {
        return false;
    }

    for (let i = 2; i < numero / 2; i++) {

        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

let filas;
let columnas;

filas = (parseInt(prompt("Introduce un numero de filas: ")));
columnas = (parseInt(prompt("Introduce un numero de columnas: ")));

function pintarTabla() {

    const tabla = document.createElement("table");

    for (let i = 1; i <= filas; i++) {
        const tr = document.createElement("tr");

        for (let j = 1; j <= columnas; j++) {
            const td = document.createElement("td");
            if (esPrimo(j)) {

                td.style.backgroundColor = "yellow";
            }
            td.innerText = `${i} ${j}`
            tr.appendChild(td);

        }
        tabla.appendChild(tr);
    }


    document.body.appendChild(tabla)

}

pintarTabla();