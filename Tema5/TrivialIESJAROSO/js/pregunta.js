window.onload = inicio;

function inicio() {
    document.getElementById("formPregunta").addEventListener('submit', validarTodo, false);
}

// Función para validar todo el formulario
function validarTodo(eventoPorDefecto) {
    let camposCorrectos = true;

    // Validamos cada campo
    if (!comprobarCategoria()) {
        camposCorrectos = false;
    }
    if (!comprobarPregunta()) {
        camposCorrectos = false;
    }
    if (!comprobarRespuestas()) {
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

    let categoria = document.getElementById("categoria").value;
    let pregunta = document.getElementById("pregunta").value;
    let respuesta1 = document.getElementById("respuesta1").value;
    let respuesta2 = document.getElementById("respuesta2").value;
    let respuesta3 = document.getElementById("respuesta3").value;
    let respuesta4 = document.getElementById("respuesta4").value;

    // Creamos el contenido a mostrar en el resultado
    let resultadoHTML = `
        <h3>Resumen del Formulario:</h3>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p><strong>Pregunta:</strong> ${pregunta}</p>
        <p><strong>Respuesta 1:</strong> ${respuesta1}</p>
        <p><strong>Respuesta 2:</strong> ${respuesta2}</p>
        <p><strong>Respuesta 3:</strong> ${respuesta3}</p>
        <p><strong>Respuesta 4:</strong> ${respuesta4}</p>
    `;

    // Mostramos el resultado en <div id="resultadoPregunta"</div>
    document.getElementById("resultadoPregunta").innerHTML = resultadoHTML;
}

// Función para comprobar la categoria
function comprobarCategoria() {
    let categoria = document.getElementById("categoria");
    categoria.className = "";

    if (categoria.value === "") {
        categoria.focus();
        categoria.className = "error";
        alert("La categoria no puede estar vacía");
        return false;
    } else {
        categoria.className = "";
        return true;
    }
}

// Función para validar la pregunta
function comprobarPregunta() {
    let pregunta = document.getElementById("pregunta").value;
    const patronPregunta = /^[A-Z][a-zA-ZáéíóúÁÉÍÓÚ\s¡!¿?.,;]*[\w\s]+(\?)?$/;

    if (!patronPregunta.test(pregunta)) {
        alert("La pregunta no es válida. Debe comenzar con mayúscula y solo contener letras, espacios y puntuación permitida.");
        return false;
    }
    return true;
}

// Función para validar las respuestas
function comprobarRespuestas() {
    const respuestas = [
        document.getElementById("respuesta1").value,
        document.getElementById("respuesta2").value,
        document.getElementById("respuesta3").value,
        document.getElementById("respuesta4").value
    ];

    // Verificar que todas las respuestas estén completas
    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i] === "") {
            alert("Todas las respuestas deben estar completas.");
            return false;
        }
    }

    // Verificar que se haya seleccionado una respuesta correcta
    const respuestasCorrectas = document.querySelectorAll('input[name="respuesta"]:checked');
    if (respuestasCorrectas.length !== 1) {
        alert("Debes seleccionar una respuesta correcta.");
        return false;
    }

    return true;
}

// Función para mostrar los resultados
function mostrarResultado() {
    const pregunta = document.getElementById("pregunta").value;
    const categoria = document.getElementById("categoria").value;
    const respuestas = [
        document.getElementById("respuesta1").value,
        document.getElementById("respuesta2").value,
        document.getElementById("respuesta3").value,
        document.getElementById("respuesta4").value
    ];

    const respuestaCorrecta = document.querySelector('input[name="respuesta"]:checked').value;

    let resultadoHTML = `
        <h3>Pregunta en la categoría: ${categoria}</h3>
        <p><strong>Pregunta:</strong> ¿${pregunta}?</p>
        <p><strong>Respuestas:</strong></p>
        <ol>
            <li>${respuestas[0]} ${respuestaCorrecta == "1" ? "(Correcta)" : ""}</li>
            <li>${respuestas[1]} ${respuestaCorrecta == "2" ? "(Correcta)" : ""}</li>
            <li>${respuestas[2]} ${respuestaCorrecta == "3" ? "(Correcta)" : ""}</li>
            <li>${respuestas[3]} ${respuestaCorrecta == "4" ? "(Correcta)" : ""}</li>
        </ol>
    `;

    // Mostramos el resultado en el div correspondiente
    document.getElementById("resultadoPregunta").innerHTML = resultadoHTML;
}