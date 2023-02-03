const baseAddressIncrement = 4

export const addressBase = 4194304

export function copyRegs(regs) {
    const copy = {}
    let count = 0
  
    for (const reg in regs) {
      if (Object.hasOwnProperty.call(regs, reg)) {
        const type = regs[reg]

        if (count === 0) copy.general = Object.assign( {}, type )
        if (count === 1) copy.floatingPoint = Object.assign( {}, type ) // está copiando por referência, alterar isso posteriormente
        if (count === 2) copy.especial = Object.assign( {}, type )
        
        count++
      }
    }

    copy.currentIndex = null
  
    return copy
}

export function findRegValue(reg, regs) {
    for (const type in regs) {
        if (Object.hasOwnProperty.call(regs, type)) {
            const element = regs[type]
    
            if (element.hasOwnProperty(reg)) return element[reg]
        }
    } 
}

export function convertDecimalToBin(dec) {
    return dec.toString(2);
}

export function convertBinToHex(bin) {
    return parseInt(bin, 2).toString(16);
}

export function convertDecimalToHex(dec) {
    return dec.toString(16);
}

export function convertDecimalToAddressHex(dec) {
    let hex = dec.toString(16);

    while (hex.length !== 8) {
        hex = '0' + hex;
    }
    
    return '0x' + hex;
}

export function convertHexToDecimal(hex) {
    return parseInt(hex, 16);
}

export function cleanElement(str) {
    return str.includes(',') ? str.slice(1, str.indexOf(',')) : str.slice(1);
}

export function cleanOnlyComma(str) {
    return str.includes(',') ? str.slice(0, str.indexOf(',')) : str;
}

export function cleanInstruction(arr) {
    return arr.map( element => cleanOnlyComma(element) );
}

export function completeElementsLength(arr) {
    return arr.map(element => {
        while (element.length < 5) element = '0' + element;
        return element;
    });
}

export function completeImmLength(element) {
    while (element.length < 16) element = '0' + element;
    return element;
}

export function convertBinInstructionToHex(binaryInstrution) {
    const arrayFromBinary = binaryInstrution.split('')
    const array = [];
    let i = 0;
    while (i++ !== 8) array.push(arrayFromBinary.splice(0, 4).join(''));
    return '0x' + array.map(element => convertBinToHex(element)).join('');
}

export function formatAddress(addressCount) {
    // let address = (addressBase + addressCount).toString(16)
    // while (address.length != 8) address = '0' + address
    // return '0x' + address

    let address = (baseAddressIncrement + addressCount).toString(16)
    while (address.length != 8) address = '0' + address
    return '0x' + address
}

export function uInt(number) {
    return Math.sqrt(Math.pow(number, 2));
}

export function handleUserInput(input) {
    return input.split('\n').filter(
        instruction => instruction.split('').every(el => el === ' ') === false
    )
}

export function organizeInstructions(instructions) {
    return instructions.map( instruction => {
        return structureInstruction(instruction)
    } )
}

export function structureInstruction(instruction) {
    const properties = {
        label: null,
        func: null,
        values: null
    }

    instruction = instruction.trim()

    if (!instruction.includes(':')) {
        instruction = instruction.split(' ').map(element => element.trim())
        properties.func = instruction[0]
        properties.values =  instruction.length > 1 ? cleanInstruction(instruction.slice(1)) : null

        return properties
    }

    instruction = instruction.split(':')
    properties.label = [ instruction[0].trim() ]
    
    if (instruction.length === 1 || instruction[1].trim().length === 0) {
        properties.onlyLabel = true
        return properties
    }

    instruction = instruction[1].trim()
    properties.func = instruction.slice( 0, instruction.indexOf(' ') )

    instruction = instruction.slice( instruction.indexOf(' ') ).trim()
    properties.values = instruction.split(' ').map( element => cleanOnlyComma( element.trim() ) )

    return properties
}

export function getLowOrder(num) {
    let bin = convertDecimalToBin(num)

    while (bin.length !== 32) 
        bin = '0' + bin

    return parseInt(bin.slice(15), 2)
}

export function getHighOrder(num) {
    let bin = convertDecimalToBin(num)

    while (bin.length !== 32) 
        bin = '0' + bin

    return parseInt(bin.slice(0, 15), 2)
}

export const shiftLeftTwoBitsLogical = value => value >> 2

export const completeHexLength = value => { 
    while (value.length !== 8) 
        value = '0' + value 
    
    return value
}

export const completeTargetInstruction = value => { 
    while (value.length !== 26) 
        value = '0' + value 
    
    return value
}

export function getJumpTarget(instruction, index) { // TODO: descobrir se 'jr' e 'jal' formam o code igual ao 'j'
    if (instruction.func === 'j') {
        const bin = '000010' + completeTargetInstruction( convertDecimalToBin( shiftLeftTwoBitsLogical( addressBase + index * 4 ) ) )
        const code = '0x' + completeHexLength( convertBinToHex( bin ) )
        return code
    }
}
