window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validarTodo, false);
    document.getElementById("nombre").addEventListener('blur', mayusculas, false);
    document.getElementById("apellidos").addEventListener('blur', mayusculas, false);
    document.getElementById("fecha").addEventListener('blur', validarFecha, false);
    document.getElementById("hora").addEventListener('blur', validarHora, false);
    document.getElementById("provincia").addEventListener('change', validarProvincia, false);
    document.getElementById("telefono").addEventListener('blur', validarTelefono, false);

}

function mayusculas() {
    this.value = this.value.toUpperCase();
}

function validarTodo() {
    if (validarNombre() && confirm("Deseas enviar el formulario?"))
        return true;
    else {
        eventoPorDefecto.preventDefault();
        return false;
    }
}

function validarNombre() {
    let nombre = document.getElementById("nombre");

    nombre.className = "";

    if (nombre.value === "") {
        nombre.focus();
        nombre.className = "error";
        alert("El nombre no puede estar vacío");
        return false;
    } else {
        nombre.className = "";
        return true;
    }
}
