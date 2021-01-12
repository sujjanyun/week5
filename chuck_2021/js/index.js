'use strict';

function updateBody(quote) {
    const main = document.querySelector('#main');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = quote;
    main.appendChild(paragraph);
}