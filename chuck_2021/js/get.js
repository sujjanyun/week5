'use strict';

function get(url) {
    
}
fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        updateBody(data.value);
        return data;
    })
    .catch(function (error) {
        console.error("ERROR:", error);
        return error;
    });