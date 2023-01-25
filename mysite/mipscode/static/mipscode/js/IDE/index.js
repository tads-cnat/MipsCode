import sys from './system/core/sys.js'
import view from './system/core/view.js'
import errorHandler from './system/core/errors/manager.js'
import * as user from './system/core/userAction.js'

import { isTypeI, formatInstruction as formatI } from './system/core/ISA/I/manager.js'
import { isTypeR, formatInstruction as formatR } from './system/core/ISA/R/manager.js'
import { isTypeJ, formatInstruction as formatJ } from './system/core/ISA/J/manager.js'

import { convertHexToDecimal } from './system/core/toolkit.js'

user.mount.addEventListener('click', () => {
    sys.cleanSys()
    view.cleanView()

    view.structureInstructionsToMountView()
    //view.showPropertiesAfterMount()
    view.console.dataOut(null, 'comment', 'Código montado, programa iniciado!')
    
    const inputInstructions = view.getInputInstructions()

    if (!inputInstructions) return

    inputInstructions.forEach( (instruction, index) => {
        if ( isTypeI( instruction.func ) ) {
            const formattedInstrucion = formatI( instruction, sys.addressCount, index )

            sys.instructions.push(formattedInstrucion)

            view.linesAttributes.push({
                address: formattedInstrucion.address,
                code: formattedInstrucion.code,
                line: index + 1
            })

            sys.addressCount += 4

            return
        }

        if ( isTypeR( instruction.func ) ) {
            const formattedInstrucion = formatR( instruction, sys.addressCount, index )

            sys.instructions.push(formattedInstrucion)

            view.linesAttributes.push({
                address: formattedInstrucion.address,
                code: formattedInstrucion.code,
                line: index + 1
            })

            sys.addressCount += 4

            return
        }

        if ( isTypeJ( instruction.func ) ) {
            // console.log(sys)
            // console.log(instruction)

            // const instructionWithLabel = sys.instructions.find( instru => instru.label === instruction.values[0] )
            // console.log(instructionWithLabel); // TODO: label: ['test', 'testTwo']

            // const currentInstructions = view.linesAttributes.find( instru => instru.address === instructionWithLabel.address )
            // console.log(currentInstructions);

            // const instructionsBeforeLabel = currentInstructions.line - 1 // sys.instructions.viewInformations[currentInstructions.address].line
            // console.log(instructionsBeforeLabel);

            function test(instruction) {
                if (instruction.onlyLabel) return false
                
            }

            // const target = inputInstructions.find( current => {
            //     if (current.label) {
            //         console.log(current)
            //         if (current.label.includes(instruction.target)) return current
            //     }
            // } )

            const target = inputInstructions.find( (current) => current.label && current.label.includes('test') )
            const formattedInstrucion = formatJ( instruction, sys.addressCount, index, target )

            sys.instructions.push(formattedInstrucion)

            view.linesAttributes.push({
                address: formattedInstrucion.address,
                code: formattedInstrucion.code,
                line: index + 1
            })

            sys.addressCount += 4

            return
        }

        if (!instruction.values && !instruction.func) { // TODO: tratar melhor este caso do sistema.
            sys.instructions.push(
                sys.OnlyLabel( instruction, sys.addressCount )
            )
        }

    })

    view.mountView()

    sys.initialAssembly = false
    sys.empty = false

    sys.regs.especial.pc = convertHexToDecimal(sys.instructions[0].address) // TODO: fazer função disso no sys
    view.setValueInViewRegister(sys.regs.especial.pc, 'pc')

    console.log(sys)
})

user.unmount.addEventListener('click', () => {
    sys.cleanSys()
    view.cleanView()
    view.hidePropertiesAfterUnmount()
})

user.run.addEventListener('click', () => {
    if (sys.empty) return

    if (sys.instructions.length === 0)
        errorHandler('run', 'tryToRunWithoutInstructions')

    if (sys.instructionExecutedIndex) {
        sys.instructions.slice( sys.instructionExecutedIndex + 1 ).forEach( instruction => {
            sys.Execute( instruction )

            if (instruction.typing.type === 'j') 
                return

            if (instruction.index < sys.instructions.length) {
                sys.SetNextInstructionInPc()
                view.setValueInViewRegister(sys.regs.especial.pc, 'pc')
            }

        })

        console.log(sys)
        return
    }

    sys.instructions.forEach(instruction => {
        sys.Execute( instruction )

        if (instruction.typing.type === 'j') 
            return

        if (instruction.index < sys.instructions.length) {
            sys.SetNextInstructionInPc()
            view.setValueInViewRegister(sys.regs.especial.pc, 'pc')
        }

    })

    console.log(sys)
})

user.step.addEventListener('click', () => {
    if (sys.empty) return

    if (sys.instructions.length === 0)
        return errorHandler('step', 'tryToMoveOneStepWithoutInstructions')

    const instruction = sys.NextInstruction()

    if (!instruction) {}

    sys.regs.currentIndex = sys.instructionExecutedIndex
    sys.regsStackTimeline.push( Object.assign( {}, sys.regs ) )
    sys.Execute( instruction )

    // if (instruction.typing.type === 'j') 
    //     return

    if (sys.pcChangedAtExecution) {
        sys.pcChangedAtExecution = false
        return
    }

    console.log('passou do pcChangedAtExecution');

    if (instruction.index < sys.instructions.length) {
        sys.SetNextInstructionInPc()
        view.setValueInViewRegister(sys.regs.especial.pc, 'pc')
    }

    console.log(sys)
})

user.back.addEventListener('click', () => {
    if (sys.empty) return

    if (sys.instructions.length === 0) {
        errorHandler('back', 'tryBackOneStepWithoutInstructions')
        return
    }

    sys.regs = sys.regsStackTimeline.pop()
    sys.instructionExecutedIndex = sys.regs.currentIndex

    view.setValueInViewRegister(sys.regs[ sys.lastViewRegisterChanged ], sys.lastViewRegisterChanged)
    view.setValueInViewRegister(sys.regs.especial.pc, 'pc')

    console.log(sys)
});
