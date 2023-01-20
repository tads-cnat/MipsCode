import * as user from './userAction.js'

const dataInAndOut = document.querySelector('.console')

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
    let data

    //user.utils.freeze()

    // inputLine.addEventListener('keyup', event => {
    //     if (event.key === 'Enter') { // && event.target === inputLine
    //         console.log('teste');

    //         console.log(inputLine.value);
            
    //         //inputLine.disabled = true
    //         user.utils.unFreeze()
    //         return inputLine.value
    //     }
    // })

    // data = await getUserData(inputLine).then(res => res)
    // while (!data) {}

    //user.utils.unFreeze()

    return getUserData(inputLine)
}

function createConsoleInput() {
    const inputLine = document.createElement('input')
    inputLine.classList.add('data-in-input')
    dataInAndOut.appendChild(inputLine)
    inputLine.focus()

    return inputLine
}

function getUserData(inputLine) {
    return new Promise(resolve => {
        let value
        
        inputLine.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                console.log(inputLine.value)
                inputLine.disabled = true
                value = inputLine.value
            }
        })

        while (value === undefined) {}

        resolve(value)
    })
}

// export const dataIn = () => {
//     const inputLine = document.createElement('input')
//     inputLine.classList.add('data-in-input')
//     dataInAndOut.appendChild(inputLine)

//     user.utils.freeze()

//     inputLine.focus()
//     inputLine.addEventListener('keyup', event => {
//         if (event.key === 'Enter') { // && event.target === inputLine
//             console.log('teste');

//             console.log(inputLine.value);
            
//             //inputLine.disabled = true
//             user.utils.unFreeze()
//             return inputLine.value
//         }
//     })

// }


// export const dataIn = () => {
//     let inputData, isSubmit = false
//     const inputLine = document.createElement('input')
//     inputLine.classList.add('data-in-input')
//     dataInAndOut.appendChild(inputLine)
//     inputLine.focus()
//     user.utils.freeze()

//     inputLine.addEventListener('keyup', event => {
//         if (event.key === 'Enter') { // && event.target === inputLine
//             console.log('teste');
            
//             console.log(inputLine.value);
            
//             isSubmit = true
//         }
//     })
//     console.log('before while true')
//     while (true) if (isSubmit) break
//     console.log('after while true')

//     inputLine.disabled = true
//     user.utils.unFreeze()

//     return getUserData(inputLine) //inputLine.value
// }

// function createConsoleInput() {
//     const inputLine = document.createElement('input')
//     inputLine.classList.add('data-in-input')
//     dataInAndOut.appendChild(inputLine)

//     return inputLine
// }

// function getUserData(inputLine) {
//     return new Promise(resolve => {
//         const input = window.prompt()
//         if (input) resolve(input)
//     })
// }
