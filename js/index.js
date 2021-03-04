// --------------------------------Modificar DOM e Incorporar eventos
let button = document.querySelector('#button');
let inputDate = document.querySelector('#inputDate');
let error = document.querySelector('#error');
// console.log(inputDate);

button.addEventListener('click', () => {
    if (inputDate.value == '') {
        error.innerHTML = 'La fecha ingresada no es vàlida';

    }
})

// --------------------------------------------------------------- Eventos
let verBoton = document.querySelector('#verMas-btn');
let verParrafo = document.querySelector('#verMas-text');

verBoton.addEventListener('click', verMas);

function verMas() {
    verParrafo.classList.toggle('display-none');

    if (verBoton.textContent == 'Ver mas') {
        verBoton.textContent = 'Ver menos';
    } else {
        verBoton.textContent = 'Ver mas';
    }
}

// ---------------------------------------------------------- gallery

window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});