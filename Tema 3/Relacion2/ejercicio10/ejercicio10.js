// Función para contar el número total de elementos de una página
function contarElementos() {
    // Guardamos todos los elementos de nuestra página
    const elementos = document.body.getElementsByTagName('*');

    // Mostrar el total de elementos
    document.write('Total de elementos en el documento:', elementos.length);
}

// Ejecutar la función
contarElementos();
