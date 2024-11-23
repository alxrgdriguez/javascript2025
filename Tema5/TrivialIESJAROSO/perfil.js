window.onload = inicio();

function inicio() {
    document.getElementById("nombre").addEventListener('blur', mayusculasRestoMinsculas, false);
    document.getElementById("apellidos").addEventListener('blur', mayusculasRestoMinsculas, false);
    document.getElementById("formPerfil").addEventListener('submit', validarTodo, false);
}

// Funcion para validar todos los campos
function validarTodo(eventoPorDefecto) {
    if ((comprobarNombre()) && (comprobarApellidos()) && (comprobarContrasena()) && (comprobarFechaNacimiento()) && (verificarContrasena()) && confirm("Deseas enviar el formulario?")) {
        return true;
    } else {
        eventoPorDefecto.preventDefault();
        return false;
    }
}

let letrasYCaracteres = /^[a-zA-Z]+$/;;

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

    // Expresión regular revisada
    let validarContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[;,.\-])[A-Za-z\d;,.\-]{8,}$/;

    if (validarContrasena.test(contrasena)) {
        document.getElementById("contrasena").className = ""; // Sin error
        return true;
    } else {
        document.getElementById("contrasena").className = "error"; // Marca error
        alert("La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, números y caracteres especiales como ;,.-");
        return false;
    }
}

// Función para verificar las contraseñas
function verificarContrasena() {
    let contrasena = document.getElementById("contrasena");
    let verifContrasena = document.getElementById("verif_contrasena");

    verifContrasena.className = "";

    if (verifContrasena.value === "") {
        verifContrasena.focus();
        verifContrasena.className = "error";
        alert("La confirmación de la contraseña no puede estar vacía");
        return false;
    }

    if (verifContrasena.value !== contrasena.value) {
        verifContrasena.focus();
        verifContrasena.className = "error";
        alert("Las contraseñas no coinciden");
        return false;
    } else {
        verifContrasena.className = "";
        return true;
    }
}

function verificarDate() {
    let fechaN = document.getElementById("fecha_nacimiento")
    const p = $("#fecha-nac-error")
    const patronFecha = /^\d{2}\/\d{2}\/\d{4}$/

    if (fechaN.value.trim() === "" || !patronFecha.test(fechaN.value.trim())) {
        p.innerText = "La fecha tiene que tener el formato dd/mm/aaaa"
        fechaN.className = "error"
        return false
    } else {
        fechaN.className = ""
        return true
    }

}

function mayusculasRestoMinsculas() {
    let texto = this.value;
    this.value = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}
