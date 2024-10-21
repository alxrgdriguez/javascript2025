function pedirNombres() {
    let nombres = [];
    let contarNombres = 0;
    const final = "fin";

    while (true) {
        let entrada = prompt("Introduzca un nombre (o Fin para terminar): ");

        if (entrada.toLowerCase() === final) {
            break; // Termina el bucle si se ingresa fin
        }

        if (entrada === "") {
            alert("No has introducido ningún nombre");
        } else {
            nombres.push(entrada); // Agrega el nombre a la lista de nombres
            contarNombres++; // Sumamos la cantidad de nombres que se han ingresado
        }
    }

    return `Usted ha introducido ${contarNombres} nombres: ${nombres.join(", ")}`;
}

alert(pedirNombres());
