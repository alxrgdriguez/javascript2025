window.onload = inicio();

function inicio() {
    document.getElementById("nombre").addEventListener('blur', mayusculasRestoMinsculas, false);
    document.getElementById("apellidos").addEventListener('blur', mayusculasRestoMinsculas, false);
    document.getElementById("formPerfil").addEventListener('submit', validarTodo, false);
}

// Funcion para validar todos los campos
function validarTodo(eventoPorDefecto) {
    if ((comprobarNombre()) && (comprobarApellidos()) && (comprobarContrasena()) && (comprobarFechaNacimiento()) && confirm("Deseas enviar el formulario?")) {
        return true;
    } else {
        eventoPorDefecto.preventDefault();
        return false;
    }

}

// Funcion para comprobar el campo Nombre
// Expresión regular para validar para que solo contenga letras y caracteres
let letrasYCaracteres = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s.,!?¿¡]*$/;

function comprobarNombre() {
    let nombre = document.getElementById("nombre");

    nombre.className = "";

    if (nombre.value === "") {
        nombre.focus();
        nombre.className = "error";
        alert("El nombre no puede estar vacío");
        return false;
    } else if (!letrasYCaracteres.test(nombre.value)) {
        nombre.focus();
        nombre.className = "error";
        alert("El nombre solo puede contener letras y caracteres");
        return false;
    } else {
        nombre.className = "";
        return true;
    }
}

function comprobarApellidos() {
    let apellidos = document.getElementById("apellidos");
    apellidos.className = "";

    if (apellidos.value === "") {
        apellidos.focus();
        apellidos.className = "error";
        alert("Los apellidos no pueden estar vacíos");
        return false;
    } else if (!letrasYCaracteres.test(apellidos.value)) {
        apellidos.focus();
        apellidos.className = "error";
        alert("Los apellidos solo pueden contener letras y caracteres");
        return false;
    } else {
        apellidos.className = "";
        return true;
    }
}

function comprobarContrasena() {
    let contrasena = document.getElementById("contrasena").value;
    let validarContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[;,.\\-])[A-Za-z\d;,.\\-]+$/;

    if (validarContrasena.test(contrasena)) {
        document.getElementById("contrasena").className = "";
        return true;
    } else {
        document.getElementById("contrasena").className = "error";
        alert("La contraseña tiene que contener letras, números y caracteres especiales");
        return false
    }
}

function verificarContrasena() {
    let verifContrasena = document.getElementById("verif_contrasena");
    verifContrasena.className = "";

    if (verifContrasena.value === "") {
        verifContrasena.focus();
        verifContrasena.className = "error";
        alert("La contraseña no puede estar vacía");
        return false;
    } else if (verifContrasena.value !== contrasena.value) {
        verifContrasena.focus();
        verifContrasena.className = "error";
        alert("Las contraseñas no coinciden");
        return false;
    } else {
        verifContrasena.className = "";
        return true;
    }
}

function comprobarFechaNacimiento() {
    let fechaNacimiento = document.getElementById("fecha_nacimiento");
    fechaNacimiento.className = "";

    if (fechaNacimiento.value === "") {
        fechaNacimiento.focus();
        fechaNacimiento.className = "error";
        alert("La fecha de nacimiento no puede estar vacía");
        return false;
    } else if (!fechaNacimiento.value.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        fechaNacimiento.focus();
        fechaNacimiento.className = "error";
        alert("La fecha de nacimiento debe tener el formato dd/mm/aaaa");
        return false;
    } else {
        fechaNacimiento.className = "";
        return true;
    }
}



// Función para convertir la primera letra a mayúscula y el resto a minúsculas
function mayusculasRestoMinsculas() {
    let texto = this.value;
    this.value = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}