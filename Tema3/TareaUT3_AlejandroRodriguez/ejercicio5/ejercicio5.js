function separarCadena(cadena) {

    // Separar la cadena con los dos puntos :
    const separador = cadena.split(":");

    // Comprobar que no se superan las posciones
    if (separador.length !== 5) {
        alert("La cadena que has escrito, no está en el formato correcto");
        return;
    }

    // Declaramos las variables necesarias
    const nombre = separador[0];
    const apellidos = separador[1];
    const telefono = separador[2];
    const email = separador[3];
    const codigoPostal = separador[4];

    const servidor = email.split("@")[1];

    document.write("Nombre: " + nombre + "<br>");
    document.write("Apellidos: " + apellidos + "<br>");
    document.write("Telefono: " + telefono + "<br>");
    document.write("Email: " + email + "<br>");
    document.write("Servidor: " + servidor + "<br>")
    document.write("Codigo postal: " + codigoPostal + "<br>");

}

// Solicitar la cadena al usuario
const cadenaEntrada = prompt("Introduce la cadena en el formato: nombre:apellidos:telefono:email:codigopostal");

// Llamar a la funcion
separarCadena(cadenaEntrada);