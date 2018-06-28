console.log('js is loaded');

$(document).ready(readyNow);

function readyNow() {
    getQuotes();
    //add click handler for button
    $('#postButton').on('click', addQuotes);
    $('#random').on('click', addRandom);
}

//still need to fix
function getQuotes() {
    $.ajax({
        url: '/quotes',
        type: 'GET'
    }).done(function (response) {
        console.log(response);

        $('#quotesList').empty();

        for (let i = 0; i < response.length; i++) {
            $('#quotesList').append(
                `<p class="blockquote">${response[i].text}</p>
            <footer class="blockquote-footer">${response[i].author}</footer>`);
        }
    }).fail(function (errorResponse) {
        console.log(errorResponse);
        alert('Request failed, error: ' + errorResponse.status)
    })
}

function addRandom() {
    $.ajax({
        url: '/random',
        type: 'GET'
    }).done(function (response) {
        let randomNum = Math.floor(Math.random() * (response.length));
        $('#quotesList').append(
                    `<p class="blockquote">${response[randomNum].text}</p><footer class="blockquote-footer">${response[randomNum].author}</footer>`);
    }).fail(function (errorResponse) {
        console.log(errorResponse);
        alert('Request failed, error: ' + errorResponse.status)
    })
}

function addQuotes() {
    let text = $('#text').val();
    let author = $('#author').val();
    console.log(text, author);

    //add to server
    $.ajax({
        url: '/quotes',
        method: 'POST',
        data: {
            text: text,
            author: author,
        }
    }).done(function (res) {
        console.log(res);
        getQuotes();
    }).fail(function (errorres) {
        console.log('error', errorres);
    })
}