// Funcion para saber el dia del Semana

function diaSemana(numero) {


    switch (numero) {

        case 0:

            alert("Hoy es Dom");
            break;

        case 1:

            alert("Hoy es Lun");
            break;

        case 2:

            alert("Hoy es Mar");
            break;

        case 3:

            alert("Hoy es Mie");
            break;

        case 4:

            alert("Hoy es Jue");
            break;

        case 5:

            alert("Hoy es Vie");
            break;

        case 6:

            alert("Hoy es Sab");
            break;

        default:
            alert("Número no válido. Por favor, introduce un número entre 0 y 6.");
            break;

    }

}


const day = new Date().getDay();
diaSemana(day);