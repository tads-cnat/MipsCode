import { uInt } from '../../core/toolkit.js'
import * as op from './functions.js'

export default {
    addi: { 
        function: '001000', 
        type: 'a', 
        does: op.addi
    },

    addiu: { 
        function: '001001', 
        type: 'a', 
        does: op.addiu
    },

    andi: { 
        function: '001100', 
        type: 'a', 
        does: op.andi
    },

    beq: { 
        function: '000100', 
        type: 'b', 
        does: op.beq
    },

    bge: { 
        function: '000001', 
        type: 'b', 
        does: op.bge
    },

    bgt: { 
        function: '000111', 
        type: 'b', 
        does: op.bgt
    },

    ble: { 
        function: '000110', 
        type: 'b', 
        does: op.ble
    },

    blt: { 
        function: '000001', 
        type: 'b', 
        does: op.blt
    },

    bne: { 
        function: '000100', 
        type: 'b', 
        does: op.bne
    },

    bgez: { 
        function: '000001', 
        type: 'c', 
        does: op.bgez
    },

    bgtz: { 
        function: '000111', 
        type: 'd', 
        does: op.bgtz
    },

    blez: { 
        function: '000110', 
        type: 'd', 
        does: op.blez
    },

    bltz: { 
        function: '000001', 
        type: 'd', 
        does: op.bltz
    },

    /*
    lb	rt, imm(rs)	100000	
    lbu	rt, imm(rs)	100100	
    lh	rt, imm(rs)	100001	
    lhu	rt, imm(rs)	100101
    */

    lui: { 
        function: '001111', 
        type: 'f', 
        does: null 
    },

    lw: {
        function: '100011',
        type: 'e',
        does: null
    },
    /*
    lw	rt, imm(rs)	100011
    lwc1	rt, imm(rs)	110001
    */

    ori: { 
        function: '001101', 
        type: 'a', 
        does: op.ori
    },

    /*
    sb	rt, imm(rs)	101000	
    */

    slti: { 
        function: '001010', 
        type: 'a', 
        does: op.slti
    },
    sltiu: { 
        function: '001011', 
        type: 'a', 
        does: op.sltiu
    },

    /*
    sh	rt, imm(rs)	101001	
    sw	rt, imm(rs)	101011	
    swc1  rt, imm(rs)	111001
    */
    
    xori: { 
        function: '001110', 
        type: 'a', 
        does: op.xori
    }
}
