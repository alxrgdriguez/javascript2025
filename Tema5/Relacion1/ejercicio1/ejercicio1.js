const check = document.getElementById('check');
const deseleccionar = document.getElementById('deseleccionar');
const valor = document.getElementsByName('valor');

check.addEventListener('click', function () {
    for (let i = 0; i < valor.length; i++) {
        if (valor[i].checked) {
            valor[i].checked = false;
        } else {
            valor[i].checked = true;
        }
    }
});

deseleccionar.addEventListener('click', function () {
    for (let i = 0; i < valor.length; i++) {
        if (valor[i].checked) {
            valor[i].checked = false;
        }
    }
});

