import { structureInstruction } from "./toolkit.js";
import * as Console from './console.js'

const codeArea = document.querySelector('div.textarea-code')
//const dataInAndOut = document.querySelector('.console')
const addressArea = document.querySelector('div.textarea-address')
const registers = document.querySelector('table.table')
const textareaCode = document.querySelector('textarea.textarea-code')
const input = document.querySelector('textarea.textarea-code')

const view = {
    linesAttributes: [],
    structuredInstructions: null,
    lastViewRegisterChanged: null,
} 

function createLine(a, b, c) {
    const div = document.createElement('div')
    div.classList.add('mounted-code-line')

    const address = document.createElement('span')
    const code = document.createElement('span')
    const instruction = document.createElement('span')

    address.innerText = a
    code.innerText = b
    instruction.innerText = c

    div.appendChild( createColumn(address) )
    div.appendChild( createColumn(code) )
    div.appendChild( createColumn(instruction) )

    return div
}

function createColumn(element) {
    const div = document.createElement('div')
    div.classList.add('mounted-code-column-element')
    div.appendChild(element)
    return div
}

Object.prototype.console = Console

Object.prototype.structureInstructionsToMountView = () => {
    const instructions = input.value
        .split('\n')
        .filter( instruction => instruction.split('').every(el => el === ' ') === false )
        .map( instruction => instruction.trim() )

    view.structuredInstructions = instructions
}

Object.prototype.cleanView = () => {
    const regs = registers.querySelectorAll('td.table-reg-value')
    regs.forEach(register => {
        register.innerText = 0
        register.parentNode.classList.remove('view-changed-color')
        register.classList.remove('color-test')
    } )
    Console.cleanIt()

    view.linesAttributes = []
    view.lastViewRegisterChanged = null
    view.structuredInstructions = null

    codeArea.lastChild.remove()
    textareaCode.style.display = 'block'

    //addressArea.innerHTML = ''
    //addressArea.classList.remove('code-area-flex-distance')
}

Object.prototype.getInputInstructions = () => {
    if (input.value === '') return null
    return view.standardizeInstructionsLabels( view.inputTreatement(input.value) )
}

Object.prototype.mountView = () => {
    //codeArea.innerText = ''

    textareaCode.style.display = 'none'

    const div = document.createElement('div')
    div.classList.add('mounted-code-area')

    const descriptionLine = createLine('Endereço', 'Código', 'Instrução')
    div.appendChild(descriptionLine)

    view.linesAttributes.forEach((attributes, index) => {
        const line = createLine( attributes.address, attributes.code, view.structuredInstructions[index] )
        div.appendChild(line)
    })

    codeArea.appendChild(div)
}

Object.prototype.cleanRegisters = () => {
    const regs = registers.querySelectorAll('td.table-reg-value')
    
    regs.forEach(register => {
        const parentRegister = register.parentElement
        if (parentRegister.classList.contains('view-changed-color'))
            parentRegister.classList.remove('view-changed-color')

        register.classList.remove('color-test')
    } )
}

Object.prototype.setValueInViewRegister = (value, register) => {
    //if (register === 'pc' || register === '' || register === 'lo')

    if (register !== 'pc')
        view.cleanRegisters()

    const reg = registers.querySelector(`td[name="${register}"]`)
    reg.classList.add('color-test')

    const regLine = reg.parentElement
    regLine.classList.add('view-changed-color')

    reg.innerText = value
}

Object.prototype.Data = () => {}

Object.prototype.Text = () => {}

Object.prototype.Word = () => {}

Object.prototype.ToOutput = data => {}

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
