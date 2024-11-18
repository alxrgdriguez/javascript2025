window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validarTodo, false);
    document.getElementById("nombre").addEventListener('blur', mayusculas, false);
    document.getElementById("apellidos").addEventListener('blur', mayusculas, false);
    document.getElementById("matricula").addEventListener('blur', mayusculas, false);

}

function validarTodo(eventoPorDefecto) {
    if ((comprobarNombre()) && (comprobarApellidos()) && (comprobarEdad()) && (comprobarMatricula()) && confirm("Deseas enviar el formulario?")) {
        return true;
    } else {
        eventoPorDefecto.preventDefault();
        return false;
    }

}

function mayusculas() {

    this.value = this.value.toUpperCase();
}

function comprobarNombre() {
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

function comprobarApellidos() {
    let apellidos = document.getElementById("apellidos");
    apellidos.className = "";

    if (apellidos.value === "") {
        apellidos.focus();
        apellidos.className = "error";
        alert("Los apellidos no pueden estar vacíos");
        return false;
    } else {
        apellidos.className = "";
        return true;
    }
}

function comprobarEdad() {
    let edad = document.getElementById("edad");
    edad.className = "";

    if (edad.value === "") {
        edad.focus();
        edad.className = "error";
        alert("La edad no puede estar vacía");
        return false;
    } else if (edad.value < 18) {
        edad.focus();
        edad.className = "error";
        alert("Debes ser mayor de edad");
        return false;
    } else {
        edad.className = "";
        return true;
    }
}

function comprobarMatricula() {
    let matricula = document.getElementById("matricula");
    const patron = matricula.value.match(/^\d{4}\s?[A-Z]{3}$/);

    if (patron.test(matricula.value)) {
        matricula.className = "";
        return true;
    } else {
        matricula.focus();
        matricula.className = "error";
        alert("La matrícula no es válida");
        return false;
    }


}

function contadorIntenos() {
    let contador = 0;
    if (document.cookie == "") {
        document.cookie = "contador=0";
    }

    contador = document.cookie.substring(9);
    contador++;
    document.cookie = "contador=" + contador;
    alert("Has enviado el formulario " + contador + " veces");
    return true;
}

