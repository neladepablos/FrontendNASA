// --------------------- JQUERY DE LA FOTO DEL DIA

$('#button').click(function() {
    $('#button').attr('disabled', true);
    $('#foto-dia-img').attr("src", "./assets/img/loading.gif");
    let date = $('#inputDate').val();
    // console.log(date)
    $.get(`https://api.nasa.gov/planetary/apod?api_key=N7YCYwf1UeY4KgQLx3Oc4pWX0Tbb2rzfxwCvZDXH&date=${date}`, function(data, status) {
        // console.log(data)
        $('#foto-dia-img').attr("src", data.url);
        $('#foto-dia-container').attr("href", data.url);
        $('#verMas-text').html(data.explanation);
        baguetteBox.run('.gallery');
        $('#button').attr('disabled', false);

    });
    s
})


// ------------------------------------------------------- GALERIA DE FOTOS
// let gallery = document.querySelector('#gallery');

// document.addEventListener('DOMContentLoaded', function() {
//     loadGallery(1);

// });


// function loadGallery(page) {
//     // console.log(`page`)

//     $.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=N7YCYwf1UeY4KgQLx3Oc4pWX0Tbb2rzfxwCvZDXH`, function(data, status) {

//         // console.log(data)
//         data.photos.forEach(function(item) {
//             gallery.innerHTML += `
//             <a class="photo-gallery" href="${item.img_src}">
//                 <img src="${item.img_src}" alt="First image">
//             </a>            `

//         });

//         baguetteBox.run('.gallery');
//     });


// }

// =============== Traer automaticamente la foto del dia

window.addEventListener('load', function() {
    let inputDate = document.querySelector('#inputDate');

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    inputDate.value = today;

    $('#button').click()
});