

// Selecciona todos los elementos <p>
const parrafos = document.querySelectorAll('p'); //Representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.

document.getElementById('cambiarTexto').addEventListener('click', function () { // addEventListener registra un evento a un objeto en específico.

    // TextContent cambia el contenido y Style el color de <p>
    parrafos.forEach(parrafo => {
        parrafo.textContent = 'Este es el nuevo contenido.';
        parrafo.style.color = 'green';
    });
});