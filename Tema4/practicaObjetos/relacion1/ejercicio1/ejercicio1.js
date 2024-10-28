
// Crear el objeto producto_alimenticio
class producto_alimenticio {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    // Metodo que imprime los datos del producto_alimenticio
    imprimirDatos() {
        document.write("Codigo: " + this.codigo);
        document.write("<br>");
        document.write("Nombre: " + this.nombre);
        document.write("<br>");
        document.write("Precio: " + this.precio + "€");
        document.write("<br>"); document.write("<br>");
    }


}

// Crear instancias de producto_alimenticio y meterlos en un array
let instacias = [];
instacias.push(new producto_alimenticio(1, "Manzana", 10));

instacias.push(new producto_alimenticio(2, "Mandarina", 20));
document.write("<br>");
instacias.push(new producto_alimenticio(3, "Cebolla", 30));

// Imprimir los datos de cada instancia
for (let i = 0; i < instacias.length; i++) {
    instacias[i].imprimirDatos();
}