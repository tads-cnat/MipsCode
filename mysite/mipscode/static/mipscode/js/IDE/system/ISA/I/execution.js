import view from '../../core/view.js'

export function executeTypeI(instruction, sys) {
    if (instruction.typing.org === 'a') {
        sys.regs.general[ instruction.GPR.rt ] = instruction.does( sys.regs.general[instruction.GPR.rs], instruction.GPR.imm )
        view.setValueInViewRegister( sys.regs.general[ instruction.GPR.rt ], instruction.GPR.rt )
        view.lastViewRegisterChanged = instruction.GPR.rt
    }

    if (instruction.typing.org === 'b') {
        if (instruction.does( sys.regs.general[instruction.GPR.rs], sys.regs.general[instruction.GPR.rt] )) {
            sys.regs.especial.pc = parseInt( instruction.GPR.offset )
            sys.pcChangedAtExecution = true
            view.setValueInViewRegister(sys.regs.especial.pc, 'pc')
            // view.lastViewRegisterChanged = instruction.GPR.rd

        }
    }
}
