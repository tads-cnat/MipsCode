import { getLowOrder, getHighOrder } from '../../core/toolkit.js'
import view from '../../core/view.js'

export function executeTypeR(instruction, sys) {
    if (instruction.typing.org === 'a') {
        console.log('executeTypeR in typing.org === a');
        sys.regs.general[ instruction.GPR.rd ] = instruction.does( sys.regs.general[instruction.GPR.rs], sys.regs.general[instruction.GPR.rt] )
        view.setValueInViewRegister(sys.regs.general[ instruction.GPR.rd ], instruction.GPR.rd)
        view.lastViewRegisterChanged = instruction.GPR.rd
    }

    if (instruction.typing.org === 'b') {
        console.log('executeTypeR in typing.org === b');
        // TODO: fazer execução da instrução break
    }
    
    if (instruction.typing.org === 'c') {
        const res = instruction.does( sys.regs.general[instruction.GPR.rs], sys.regs.general[instruction.GPR.rt] )

        if (instruction.func === 'mult' || instruction.func === 'multu') {
            sys.regs.especial.hi = getHighOrder(res)
            sys.regs.especial.lo = getLowOrder(res)
        }

        view.setValueInViewRegister('hi', sys.regs.especial.hi)
        view.setValueInViewRegister('lo', sys.regs.especial.lo)
    }

    if (instruction.typing.org === 'd') {}

    if (instruction.typing.org === 'e') {}

    if (instruction.typing.org === 'f') {}

    if (instruction.typing.org === 'g') {}

    if (instruction.typing.org === 'h') {}
}
