import { structureInstruction } from "./toolkit.js";
import * as Console from './console.js'

const dataInAndOut = document.querySelector('.console')
const addressArea = document.querySelector('.address')
const registers = document.querySelector('.registers')
const screen = document.querySelector('.screen')
const input = document.querySelector('.input')

const view = {
    linesAttributes: [],
    lastViewRegisterChanged: null,
}    

function createLine(a, b) {
    const div = document.createElement('div')
    div.classList.add('address-line')
    const spanA = document.createElement('span')
    const spanB = document.createElement('span')
    spanA.innerText = a
    spanB.innerText = b
    div.appendChild(spanA)
    div.appendChild(spanB)
    return div
}

Object.prototype.console = Console

Object.prototype.showPropertiesAfterMount = () => {
    //screen.style.paddingLeft = '100px'
    screen.style.justifyContent = 'space-between'
    screen.style.gridTemplateColumns = '1fr 1fr 1fr'
    screen.style.gap = '60px'
    addressArea.style.display = 'initial'
}

Object.prototype.cleanView = () => {
    addressArea.innerText = ''
    const regs = registers.querySelectorAll('input')
    regs.forEach(register => register.value = 0 )
    Console.cleanIt()
}

Object.prototype.hidePropertiesAfterUnmount = () => {
    screen.style.justifyContent = 'space-around'
    screen.style.gridTemplateColumns = '1fr 1fr'
    addressArea.style.gap = '40px'
    addressArea.style.display = 'none'
}

Object.prototype.getInputInstructions = () => {
    if (input.value === '') return null
    return view.standardizeInstructionsLabels( view.inputTreatement(input.value) )
}

Object.prototype.mountView = () => {
    view.linesAttributes.forEach(attributes => {
        const line = createLine(attributes.address, attributes.code)
        addressArea.appendChild(line)
    });
}

Object.prototype.setValueInViewRegister = (value, register) => {
    const reg = document.querySelector(`input[name="${register}"]`)
    reg.value = value
}

//export function cleanView

Object.prototype.Data = () => {}

Object.prototype.Text = () => {}

Object.prototype.Word = () => {}

Object.prototype.ToOutput = data => {}

Object.prototype.SetValueInViewRegister = (value, register) => {
    const reg = document.querySelector(`input[name="${register}"]`)
    reg.value = value
}

Object.prototype.inputTreatement = (input) => {
    const instructions = input.split('\n').filter(
        instruction => instruction.split('').every(el => el === ' ') === false
    )

    return instructions.map( instruction => {
        return structureInstruction(instruction)
    } )
}

Object.prototype.standardizeInstructionsLabels = (input) => {
    const treatedInput = []
    let labelForNextInstruction = null

    input.forEach(element => {
        if (element.onlyLabel === true) {
            labelForNextInstruction = element.label[0]
            return
        }
        
        if (element.label && labelForNextInstruction) {
            element.label.push(labelForNextInstruction)
            labelForNextInstruction = null
        }

        if (!element.label && labelForNextInstruction) {
            element.label = labelForNextInstruction
            labelForNextInstruction = null
        }

        treatedInput.push( element )
        labelForNextInstruction = null
    })

    return treatedInput.map( (element, index) => {
        element.index = index
        return element
    } )
}



export default view


/*

- para as e/s criar duas divs, uma em cima da outra com apenas o rótulo delas lado a lado para o usuário selecionar
qual sessão ver, essa mudança de sessão pode ser feita pelo z-index do css, serão as sessões de logs e console de execução do programa.

- no syscall de receber um valor do usuário, pode criar um input e fazer um appendChild na div do console de execução,
depois com javascript ou css colocar este input com focus.

- descobrir como após varios appendChild na div de console ela não quebre a interface com seu espaçamento,
mas sim que naquela div de console apareça um scroll mantendo seu tamanho original.

*/
