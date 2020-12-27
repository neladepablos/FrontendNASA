// Incorporar al menos un Array en tu proyecto 
//  Utilizar algunos de los métodos o propiedades vistos en la clase.

// let fotos = ['http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
//     'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG',
//     'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG',
//     'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG'
// ]

// fotos.forEach(foto => {
//     console.log(foto)
//     console.log(fotos.length);

// });

// --------------------------------MOdificar DOm e Incorporar eventos
let button = document.querySelector('#button');
let inputDate = document.querySelector('#inputDate');
let error = document.querySelector('#error');
console.log(inputDate);

button.addEventListener('click', () => {
    if (inputDate.value == '') {
        error.innerHTML = 'La fecha ingresada no es vàlida';

    } else {
        error.innerHTML = `No se encntro imagen para la fecha: ${inputDate.value}`;

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

// ------------------------------------- gallery

window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});