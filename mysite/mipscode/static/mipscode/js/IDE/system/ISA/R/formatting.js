import * as tools from '../../core/toolkit.js'
import instructions from './instructions.js'

const formatAddress = {
    op: '000000',
    rs: '00000',
    rt: '00000',
    rd: '00000',
    sa: '00000',
    fn: '000000',
}

export function organizationFromTypeA(arr) { // [fn, rd, rs, rt]
    formatAddress.fn = arr[0]
    formatAddress.rd = arr[1]
    formatAddress.rs = arr[2]
    formatAddress.rt = arr[3]
    return Object.values(formatAddress).join('')
}

export function organizationFromTypeB(arr) {
    formatAddress.fn = arr[0]
    return Object.values(formatAddress).join('')
}

export function organizationFromTypeC(arr) {
    formatAddress.fn = arr[0]
    formatAddress.rs = arr[1]
    formatAddress.rt = arr[2]
    return Object.values(formatAddress).join('')
}

export function organizationFromTypeD(arr) {
    formatAddress.fn = arr[0]
    formatAddress.rd = arr[1]
    return Object.values(formatAddress).join('')
}

export function organizationFromTypeE(arr) {
    formatAddress.fn = arr[0]
    formatAddress.rd = arr[1]
    formatAddress.rt = arr[2]
    formatAddress.sa = arr[3]
    return Object.values(formatAddress).join('')
}

export function organizationFromTypeF(arr) {
    formatAddress.fn = arr[0]
    formatAddress.rd = arr[1]
    formatAddress.rt = arr[2]
    formatAddress.rs = arr[3]
    return Object.values(formatAddress).join('')
}

export function organizationFromTypeG(arr) {
    formatAddress.fn = arr[0]
    formatAddress.rs = arr[1]
    return Object.values(formatAddress).join('')
}

export function organizationFromTypeH(arr) {
    formatAddress.fn = arr[0]
    formatAddress.rd = arr[1]
    formatAddress.rs = arr[2]
    return Object.values(formatAddress).join('')
}

export function formatInstructionsInBinary(arr) {
    const cleanedElements = arr.map((element, index) => {
        if (index === 0) return instructions[element].function
        else return tools.convertDecimalToBin(
            parseInt( tools.cleanElement(element) )
        )
    })

    return tools.completeElementsLength(cleanedElements)
}
