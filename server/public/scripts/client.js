console.log('js is loaded');

$(document).ready(readyNow);

function readyNow(){
    $.ajax({
        url: '/quotes',
        type: 'GET'
    }).done(function(response){
        console.log(response);
        
        for (let i = 0; i < response.length; i++) {
            $('#quotesList').append(`<li>${response[i].text}</li><li>${response[i].author}</li>`);
        }
    })
}