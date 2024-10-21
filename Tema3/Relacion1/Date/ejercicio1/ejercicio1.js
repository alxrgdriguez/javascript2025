// Funcion para saber el dia del Semana

function diaSemana(numero) {


    switch (numero) {

        case 0:

            alert("Hoy es Domingo");
            break;

        case 1:

            alert("Hoy es Lunes");
            break;

        case 2:

            alert("Hoy es Martes");
            break;

        case 3:

            alert("Hoy es Miercoles");
            break;

        case 4:

            alert("Hoy es Jueves");
            break;

        case 5:

            alert("Hoy es Viernes");
            break;

        case 6:

            alert("Hoy es Sabado");
            break;

        default:
            alert("Número no válido. Por favor, introduce un número entre 0 y 6.");
            break;

    }



}

const day = new Date().getDay();

diaSemana(day);