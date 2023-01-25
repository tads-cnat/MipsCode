export function executeTypeJ(instruction, sys) {
    if (instruction.func === 'j') {
        sys.regs.especial.pc = instruction.does(instruction.target)
        sys.pcChangedAtExecution = true
        sys.SetValueInViewRegister(sys.regs.especial.pc, 'pc')
        sys.lastViewRegisterChanged = instruction.func
    }

    if (instruction.func === 'jal') {}
}
