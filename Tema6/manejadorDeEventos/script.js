window.onload = iniciar;

function iniciar() {
    // Agregar eventos a párrafos, botón y título
    const elementos = document.querySelectorAll("#contenedor p, #contar, h1");
    elementos.forEach(elemento => {
        elemento.addEventListener("click", manejador, false);
        elemento.addEventListener("mouseover", manejador, false);
        elemento.addEventListener("mouseout", manejador, false);
    });
}

function manejador(evento) {

    switch (evento.type) {
        case "click":
            if (evento.target.id === "cambiarTexto") {
                const nuevoTexto = prompt("Ingrese el nuevo texto:");
                if (nuevoTexto) {
                    evento.target.innerHTML = nuevoTexto;
                }
            } else if (evento.target.id === "contar") {
                const parrafos = document.querySelectorAll("#contenedor p");
                alert(`El documento tiene ${parrafos.length} párrafos.`);
            }
            break;

        case "mouseover":
            if (evento.target.tagName === "H1") {
                evento.target.style.backgroundColor = "orange";
                evento.target.style.fontSize = "32px";
                evento.target.style.padding = "10px";
            }
            break;

        case "mouseout":
            if (evento.target.tagName === "H1") {
                evento.target.style.backgroundColor = "";
                evento.target.style.fontSize = "";
            }
            break;

        default:
            break;
    }
}



