const parrafo = document.getElementById("parrafo");
const subrayado = document.getElementById("subrayado");
const fondo = document.getElementById("fondo");
const texto = document.getElementById("texto");
const tamanio = document.getElementById("tamanio");

function subrayar() {
    parrafo.classList.toggle("subrayado");
}

subrayado.addEventListener("click", subrayar, false);
const colores = ["white", "red", "blue", "yellow"];
let contador = 0;

function cambiarFondo() {
    let color;
    if (contador < 4) {
        color = colores[contador];
    } else {
        color = colores[contador % 4];
    }
    contador++;
    parrafo.style.backgroundColor = color;

}

//fondo.addEventListener("click", cambiarFondo);

const colores_texto = ["black", "red", "blue", "yellow"];
let contador2 = 4;

function cambiarTexto() {

    contador2++;
    parrafo.style.color = colores_texto[contador2 % 4];

}

// texto.addEventListener("click", cambiarTexto);

const tamanio_texto = ["medium", "x-large", "xx-large"];
let contador3 = 3;

function cambiarTamanio() {
    contador3++;
    parrafo.style.fontSize = tamanio_texto[contador3 % 3];
}

// tamanio.addEventListener("click", cambiarTamanio);