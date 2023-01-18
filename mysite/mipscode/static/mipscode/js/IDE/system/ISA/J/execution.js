export function executeTypeJ(instruction, sys) {
    if (instruction.func === 'j') {
        sys.regs.pc = instruction.does(instruction.target)
        sys.SetValueInViewRegister(sys.regs.pc, 'pc')
        sys.lastViewRegisterChanged = instruction.func
    }

    if (instruction.func === 'jal') {}
}
