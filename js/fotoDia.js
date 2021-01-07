$('#button').click(function() {
    let date = $('#inputDate').val();
    console.log(date)
    $.get(`https://api.nasa.gov/planetary/apod?api_key=N7YCYwf1UeY4KgQLx3Oc4pWX0Tbb2rzfxwCvZDXH&date=${date}`, function(data, status) {
        console.log(data)
        $('#foto-dia-img').attr("src", data.url);
    });

})