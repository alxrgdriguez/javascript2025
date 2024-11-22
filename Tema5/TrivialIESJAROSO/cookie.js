// -----------------------------( Cookie)--------------------------------
window.onload = contarVisitas();

// Función para contar las visitas 
function contarVisitas() {
    let visitas = getCookie('visitas');
    if (!visitas) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }
    setCookie('visitas', visitas, 1); // Para que el cookie expire en 1 día
    document.getElementById('visitas').textContent = visitas;
}

// Función para obtener el valor de una cookie
function getCookie(nombre) {
    let nombreCookie = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nombreCookie) === 0) {
            return cookie.substring(nombreCookie.length, cookie.length);
        }
    }
    return "";
}

// Función para establecer una cookie
function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}



