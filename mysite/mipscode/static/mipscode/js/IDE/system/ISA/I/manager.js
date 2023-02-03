import { convertBinInstructionToHex, formatAddress } from '../../core/toolkit.js'
import * as formatting from './formatting.js';
import instructions from './instructions.js';
import operateInstrucion from './operation.js';

function selectOrganizationType(type, binary) {
    if (type === 'a') return formatting.organizationTypeA(binary);
    if (type === 'b') return formatting.organizationTypeB(binary);
    if (type === 'c') return formatting.organizationTypeC(binary);
    if (type === 'd') return formatting.organizationTypeD(binary);
    if (type === 'e') return formatting.organizationTypeE(binary);
    if (type === 'f') return formatting.organizationTypeF(binary);
}

export function isTypeI(op) {
    return instructions[op] !== undefined
}

export function whichOrganization(op) {
    return instructions[op].type
}

export function formatInstruction(instruction, memorySpace, index) {
    const binary = formatting.formatInstructionsInBinary( [ instruction.func, ...instruction.values ] )
    const type = instructions[ instruction.func ].type
    const code = convertBinInstructionToHex( selectOrganizationType(type, binary) )
    const address = formatAddress(memorySpace)
    const GPR = operateInstrucion(instruction)
    
    return {
        address,
        code,
        index,
        GPR,
        does: instructions[ instruction.func ].does,
        typing: {
            type: 'i',
            org: instructions[ instruction.func ].type
        },
        label: instruction.label
    }
}
