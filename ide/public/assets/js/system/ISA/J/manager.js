import { formatAddress } from '../../core/toolkit.js'
import { formatCodeInstruction } from './formatting.js'
import instructions from './instructions.js'
import sys from '../../core/sys.js'

export function isTypeJ(op) {
    return 'j' === op || op === 'jal'
}

export function formatInstruction(instruction, memorySpace, index, target) {
    const targetLocal = sys.FindJumpTarget(target.index)
    const instructionProperties = {
        address: formatAddress(memorySpace),
        code: formatCodeInstruction(instruction, target.index),
        does: instructions[instruction.func].does,
        index,
        func: instruction.func,
        label: instruction.label,
        target: targetLocal,
        typing: {
            type: 'j',
        }
    }

    return instructionProperties
}
