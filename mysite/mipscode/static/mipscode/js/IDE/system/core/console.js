import * as user from './userAction.js'

const dataInAndOut = document.querySelector('.console-div')

export const cleanIt = () => {
    dataInAndOut.innerText = ''
}

export const dataOut = (data, type, msg) => {
    if (type === 'error') {}

    if (type === 'value') {
        const output = document.createElement('p')

        output.textContent = `${data}`

        dataInAndOut.appendChild(output)
    }

    if (type === 'exit') {
        const output = document.createElement('div')

        output.textContent = `--- ${msg} ---`
        output.style.textAlign = 'center'

        dataInAndOut.appendChild(output)
    }

    if (type === 'log') {}

    if (type === 'comment') {
        const output = document.createElement('p')

        output.textContent = `--- ${msg} ---`
        output.style.textAlign = 'center'

        dataInAndOut.appendChild(output)
    }
}

export const dataIn = async () => {
    const inputLine = createConsoleInput()
    inputLine.focus()

    user.utils.freeze()

    const data = await getUserData(inputLine)
        .then(res => res)
        .catch(err => console.log(err))

    user.utils.unFreeze()

    return data
}

function createConsoleInput() {
    const inputLine = document.createElement('textarea')
    inputLine.classList.add('data-in-input')
    inputLine.classList.add('color-white')
    dataInAndOut.appendChild(inputLine)

    return inputLine
}

function getUserData(inputLine) {
    return new Promise(resolve => {
        let value
        
        inputLine.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                inputLine.disabled = true
                value = inputLine.value
                resolve(value)
            }
        })
    })
}

/*
addi $2, $0, 5
syscall
add $4, $2, $2
addi $2, $0, 1
syscall
addi $2, $0, 10
syscall
*/
