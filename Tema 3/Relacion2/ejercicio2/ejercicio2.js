let parrafo = "";

parrafo = document.getElementsByTagName("p");
parrafo.textContent = "Hello";

// Verifica si hay al menos un elemento <p>
if (parrafo.length > 0) {
    // Cambia el texto del primer <p>
    parrafo[0].textContent = 'Hello';
}