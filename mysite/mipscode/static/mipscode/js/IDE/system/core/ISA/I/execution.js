export function executeTypeI(instruction, sys) {
    if (instruction.typing.org === 'a') {
        sys.regs.general[ instruction.GPR.rt ] = instruction.does( sys.regs.general[instruction.GPR.rs], instruction.GPR.imm )
        sys.SetValueInViewRegister( sys.regs.general[ instruction.GPR.rt ], instruction.GPR.rt )
        sys.lastViewRegisterChanged = instruction.GPR.rt
    }

    if (instruction.typing.org === 'b') {
        if (instruction.does( sys.regs.general[instruction.GPR.rs], sys.regs.general[instruction.GPR.rt] )) {
            sys.regs.especial.pc = parseInt( instruction.GPR.offset )
            sys.pcChangedAtExecution = true
            console.log(sys.regs.especial.pc);
            sys.SetValueInViewRegister(sys.regs.especial.pc, 'pc')
            sys.lastViewRegisterChanged = instruction.func
        }
    }


}
