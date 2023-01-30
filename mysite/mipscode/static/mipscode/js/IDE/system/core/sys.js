import memory from './memory.js';
import view from './view.js';
import * as user from './userAction.js';
import sysHandling from '../errors/sysHandling.js';

// import view from "./viewRegisters.js";
import { convertDecimalToAddressHex, formatAddress, convertHexToDecimal } from "./toolkit.js";
import { executeTypeI } from '../ISA/I/execution.js'
import { executeTypeR } from '../ISA/R/execution.js'
import { executeTypeJ } from '../ISA/J/execution.js'

const sys = {
    regs: {
        general: {
            $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
            $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
            $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
            $30: 0, $31: 0
        },
        floatingPoint: {
            $f0: {float:0.0, double: 0.0}, $f1: {float:0.0, double: 0.0}, $f2: {float:0.0, double: 0.0}, $f3: {float:0.0, double: 0.0}, 
            $f4: {float:0.0, double: 0.0}, $f5: {float:0.0, double: 0.0}, $f6: {float:0.0, double: 0.0}, $f7: {float:0.0, double: 0.0}, 
            $f8: {float:0.0, double: 0.0}, $f9: {float:0.0, double: 0.0}, $f10: {float:0.0, double: 0.0}, $f11: {float:0.0, double: 0.0}, 
            $f12: {float:0.0, double: 0.0}, $f13: {float:0.0, double: 0.0}, $f14: {float:0.0, double: 0.0}, $f15: {float:0.0, double: 0.0}, 
            $f16: {float:0.0, double: 0.0}, $f17: {float:0.0, double: 0.0}, $f18: {float:0.0, double: 0.0}, $f19: {float:0.0, double: 0.0},
            $f20: {float:0.0, double: 0.0}, $f21: {float:0.0, double: 0.0}, $f22: {float:0.0, double: 0.0}, $f23: {float:0.0, double: 0.0}, 
            $f24: {float:0.0, double: 0.0}, $f25: {float:0.0, double: 0.0}, $f26: {float:0.0, double: 0.0}, $f27: {float:0.0, double: 0.0}, 
            $f28: {float:0.0, double: 0.0}, $f29: {float:0.0, double: 0.0}, $f30: {float:0.0, double: 0.0}, $f31: {float:0.0, double: 0.0}
        },
        especial: {
            pc: 0, 
            hi: 0, 
            lo: 0, 
        },
        currentIndex: null
    },
    memory,
    addressCount: 0,
    pcChangedAtExecution: false,
    instructions: [],
    regsStackTimeline: [],
    executedInstructionsStack: [],
    executionInstructionCount: 0,
    instructionExecuted: null, // 'none'
    instructionExecutedIndex: null,
    empty: true
}

Object.prototype.createSyscallInstance = (instruction, index) => {
    const syscall = {
        address: formatAddress(sys.addressCount),
        code: '0x0000000c',
        index,
        type: 'sys',
        syscall: true,
        label: instruction.label
    }

    sys.instructions.push(syscall)

    view.linesAttributes.push({
        address: syscall.address,
        code: syscall.code,
        line: index + 1
    })

    sys.addressCount += 4
}


Object.prototype.Call = async () => {
    if (sys.regs.general.$2 === 1) { // integer to print
        view.console.dataOut(sys.regs.general.$4, 'value', '')
        return true
    }

    if (sys.regs.general.$2 === 2) { // float to print
        view.console.dataOut(sys.regs.floatingPoint.$f12.float, 'value', '')
        return true
    }

    if (sys.regs.general.$2 === 3) { // double to print
        view.console.dataOut(sys.regs.floatingPoint.$f12.double, 'value', '')
        return true
    }

    if (sys.regs.general.$2 === 5) { // $2 contains integer read
        const onlyNumbers = new RegExp('^[0-9]+$')
        
        user.utils.freeze()

        const input = await view.console.dataIn()

        user.utils.unFreeze()

        if (!onlyNumbers.test(input))
            // sysError(incorrectIntegerValueInput)
        
        sys.regs.general.$2 = parseInt(input)
        view.setValueInViewRegister(input, '$2')

        return true
    }

    if (sys.regs.general.$2 === 6) { // $2 contains float read
        sys.regs.general.$2 = parseFloat(prompt())
        return true
    }

    if (sys.regs.general.$2 === 7) { // $2 contains double read
        sys.regs.general.$2 = parseFloat(prompt())
        return true
    }

    if (sys.regs.general.$2 === 8) { // $2 contains string read
        sys.regs.general.$2 = prompt()
        return true
    }

    // if (sys.regs.general.$2 === 9) // allocate heap regs

    if (sys.regs.general.$2 === 10) {
        view.console.dataOut(null, 'exit', 'Programa finalizado!')
        sys.cleanSys()
        sys.empty = true
        return true
    }

    // else new Error('valor em $2 não corresponde há uma ação do sistema')

    console.log('sys.call after execute');

    // TODO: Completar chamada do sistema
}

// Object.prototype.Call = () => {
//     return new Promise(async resolve => {
//         if (sys.regs.general.$2 === 1) { // integer to print
//             view.console.dataOut(sys.regs.general.$4, 'value', '')
//         }
    
//         else if (sys.regs.general.$2 === 2) { // float to print
//             view.console.dataOut(sys.regs.floatingPoint.$f12.float, 'value', '')
//         }
    
//         else if (sys.regs.general.$2 === 3) { // double to print
//             view.console.dataOut(sys.regs.floatingPoint.$f12.double, 'value', '')
//         }
    
//         else if (sys.regs.general.$2 === 5) { // $2 contains integer read
//             const onlyNumbers = new RegExp('^[0-9]+$')

//             const input = await view.console.dataIn()

//             if (!onlyNumbers.test(input))
//                 // sysError(incorrectIntegerValueInput)
            
//             sys.regs.general.$2 = parseInt(input)
//             view.setValueInViewRegister(input, '$2')
    
//         }
    
//         else if (sys.regs.general.$2 === 6) { // $2 contains float read
//             sys.regs.general.$2 = parseFloat(prompt())
//         }
    
//         else if (sys.regs.general.$2 === 7) { // $2 contains double read
//             sys.regs.general.$2 = parseFloat(prompt())
//         }
    
//         else if (sys.regs.general.$2 === 8) { // $2 contains string read
//             sys.regs.general.$2 = prompt()
//         }
    
//         // else if (sys.regs.general.$2 === 9) // allocate heap regs
    
//         else if (sys.regs.general.$2 === 10) {
//             view.console.dataOut(null, 'exit', 'Programa finalizado!')
//             sys.cleanSys()
//             sys.empty = true
//         }

//         // else new Error('valor em $2 não corresponde há uma ação do sistema')

//         console.log('sys.call after execute');
//         resolve()
//     })

//     // TODO: Completar chamada do sistema
// }

Object.prototype.cleanSys = () => {
    sys.regs = {
        general: {
            $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
            $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
            $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
            $30: 0, $31: 0
        },
        floatingPoint: {
            $f0: {float:0.0, double: 0.0}, $f1: {float:0.0, double: 0.0}, $f2: {float:0.0, double: 0.0}, $f3: {float:0.0, double: 0.0}, 
            $f4: {float:0.0, double: 0.0}, $f5: {float:0.0, double: 0.0}, $f6: {float:0.0, double: 0.0}, $f7: {float:0.0, double: 0.0}, 
            $f8: {float:0.0, double: 0.0}, $f9: {float:0.0, double: 0.0}, $f10: {float:0.0, double: 0.0}, $f11: {float:0.0, double: 0.0}, 
            $f12: {float:0.0, double: 0.0}, $f13: {float:0.0, double: 0.0}, $f14: {float:0.0, double: 0.0}, $f15: {float:0.0, double: 0.0}, 
            $f16: {float:0.0, double: 0.0}, $f17: {float:0.0, double: 0.0}, $f18: {float:0.0, double: 0.0}, $f19: {float:0.0, double: 0.0},
            $f20: {float:0.0, double: 0.0}, $f21: {float:0.0, double: 0.0}, $f22: {float:0.0, double: 0.0}, $f23: {float:0.0, double: 0.0}, 
            $f24: {float:0.0, double: 0.0}, $f25: {float:0.0, double: 0.0}, $f26: {float:0.0, double: 0.0}, $f27: {float:0.0, double: 0.0}, 
            $f28: {float:0.0, double: 0.0}, $f29: {float:0.0, double: 0.0}, $f30: {float:0.0, double: 0.0}, $f31: {float:0.0, double: 0.0}
        },
        especial: {
            pc: 0, 
            hi: 0, 
            lo: 0, 
            //currentIndex: null
        }
    }
    sys.addressCount = 0
    sys.instructions = []
    sys.regsStackTimeline = []
    sys.viewInformations = []
    sys.memory
    sys.addressCount = 0
    sys.pcChangedAtExecution = false
    sys.instructions = []
    sys.regsStackTimeline = []
    sys.executedInstructionsStack = []
    sys.executionInstructionCount = 0
    sys.instructionExecuted = null // 'none'
    sys.instructionExecutedIndex = null
    sys.empty = true
}

Object.prototype.OnlyLabel = (instruction, regsSpace) => {
    return {
        address: formatAddress(regsSpace),
        onlyLabel: true,
        label: [ instruction.label ]
    }
}

Object.prototype.SetNextInstructionInPc = () => {
    // const instruction = sys.instructions.find( instruction => instruction.index === sys.instructionExecutedIndex + 1 )
    // sys.regs.pc = convertHexToDecimal( instruction )
    sys.regs.especial.pc = convertHexToDecimal(
        sys.instructions.find( instruction => instruction.index === sys.instructionExecutedIndex + 1 ).address
    )
}

Object.prototype.FindJumpTarget = (index) => {
    return sys.instructions[index].address
}

Object.prototype.NextInstruction = () => {
    return sys.instructions.find( instruction => instruction.address === convertDecimalToAddressHex( sys.regs.especial.pc ) )
}

Object.prototype.Execute = (instruction) => {
    if (instruction.typing.type === "i") executeTypeI(instruction, sys)
    
    if (instruction.typing.type === "r") executeTypeR(instruction, sys)
    
    if (instruction.typing.type === "j") executeTypeJ(instruction, sys)

    sys.instructionExecuted = instruction
    sys.instructionExecutedIndex = instruction.index
    sys.regs.currentIndex = instruction.index
}

Object.prototype.Branch = (instruction, op) => {
    if (op === 'j') 
        sys.regs.especial.pc = convertHexToDecimal(instruction.address)

}

export default sys;
