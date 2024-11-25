/*Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra.
Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario introduzca un texto.
Una vez cerrado el prompt el valor se añadirá como un nuevo <li> a la lista creada.
Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que cuando pulses el primer botón borre el primer elemento de la lista y cuando pulses el último borre el último elemento de la lista.*/

const lista = document.getElementById("lista");
const agregarTexto = document.getElementById("addText");
const borrarPrimerElemento = document.getElementById("deleteFirst");
const borrarUltimoElemento = document.getElementById("deletelast");


agregarTexto.addEventListener("click", () => {
    const texto = prompt("Introduce un texto");
    if (texto) {
        const li = document.createElement("li");
        li.innerHTML = texto;
        lista.appendChild(li);
    }
});


borrarPrimerElemento.addEventListener("click", () => {
    const li = lista.firstElementChild;
    if (li) {
        lista.removeChild(li);
    }
});

borrarUltimoElemento.addEventListener("click", () => {
    const li = lista.lastElementChild;
    if (li) {
        lista.removeChild(li);
    }
});


