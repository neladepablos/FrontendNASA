let photos = document.getElementById('photos');

document.addEventListener('DOMContentLoaded', function() {
    loadGallery(1);
    loadGallery(2);
    loadGallery(3);
    loadGallery(4);

});

function loadGallery(page) {
    // console.log(`page`)

    $.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=N7YCYwf1UeY4KgQLx3Oc4pWX0Tbb2rzfxwCvZDXH`, function(data, status) {

        // console.log(data)
        data.photos.forEach(function(item) {
            photos.innerHTML += `
            <img src="${item.img_src}" alt="First image">
                    `

        });


    });


}