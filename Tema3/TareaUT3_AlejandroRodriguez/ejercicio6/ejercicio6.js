
// Guardamos cada campo con su id correspondiente
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Para cuando le de al boton no se envie el formulario y compruebe todo antes de enviarlo

    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const aficiones = document.getElementById("aficiones").value;

    // Hacer comprobaciones para cada uno

    if (!nombre) {
        alert("El nombre es obligatorio");
        return;
    }

    // Este campo en su propia etiqueta input tiene un min:18 y un max 120 años por lo cual no haría falta comprobarlo aquí tambien
    if (!edad) {
        alert("Debe ingresar su edad");
        return;
    }


    if (!aficiones) {
        alert("Tienes que seleccionar una afición");
        return;
    }

    // Abrir ventana de verificación del formulario
    const ventanaNueva = window.open("", "Validación de formulario", "width=500,height=500");

    ventanaNueva.document.write(` 
        <html>
            <head>
                <title>Validación de formulario</title>
                <style>
                    body { text-align: center; }
                </style>
            </head>
            <body>
                <h1>Datos ingresados</h1>
                <p>Nombre: ${nombre}</p>
                <p>Edad: ${edad}</p>
                <p>Afición: ${aficiones}</p>
                <input type="color" id="colorPicker" value="#ffffff" onchange="document.body.style.backgroundColor = this.value;">
            </body>
        </html>
    `);

    ventanaNueva.document.close();
});
