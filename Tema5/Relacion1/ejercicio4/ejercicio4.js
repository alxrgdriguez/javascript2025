const enviar = document.getElementById('enviar');
const palabras = document.getElementsByName('palabras');
const textarea = document.getElementById('textarea');
let palabrasSeleccionadas = '';

enviar.addEventListener('click', function () {
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].checked) {
            palabrasSeleccionadas += palabras[i].id + ' ';
            // Cuando le de a enviar quitar todos los checkeados
            palabras[i].checked = false;
        }
    }
    textarea.value = palabrasSeleccionadas;
});


// Comprobar que las palabras no se repitan




// Limpiar el textarea
const limpiarTextArea = document.getElementById('limpiarTextArea');
limpiarTextArea.addEventListener('click', function () {
    textarea.value = '';
});