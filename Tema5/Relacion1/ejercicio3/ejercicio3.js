const texarea = document.getElementById("textarea");
const enviar = document.getElementById("enviar");
const limpiar = document.getElementById("limpiarTextArea");
const checkboxContainer = document.getElementById("checkbox-container");

enviar.addEventListener("click", () => {
    // Limpiar cualquier checkbox previo
    checkboxContainer.innerHTML = "";

    // Obtener el texto del textarea y dividirlo en palabras
    const palabras = texarea.value.trim().split(" ");  

    // Si el textarea no está vacío
    if (palabras.length > 0 && palabras[0] !== "") {
        palabras.forEach(palabra => {
            // Crear el checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = palabra;
            checkbox.name = "palabras";

            // Crear la etiqueta
            const label = document.createElement("label");
            label.setAttribute("for", palabra);
            label.textContent = palabra;

            // Añadir el checkbox y la etiqueta al contenedor
            const div = document.createElement("div");
            div.appendChild(checkbox);
            div.appendChild(label);
            checkboxContainer.appendChild(div);
        });
    } else {
        alert("Por favor, ingrese algunas palabras en el área de texto.");
    }
});

limpiar.addEventListener("click", () => {
    texarea.value = "";  // Limpiar el textarea
    checkboxContainer.innerHTML = "";  // Limpiar los checkboxes generados
});
