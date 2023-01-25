const lines = document.querySelector('.code-line')

function createLine() {
    const div = document.createElement('div')
    div.classList.add('code-line')

    const span = document.createElement('span')
    span.classList.add('show-line-counter')

    const input = document.createElement('input')
    input.classList.add('code')

    div.appendChild(span)
    div.appendChild(input)

    return div
}

function insertAfter(newElement, reference) {
    reference.parentNode.insertBefore(newElement, reference.nextSibling);
}

lines.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        if (lines.nextSibling.nextSibling === null) {
            console.log('último elemento');
            const line = createLine()
            insertAfter(line, lines)
            console.log(line.nextSibling);
        }
    }
})

/*
TODO: Descobrir como criar inputs com id incremental (ex: line-1, line-2, ...)
TODO: Entender como selecionar linha seguinte ao pressionar 'enter'

obs: olhando aqui https://developer.mozilla.org/pt-BR/docs/Web/API/Node/nextSibling
*/
