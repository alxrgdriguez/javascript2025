window.onload = inicio;

function inicio() {
    document.getElementById("nombre").addEventListener('blur', mayusculasRestoMinsculas, false);
    document.getElementById("apellidos").addEventListener('blur', mayusculasRestoMinsculas, false);
    document.getElementById("formPerfil").addEventListener('submit', validarTodo, false);
}

// Función para validar todos los campos
function validarTodo(eventoPorDefecto) {
    let camposCorrectos = true;

    // Validamos cada campo
    if (!comprobarNombre()) {
        camposCorrectos = false;
    }
    if (!comprobarApellidos()) {
        camposCorrectos = false;
    }
    if (!comprobarContrasena()) {
        camposCorrectos = false;
    }
    if (!verificarContrasena()) {
        camposCorrectos = false;
    }
    if (!comprobarFechaNacimiento()) {
        camposCorrectos = false;
    }

    // Si alguna validación falla, no se envía el formulario
    if (!camposCorrectos) {
        eventoPorDefecto.preventDefault();
        return false;
    }

    // Si todo es correcto, mostramos los resultados
    mostrarResultado();

    // Evitamos el envío real del formulario
    eventoPorDefecto.preventDefault();

    return true;
}

// Función para mostrar los resultados
function mostrarResultado() {

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let contrasena = document.getElementById("contrasena").value;
    let fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    // Creamos el contenido a mostrar en el resultado
    let resultadoHTML = `
        <h3>Resumen del Formulario:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Contraseña:</strong> ${contrasena}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
    `;

    // Mostramos el resultado en <p id="resultado">
    document.getElementById("resultado").innerHTML = resultadoHTML;
}

let letrasYCaracteres = /^[a-zA-Z]+$/;;

// Función para comprobar el nombre
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

// Función para comprobar los apellidos
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

// Función para comprobar la contraseña
function comprobarContrasena() {
    let contrasena = document.getElementById("contrasena").value;
    let validarContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[;,.\\-])[a-zA-Z\d;,.\\-]*\d+(\.\d+)?$/;


    // Verifica si la contraseña coincide con el patrón
    if (validarContrasena.test(contrasena)) {
        document.getElementById("contrasena").className = "";
        return true;
    } else {
        document.getElementById("contrasena").className = "error";
        alert("La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, números, caracteres especiales como ;,.- e incluso numero decimal");
        return false;
    }
}

// Función para verificar la contraseña 
function verificarContrasena() {
    let verifContrasena = document.getElementById("verif_contrasena");
    let contrasena = document.getElementById("contrasena");

    if (verifContrasena.value === "") {
        verifContrasena.focus();
        verifContrasena.className = "error";
        alert("El campo de verificación de contraseña no puede estar vacío");
        return false;
    } else if (verifContrasena.value !== contrasena.value) {
        verifContrasena.focus();
        verifContrasena.classList = "error";
        alert("Las contraseñas no coinciden");
        return false;

    } else {
        verifContrasena.className = "";
        return true;
    }
}

// Función para comprobar la fecha de nacimiento
function comprobarFechaNacimiento() {
    let fechaNacimiento = document.getElementById("fecha_nacimiento");
    let fecha = fechaNacimiento.value;
    let fechaFormato = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (fecha === "") {
        fechaNacimiento.focus();
        fechaNacimiento.className = "error";
        alert("La fecha de nacimiento no puede estar vacía");
        return false;
    } else if (!fechaFormato.test(fecha)) {
        fechaNacimiento.focus();
        fechaNacimiento.className = "error";
        alert("La fecha de nacimiento debe tener el formato dia/mes/año");
        return false;
    } else {
        fechaNacimiento.className = "";
        return true;
    }
}

// Función para decir que la primera letra de cada palabra es mayúscula y la resta es minúscula
function mayusculasRestoMinsculas() {
    let texto = this.value;
    return this.value = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}
