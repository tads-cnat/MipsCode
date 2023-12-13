import { convertDecimalToBin, convertBinToHex, addressBase } from '../../core/toolkit.js'

const shiftLeftTwoBitsLogical = value => value >> 2

const completeHexLength = value => {
    while (value.length !== 8) 
        value = '0' + value 
    
    return value
}

const completeTargetInstruction = value => { 
    while (value.length !== 26) 
        value = '0' + value 
    
    return value
}

function getJumpTarget(instruction, instructionsBeforeLabel) { // TODO: descobrir se 'jr' e 'jal' formam o code igual ao 'j'
    if (instruction.func === 'j') {
        const targetInBinary =  completeTargetInstruction( 
            convertDecimalToBin( shiftLeftTwoBitsLogical( addressBase + instructionsBeforeLabel * 4 ) ) 
        )

        return '000010' + targetInBinary
    }
}

function buildCodeOfInstruction(bin) {
    const code  = completeHexLength( convertBinToHex( bin ) )
    return '0x' + code
}

export function formatCodeInstruction(instruction, instructionsBeforeLabel) {
    return buildCodeOfInstruction( getJumpTarget(instruction, instructionsBeforeLabel) )
}
