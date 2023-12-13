import { whichOrganization } from './manager.js';

export default function operationInstruction(instruction) { // { label: null, func: 'addi', values: ['$2', '$0', '5'] }
    if ( whichOrganization(instruction.func) === 'a' )
        return {
            rd: instruction.values[0],
            rs: instruction.values[1],
            rt: instruction.values[2]
        }

    if ( whichOrganization(instruction.func) === 'b' )
        return {}

    if ( whichOrganization(instruction.func) === 'c' )
        return {
            rs: instruction.values[0],
            rt: instruction.values[1]
        }

    if ( whichOrganization(instruction.func) === 'd' )
        return {
            rd: instruction.values[0]
        }

    if ( whichOrganization(instruction.func) === 'e')
        return {
            rd: instruction.values[0],
            rt: instruction.values[1],
            sa: parseInt( instruction.values[2] )
        }

    if ( whichOrganization(instruction.func) === 'f')
        return {
            rd: instruction.values[0],
            rt: instruction.values[1],
            rs: instruction.values[2]
        }

    if ( whichOrganization(instruction.func) === 'g')
        return {}

    if ( whichOrganization(instruction.func) === 'h')
        return {}

}