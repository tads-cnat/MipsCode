import * as tools from '../../toolkit.js'
import instructions from "./instructions.js"

const formatAddress = { // talvez seja obsoleto, atente para a possibilidade de ter um "formatAddress" em cada organizationType
    op: '000000',
    rs: '00000',
    rt: '00000',
    immOrLabel: '0000000000000000'
};

export function organizationTypeA(arr) { // [fn, rd, rs, rt]
    formatAddress.op = arr[0]
    formatAddress.rt = arr[1]
    formatAddress.rs = arr[2]
    formatAddress.immOrLabel = arr[3]
    return Object.values(formatAddress).join('')
}

export function organizationTypeB(arr) {
    formatAddress.op = arr[0]
    formatAddress.rs = arr[1]
    formatAddress.rt = arr[2]
    formatAddress.immOrLabel = arr[3]
    return Object.values(formatAddress).join('')
}

export function organizationTypeC(arr) {
    formatAddress.op = arr[0]
    formatAddress.rs = arr[1]
    formatAddress.immOrLabel = arr[2]
    formatAddress.rt = '00001'
    return Object.values(formatAddress).join('')
}

export function organizationTypeD(arr) {
    formatAddress.op = arr[0]
    formatAddress.rs = arr[1]
    formatAddress.immOrLabel = arr[2]
    formatAddress.rt = '00000'
    return Object.values(formatAddress).join('')
}

export function organizationTypeE(arr) { // ['100011', '01001', '01000', '0000000000000100']
    formatAddress.op = arr[0]
    formatAddress.rs = arr[1]
    formatAddress.rt = arr[2]
    formatAddress.immOrLabel = arr[3]
    return Object.values(formatAddress).join('')
}

export function organizationTypeF(arr) { // ['lui', '$8', '10']
    formatAddress.op = arr[0]
    formatAddress.rs = '00000'
    formatAddress.rt = arr[1]
    formatAddress.immOrLabel = arr[2]
    return Object.values(formatAddress).join('')
}

export function formatImmElement(imm) {
    let temp = parseInt(imm)
    if (imm.includes('-')) temp += 65536 // pode dar erro pois o cleanElement talvez tire o sinal de menos
    return tools.completeImmLength(tools.convertDecimalToBin(temp))
}

export function formatInstructionsInBinary(instruction) { // ['addi', '$2', '$0', '5']      ['lw', '$8', '4($9)']
    const lastElement = instruction.pop()
    const func = instructions[ instruction.shift() ].function

    const cleanedElements = instruction.map((element) => {
        return tools.convertDecimalToBin( parseInt( tools.cleanElement(element) ) ) // cleanElement
    })

    // console.log(lastElement);
    // console.log(func);
    // console.log(cleanedElements);

    if (lastElement.includes('(')) {                        // cleanElement
        const rs = tools.convertDecimalToBin( parseInt( tools.cleanOnlyComma( lastElement.slice( lastElement.indexOf('$'), lastElement.indexOf(')') ) ) ) )
        const imm = formatImmElement( lastElement.slice(0, lastElement.indexOf('(') ) ) 

        // console.log(rs);
        // console.log(imm);

        return [ func, ...tools.completeElementsLength([rs]), ...tools.completeElementsLength(cleanedElements), imm ]
    }

    return [ func, ...tools.completeElementsLength(cleanedElements), formatImmElement(lastElement) ]; // [ '001000',  ]
}

// main:  lw $8, 4($9)