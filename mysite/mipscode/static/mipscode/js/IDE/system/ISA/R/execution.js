import { getLowOrder, getHighOrder } from '../../toolkit.js'

export function executeTypeR(instruction, sys) {
    if (instruction.typing.org === 'a') {
        sys.regs[ instruction.GPR.rd ] = instruction.does( sys.regs[instruction.GPR.rs], sys.regs[instruction.GPR.rt] )
        sys.SetValueInViewRegister(sys.regs[ instruction.GPR.rd ], instruction.GPR.rd)
        sys.lastViewRegisterChanged = instruction.GPR.rd
    }

    if (instruction.typing.org === 'b') {
        if (instruction.syscall)
            return sys.Call()

        // TODO: fazer execução da instrução break
    }
    
    if (instruction.typing.org === 'c') {
        const res = instruction.does( sys.regs[instruction.GPR.rs], sys.regs[instruction.GPR.rt] )

        if (instruction.func === 'mult' || instruction.func === 'multu') {
            sys.regs.hi = getHighOrder(res)
            sys.regs.lo = getLowOrder(res)
        }

        sys.SetValueInViewRegister('hi', sys.regs.hi)
        sys.SetValueInViewRegister('lo', sys.regs.lo)
    }

    if (instruction.typing.org === 'd') {}

    if (instruction.typing.org === 'e') {}

    if (instruction.typing.org === 'f') {}

    if (instruction.typing.org === 'g') {}

    if (instruction.typing.org === 'h') {}
}
