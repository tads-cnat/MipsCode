import { convertHexToDecimal } from '../../core/toolkit.js'

export default {
    j: {
        op: '000010',
        // target: '', // coded address of label
        does: ( instruction ) => convertHexToDecimal( instruction ) // (label) => { //a full 32-bit jump target address }
    },
    jal: {
        op: '000011',
        // target: '', // coded address of label
        does: null // (label) => { //a full 32-bit jump target address }
    }
}
