function openNewProjectView() {
    view = document.querySelector('#create-arquivo')
    view.setAttribute('class', 'create-arquivo')
}

function closeNewProjectView() {
    view = document.querySelector('#create-arquivo')
    view.setAttribute('class', 'create-arquivo display-none')
}

function openOptions(id) {
    view = document.querySelector('#options-area' + id)
    view.setAttribute('class', 'options-div button-white')
    // view.setAttribute('onclick','closeOptions('+id+')')

    button = document.querySelector('#buttonOption' + id)
    button.setAttribute('onclick', 'closeOptions(' + id + ')')
}

function closeOptions(id) {
    view = document.querySelector('#options-area' + id)
    view.setAttribute('class', 'options-div button-white display-none')
    button = document.querySelector('#buttonOption' + id)
    button.setAttribute('onclick', 'openOptions(' + id + ')')
}

function openEditar(id) {
    view = document.querySelector('#editar-arquivo' + id)
    view.setAttribute('class', 'editar-arquivo')
}

function closeEditar(id) {
    view = document.querySelector('#editar-arquivo' + id)
    view.setAttribute('class', 'editar-arquivo display-none')
}

'use strict'

let file = document.getElementById('file');
let buttoninput = document.getElementById('fileInput')
let exit = document.getElementById('exit-button')

buttoninput.addEventListener('click', () => {
    file.click();
});

exit.addEventListener('click', () => {

    buttoninput.value = "Importe um arquivo"
});

file.addEventListener('change', () => {
    if (document.getElementById('file').files[0] != undefined) {
        buttoninput.value = file.files[0].name;
    }
    else {
        buttoninput.value = "Importe um arquivo"
    }
});



