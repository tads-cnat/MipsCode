import { whichOrganization } from './manager.js';

export default function operationInstruction(instruction) {
    if ( whichOrganization(instruction.func) === 'a' )
        return {
            rt: instruction.values[0],
            rs: instruction.values[1],
            imm: parseInt( instruction.values[2] )
        }

    if ( whichOrganization(instruction.func) === 'b' )
        return {
            rs: instruction.values[0],
            rt: instruction.values[1],
            offset: instruction.values[2]
        }

    if ( whichOrganization(instruction.func) === 'c' )
        return {
            rs: instruction.values[0],
            offset: instruction.values[1]
        }

    if ( whichOrganization(instruction.func) === 'd' )
        return {
            rs: instruction.values[0],
            offset: instruction.values[1]
        }

    if ( whichOrganization(instruction.func) === 'e')
        return {
            rs: instruction.values[1].slice( instruction.values[1].indexOf('$'), instruction.values[1].indexOf(')') ),
            rt: instruction.values[0],
            imm: parseInt( instruction.values[1].slice(0, instruction.values[1].indexOf('(') ) )
        }

    if ( whichOrganization(instruction.func) === 'f')
        return {
            rs: instruction.values[0],
            imm: parseInt( instruction.values[1] )
        }
}
