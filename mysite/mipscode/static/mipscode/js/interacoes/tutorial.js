'use strict'
let addP = document.getElementById('addP');
let addH1 = document.getElementById('addH1');
let addH2 = document.getElementById('addH2');
let addH3 = document.getElementById('addH3');
let addH4 = document.getElementById('addH4');

let spaceADD = document.getElementById('space-content');

addH1.addEventListener('click', () => {
    var newinput = document.createElement("input");
    newinput.setAttribute('class', 'newTitle fs-2');
    newinput.setAttribute('name', 'h1');
    newinput.setAttribute('placeholder', 'Escreva aqui');
    spaceADD.appendChild(newinput);
});

addH2.addEventListener('click', () => {
    var newinput = document.createElement("input");
    newinput.setAttribute('class', 'newSubtitle fs-3');
    newinput.setAttribute('name', 'h3');
    newinput.setAttribute('placeholder', 'Escreva aqui');
    spaceADD.appendChild(newinput);
});

addH3.addEventListener('click', () => {
    var newinput = document.createElement("input");
    newinput.setAttribute('class', 'newSubtitle fs-4');
    newinput.setAttribute('name', 'h3');
    newinput.setAttribute('placeholder', 'Escreva aqui');
    spaceADD.appendChild(newinput);
});

addH4.addEventListener('click', () => {
    var newinput = document.createElement("input");
    newinput.setAttribute('class', 'newSubtitle fs-5');
    newinput.setAttribute('name', 'h3');
    newinput.setAttribute('placeholder', 'Escreva aqui');
    spaceADD.appendChild(newinput);
});

addP.addEventListener('click', () => {
    var newinput = document.createElement("textarea");
    newinput.setAttribute('class', 'newTextarea fs-6 textarea');
    newinput.setAttribute('name', 'p');
    newinput.setAttribute('placeholder', 'Escreva aqui');
    spaceADD.appendChild(newinput);
});


function montar() {
    let inputs = document.querySelectorAll("form input, form textarea");

    let formData = [];

    inputs.forEach((input, index) => {
        if (index > 0) {
            formData.push({
                [String(input.name)]: String(input.value)
            });
        }
    });

    formData.pop()
    formData.pop()

    console.log(formData)
    let jsonData = JSON.stringify(formData);
    console.log(jsonData)


    let content = document.getElementById('content_full_page').value = jsonData
}