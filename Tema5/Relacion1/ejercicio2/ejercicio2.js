const enviar = document.getElementById('enviar');
const nombres = document.getElementsByName('nombre');
const textarea = document.getElementById('textarea');
let nombresSeleccionados = '';
enviar.addEventListener('click', function () {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].checked) {
            nombresSeleccionados += nombres[i].id + ' ';
        }

        // Cuando le de a enviar quitar todos los checkeados
        nombres[i].checked = false;
    }
    textarea.value = nombresSeleccionados;
});



