window.onload = iniciar;

function iniciar() {
    document.getElementById("nombre").addEventListener('blur', mayusculas, false);
    document.getElementById("apellidos").addEventListener('blur', mayusculas, false);
    document.getElementById("enviar").addEventListener('click', validarTodo, false);

}


function validarTodo(evento) {
    let camposCorrectos = true;

    if (!comprobarNombre()) {
        camposCorrectos = false;
    }
    if (!comprobarApellidos()) {
        camposCorrectos = false;
    }
    if (!comprobarEdad()) {
        camposCorrectos = false;
    }
    if (!comprobarNIF()) {
        camposCorrectos = false;
    }

    if (!comprobarSegSocial()) {
        camposCorrectos = false;
    }

    if (!comprobarTelefono()) {
        camposCorrectos = false;
    }

    if (!comprobarTarjetaCredito()) {
        camposCorrectos = false;
    }

    if (!comprobarContrasena()) {
        camposCorrectos = false;
    }

    if (!verificarContrasena()) {
        camposCorrectos = false;
    }


    // Si todas las validaciones son correctas
    if (camposCorrectos) {
        if (confirm("¿Deseas enviar el formulario?")) {
            contadorIntenos();
            limpiarFormulario();
            return true;  // El formulario se envía
        } else {
            evento.preventDefault();  // Si el usuario cancela, no se envía el formulario
            return false;
        }
    } else {
        evento.preventDefault();  // Impide el envío del formulario
        return false;
    }
}

function comprobarNombre() {
    let nombre = document.getElementById("nombre");
    const patronNombre = /^[a-zA-Z\s]+$/;
    nombre.className = "";

    if (nombre.value === "") {
        nombre.focus();
        nombre.className = "error";
        alert("El nombre no puede estar vacío");
        return false;
    } else if (!patronNombre.test(nombre.value)) {
        nombre.focus();
        nombre.className = "error";
        alert("El nombre no es válido");
        return false;
    } else {
        nombre.className = "";
        return true;
    }
}

function comprobarApellidos() {
    let apellidos = document.getElementById("apellidos");
    const patronApellidos = /^[a-zA-Z\s]+$/;
    apellidos.className = "";

    if (apellidos.value === "") {
        apellidos.focus();
        apellidos.className = "error";
        alert("Los apellidos no pueden estar vacíos");
        return false;
    } else if (!patronApellidos.test(apellidos.value)) {
        apellidos.focus();
        apellidos.className = "error";
        alert("Los apellidos no son válidos");
        return false;
    } else {
        apellidos.className = "";
        return true;
    }
}


function comprobarEdad() {
    let edad = document.getElementById("edad");
    edad.className = "";

    // Verificar si la edad es un número y si es mayor o igual a 18
    let edadValor = parseInt(edad.value);  // Convertimos el valor a un número

    if (edad.value === "") {
        edad.focus();
        edad.className = "error";
        alert("La edad no puede estar vacía");
        return false;
    } else if (isNaN(edadValor) || edadValor < 18) {  // Verificamos si no es un número o es menor que 18
        edad.focus();
        edad.className = "error";
        alert("Debes ser mayor de edad y el valor debe ser un número válido");
        return false;
    } else {
        edad.className = "";
        return true;
    }
}

function comprobarNIF() {
    let nif = document.getElementById("nif");
    const patronNIF = /^\d{8}[A-Z]$/;
    nif.className = "";

    if (nif.value === "") {
        nif.focus();
        nif.className = "error";
        alert("El NIF no puede estar vacío");
        return false;
    } else if (!patronNIF.test(nif.value)) {
        nif.focus();
        nif.className = "error";
        alert("El NIF no es válido");
        return false;
    } else {
        nif.className = "";
        return true;
    }
}

function comprobarSegSocial() {
    let seguridadSocial = document.getElementById("seguridadSocial");
    const patronSegSocial = /^[0-9]{2}\s?[0-9]{8,10}$/;
    seguridadSocial.className = "";

    if (seguridadSocial.value === "") {
        seguridadSocial.focus();
        seguridadSocial.className = "error";
        alert("El Nº de seguridad social no puede estar vacío");
        return false;
    } else if (!patronSegSocial.test(seguridadSocial.value)) {
        seguridadSocial.focus();
        seguridadSocial.className = "error";
        alert("El Nº de seguridad social no es válido");
        return false;
    } else {
        seguridadSocial.className = "";
        return true;
    }

}

function comprobarTelefono() {
    let telefono = document.getElementById("telefono");
    const patronTelefono = /^\d{9}$/;
    telefono.className = "";

    if (telefono.value === "") {
        telefono.focus();
        telefono.className = "error";
        alert("El teléfono no puede estar vacío");
        return false;
    } else if (!patronTelefono.test(telefono.value)) {
        telefono.focus();
        telefono.className = "error";
        alert("El teléfono no es válido");
        return false;
    } else {
        telefono.className = "";
        return true;
    }
}

function comprobarTarjetaCredito() {
    let tarjetaCredito = document.getElementById("tarjetaCredito");
    const patronTarjeta = /^\d{13,19}$/;
    tarjetaCredito.className = "";

    if (tarjetaCredito.value === "") {
        tarjetaCredito.focus();
        tarjetaCredito.className = "error";
        alert("La tarjeta de crédito no puede estar vacía");
        return false;
    } else if (!patronTarjeta.test(tarjetaCredito.value)) {
        tarjetaCredito.focus();
        tarjetaCredito.className = "error";
        alert("La tarjeta de crédito no es válida");
        return false;
    } else {
        tarjetaCredito.className = "";
        return true;
    }
}

function comprobarContrasena() {
    let contrasena = document.getElementById("contrasena");
    const patronContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (contrasena.value === "") {
        contrasena.focus();
        contrasena.className = "error";
        alert("La contraseña no puede estar vacía");
        return false;
    } else if (!patronContrasena.test(contrasena.value)) {
        contrasena.focus();
        contrasena.className = "error";
        alert("La contraseña no es válida");
        return false;
    } else {
        contrasena.className = "";
        return true;
    }

}

function verificarContrasena() {
    let verifContrasena = document.getElementById("confirmarContrasena");
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


function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("nif").value = "";
    document.getElementById("seguridadSocial").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("tarjetaCredito").value = "";
    document.getElementById("contrasena").value = "";
    document.getElementById("confirmarContrasena").value = "";
}

function mayusculas() {
    this.value = this.value.toUpperCase();
}

function contadorIntenos() {
    let contador = 0;

    // Obtener el valor actual del contador en la cookie
    if (document.cookie == "") {
        document.cookie = "contador=0";
    }

    // Extraer el contador de la cookie
    contador = parseInt(document.cookie.substring(9)) || 0;
    contador++;

    // Actualizar la cookie con el nuevo valor del contador
    document.cookie = "contador=" + contador;

    // Mostrar el número de intentos en el div con id 'contador'
    document.getElementById("contador").innerHTML = "Has enviado el formulario " + contador + " veces";

    return true;
}


