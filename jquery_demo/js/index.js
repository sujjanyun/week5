'use strict';

// PLAIN JS version
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Ready');
    const button = document.querySelector('#button');
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert('CLICKED!!');
    })
})

// jQuery Version
$(document).ready(function() {
    console.log('jQuery DOM Ready');
    $('#button2').click(function (event) {
        event.preventDefault();
        alert('BUTTON 2 CLICKED');
    })
})