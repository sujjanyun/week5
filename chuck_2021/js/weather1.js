'use strict';

function get(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.error('ERROR:', error);
            return error;
        });
}

function getWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=2e988d0dd71c48d57f928c742b85072b&units=imperial"
    get(url).then(function (response) {
        updateBody(response.value);
    });
}

getWeather();