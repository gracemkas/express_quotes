console.log('js is loaded');

$(document).ready(readyNow);

function readyNow(){
    $.ajax({
        url: '/quotes',
        type: 'GET'
    }).done(function(response){
        console.log(response);
        
        for (let i = 0; i < response.length; i++) {
            $('#quotesList').append(`<p class="blockquote">${response[i].text}</p><footer class="blockquote-footer">${response[i].author}</footer>`);
        }
    }).fail(function(errorResponse){
        console.log(errorResponse);
        alert('Request failed, error: ' + errorResponse.status)
    })
}