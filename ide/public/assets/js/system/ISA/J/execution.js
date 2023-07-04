import view from '../../core/view.js'

export function executeTypeJ(instruction, sys) {
    if (instruction.func === 'j') {
        sys.regs.especial.pc = instruction.does(instruction.target)
        sys.pcChangedAtExecution = true
        view.setValueInViewRegister(sys.regs.especial.pc, 'pc')
        // sys.lastViewRegisterChanged = instruction.func
    }

    if (instruction.func === 'jal') {}
}
