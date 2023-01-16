function openNewProjectView(){
    view  = document.querySelector('#create-arquivo')
    view.setAttribute('class','create-arquivo')
}

function closeNewProjectView(){
    view  = document.querySelector('#create-arquivo')
    view.setAttribute('class','create-arquivo display-none')
}

function openOptions(id){
    view = document.querySelector('#options-area'+id)
    view.setAttribute('class','options-div')
    // view.setAttribute('onclick','closeOptions('+id+')')

    button = document.querySelector('#buttonOption'+id)
    button.setAttribute('onclick','closeOptions('+id+')')
}

function closeOptions(id){
    view = document.querySelector('#options-area'+id)
    view.setAttribute('class','options-div display-none')
    button = document.querySelector('#buttonOption'+id)
    button.setAttribute('onclick','openOptions('+id+')')
}

function openEditar(id){
    view  = document.querySelector('#editar-arquivo'+id)
    view.setAttribute('class','editar-arquivo')
}

function closeEditar(id){
    view  = document.querySelector('#editar-arquivo'+id)
    view.setAttribute('class','editar-arquivo display-none')
}