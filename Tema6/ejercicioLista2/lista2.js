/*Hacer una función para añadir poblaciones a la lista , las poblaciones se pedirán por teclado ,
se añadirá al final de la lista.
Hacer otra función para eliminar poblaciones, se pedirá por teclado el número del elemento de
la lista que se quiere borrar.*/

const lista = document.getElementById("lista");
const addPoblacion = document.getElementById("addPoblacion");
const deletePoblacion = document.getElementById("deletePoblacion");



addPoblacion.addEventListener("click", () => {

    // Pedir por teclado el nombre de la población
    const poblacion = prompt("Introduce el nombre de la población");

    // Si el usuario introduce algo, añadir el nombre de la población al final de la lista
    if (poblacion) {
        const li = document.createElement("li");
        li.innerHTML = poblacion;
        lista.appendChild(li);
    }

});

deletePoblacion.addEventListener("click", () => {
    // Pedir por teclado el número de la población que se quiere borrar
    const numero = prompt("Introduce el número de la población que se quiere borrar");
    if (numero) {
        // Si el usuario introduce algo, eliminar el elemento con ese número
        const li = lista.querySelector(`li:nth-child(${numero})`);
        if (li) {
            lista.removeChild(li);
        }
    }
});