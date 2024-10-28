
// Creamos el objeto cd_musica
class cd_musica {
    constructor(titulo, grupo, fecha) {
        this.titulo = titulo;
        this.grupo = grupo;
        this.fecha = fecha;
    }

    // Metodo para imprimir los datos del objeto cd_musica

    imprimirDatos() {
        document.write("Título: " + this.titulo);
        document.write("<br>");
        document.write("Grupo: " + this.grupo);
        document.write("<br>");
        document.write("Fecha: " + this.fecha);
        document.write("<br>");

    }
}

// Crear instancias de cd_musica y meterlos en un array
let instancias = [];
instancias.push(new cd_musica("La vida es un carnaval", "Rock", new Date(2003, 2, 10)));
instancias.push(new cd_musica("El camino de la vida", "Pop", new Date(1983, 1, 2)));
instancias.push(new cd_musica("La vida es un carnaval", "Animada", new Date(2012, 1, 3)));

// Imprimir los datos de cada instancia
for (let i = 0; i < instancias.length; i++) {
    instancias[i].imprimirDatos();
    document.write("<br>");
}