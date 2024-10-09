// Funcion para saber el mes

function MesesAnio(numero) {

    switch (numero) {

        case 0:
            alert("Enero")
            break;

        case 1:

            alert("Febrero")
            break;


        case 2:

            alert("Marzo")
            break;


        case 3:

            alert("Abril")
            break;


        case 4:

            alert("Mayo")
            break;


        case 5:

            alert("Junio")
            break;


        case 6:

            alert("Julio")
            break;


        case 7:

            alert("Agosto")
            break;


        case 8:

            alert("Septiembre")
            break;


        case 9:

            alert("Octubre")
            break;


        case 10:

            alert("Noviembre")
            break;


        case 11:

            alert("Diciembre")
            break;

        default:

            alert("Error")
            break;
    }
}

const mes = new Date().getMonth();
MesesAnio(mes);