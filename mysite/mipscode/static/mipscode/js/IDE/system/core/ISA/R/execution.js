import { getLowOrder, getHighOrder } from '../../toolkit.js'

export function executeTypeR(instruction, sys) {
    if (instruction.typing.org === 'a') {
        sys.regs.general[ instruction.GPR.rd ] = instruction.does( sys.regs.general[instruction.GPR.rs], sys.regs.general[instruction.GPR.rt] )
        sys.SetValueInViewRegister(sys.regs.general[ instruction.GPR.rd ], instruction.GPR.rd)
        sys.lastViewRegisterChanged = instruction.GPR.rd
    }

    if (instruction.typing.org === 'b') {
        if (instruction.syscall)
            return sys.Call()

        // TODO: fazer execução da instrução break
    }
    
    if (instruction.typing.org === 'c') {
        const res = instruction.does( sys.regs.general[instruction.GPR.rs], sys.regs.general[instruction.GPR.rt] )

        if (instruction.func === 'mult' || instruction.func === 'multu') {
            sys.regs.especial.hi = getHighOrder(res)
            sys.regs.especial.lo = getLowOrder(res)
        }

        sys.SetValueInViewRegister('hi', sys.regs.especial.hi)
        sys.SetValueInViewRegister('lo', sys.regs.especial.lo)
    }

    if (instruction.typing.org === 'd') {}

    if (instruction.typing.org === 'e') {}

    if (instruction.typing.org === 'f') {}

    if (instruction.typing.org === 'g') {}

    if (instruction.typing.org === 'h') {}
}
