// Creamos el objeto piso

class piso {
    constructor(metros_cuadrados, altura, num_habitaciones, precio) {
        this.metros_cuadrados = metros_cuadrados;
        this.altura = altura;
        this.num_habitaciones = num_habitaciones;
        this.precio = precio;
    }

    // Metodo para imprimir los datos del objeto piso
    imprimirDatos() {
        document.write("Metros cuadrados: " + this.metros_cuadrados);
        document.write("<br>");
        document.write("Altura: " + this.altura);
        document.write("<br>");
        document.write("Número de habitaciones: " + this.num_habitaciones);
        document.write("<br>");
        document.write("Precio: " + this.precio);
        document.write("<br>");
    }

    // Metodo para calcular el IVA
    calcularIVA(iva) {
        return this.precio * iva / 100;
    }

}

// Solicitar los datos de cada instancia
let metros_cuadrados = prompt("Ingrese el número de metros cuadrados del piso: ");
let altura = prompt("Ingrese la altura del piso: ");
let num_habitaciones = prompt("Ingrese el número de habitaciones del piso: ");
let precio = prompt("Ingrese el precio del piso: ");

// Crear instancia de piso con los datos solicitados
let instancia = new piso(metros_cuadrados, altura, num_habitaciones, precio);

// Imprimir los datos de la instancia
instancia.imprimirDatos();
document.write("<br>");

// Calcular el IVA
let iva = prompt("Ingrese el IVA en porcentaje");
let iva_calculada = instancia.calcularIVA(iva);

// Imprimir el IVA calculado
document.write("El IVA del piso es de: " + iva_calculada + "€");



