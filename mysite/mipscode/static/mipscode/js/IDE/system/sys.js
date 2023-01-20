import memory from "./memory.js";
import view from "./view.js";
import * as user from './userAction.js'

// import view from "./viewRegisters.js";
import { convertDecimalToAddressHex, formatAddress, convertHexToDecimal } from "./toolkit.js";
import { executeTypeI } from './ISA/I/execution.js'
import { executeTypeR } from './ISA/R/execution.js'
import { executeTypeJ } from './ISA/J/execution.js'

const sys = {
    regs: {
        $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
        $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
        $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
        $30: 0, $31: 0, pc: 0, hi: 0, lo: 0, currentIndex: null
    },
    memory,
    addressCount: 0,
    instructions: [],
    regsStackTimeline: [],
    executedInstructionsStack: [],
    executionInstructionCount: 0,
    instructionExecuted: null, // 'none'
    instructionExecutedIndex: null,
    empty: true
}

Object.prototype.Call = async () => { 
    if (sys.regs.$2 === 1) { // integer to print
        view.console.dataOut(sys.regs.$4, 'value', '')
        return
    }

    if (sys.regs.$2 === 2) { // float to print
        console.log(sys.regs.$4.toFixed(2))
        return
    }

    if (sys.regs.$2 === 3) { // double to print
        console.log(sys.regs.$4.toFixed(1))
    }

    if (sys.regs.$2 === 5) { // $2 contains integer read
        // const input = parseInt(prompt())

        // TODO: tratar input
        user.utils.freeze()

        const input = await view.console.dataIn()
            .then(res => {
                console.log(res);
                sys.regs.$2 = res
                view.setValueInViewRegister(res, '$2')
            })
            .catch(err => console.log(err))

        console.log(input);
        
        user.utils.unFreeze()

        // sys.regs.$2 = input
        // view.setValueInViewRegister(input, '$2')
        return
    }

    if (sys.regs.$2 === 6) { // $2 contains float read
        sys.regs.$2 = parseFloat(prompt())
        return
    }

    if (sys.regs.$2 === 7) { // $2 contains double read
        sys.regs.$2 = parseFloat(prompt())
        return
    }

    if (sys.regs.$2 === 8) { // $2 contains string read
        sys.regs.$2 = prompt()
        return
    }

    // if (sys.regs.$2 === 9) // allocate heap regs

    if (sys.regs.$2 === 10) {
        view.console.dataOut(null, 'exit', 'Programa finalizado!')
        sys.cleanSys()
        sys.empty = true
        return
    }

    // TODO: Completar chamada do sistema
}

Object.prototype.cleanSys = () => {
    sys.regs = {
        $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
        $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
        $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
        $30: 0, $31: 0, pc: 0, hi: 0, lo: 0
    }
    sys.addressCount = 0
    sys.instructions = []
    sys.regsStackTimeline = []
    sys.viewInformations = []
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
    sys.regs.pc = convertHexToDecimal(
        sys.instructions.find( instruction => instruction.index === sys.instructionExecutedIndex + 1 ).address
    )
}

Object.prototype.FindJumpTarget = (index) => {
    return sys.instructions[index].address
}

Object.prototype.NextInstruction = () => {
    return sys.instructions.find( instruction => instruction.address === convertDecimalToAddressHex( sys.regs.pc ) )
}

Object.prototype.Execute = (instruction) => {
    if (instruction.typing.type === "i") executeTypeI(instruction, sys)
    
    if (instruction.typing.type === "r") executeTypeR(instruction, sys)
    
    if (instruction.typing.type === "j") executeTypeJ(instruction, sys)
    
    sys.instructionExecuted = instruction
    sys.instructionExecutedIndex = instruction.index
}

Object.prototype.Branch = (instruction, op) => {
    if (op === 'j') 
        sys.regs.pc = convertHexToDecimal(instruction.address)

    
}

async function getConsoleInputValue() {
    let v
    
    await view.console.dataIn().then(res => {
        v = res
        return v
    })

    //while (value !== Number) {}

}

export default sys;

// import memory from "./memory.js";
// // import view from "./viewRegisters.js";
// import { convertDecimalToAddressHex, formatAddress, convertHexToDecimal } from "./toolkit.js";
// import { executeTypeI } from './ISA/I/execution.js'
// import { executeTypeR } from './ISA/R/execution.js'
// import { executeTypeJ } from './ISA/J/execution.js'

// import * as Console from './console.js'

// const sys = { 
//     regs: {
//         $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
//         $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
//         $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
//         $30: 0, $31: 0, pc: 0, hi: 0, lo: 0, currentIndex: null
//     },
//     memory,
//     addressCount: 0,
//     instructions: [],
//     regsStackTimeline: [],
//     executedInstructionsStack: [],
//     viewInformations: [],
//     executionInstructionCount: 0,
//     instructionExecuted: null, // 'none'
//     instructionExecutedIndex: null,
//     initialAssembly: true,
//     lastViewRegisterChanged: null
// }

// Object.prototype.Data = () => {}

// Object.prototype.Text = () => {}

// Object.prototype.Word = () => {}

// Object.prototype.ToOutput = data => {}

// // Object.prototype.SetValueInViewRegister = (value, register) => {
// //     const reg = document.querySelector(`input[name="${register}"]`)
// //     reg.value = value
// // }

// Object.prototype.Call = () => {
//     if (sys.regs.$2 === 1) { // integer to print
//         Console.dataOut(sys.regs.$4, 'value', '')
//         return
//     }

//     else if (sys.regs.$2 === 2) console.log(sys.regs.$4.toFixed(2)); // float to print
//     else if (sys.regs.$2 === 3) console.log(sys.regs.$4.toFixed(1)); // double to print
//     else if (sys.regs.$2 === 5) {
//         sys.regs.$2 = parseInt(prompt());
//         sys.SetValueInViewRegister(sys.regs.$2, '$2')
//     } // $2 contains integer read
//     else if (sys.regs.$2 === 6) sys.regs.$2 = parseFloat(prompt()); // $2 contains float read
//     else if (sys.regs.$2 === 7) sys.regs.$2 = parseFloat(prompt()); // $2 contains double read
//     else if (sys.regs.$2 === 8) sys.regs.$2 = prompt(); // $2 contains string read
//     // else if (sys.regs.$2 === 9) // allocate heap regs
//     else if (sys.regs.$2 === 10) {
//         Console.dataOut(null, 'exit', 'Programa finalizado!')
//         sys.Clean();
//     };

//     // TODO: Completar chamada do sistema
// }

// Object.prototype.Clean = () => {
//     sys.regs = {
//         $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
//         $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
//         $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
//         $30: 0, $31: 0, pc: 0, hi: 0, lo: 0
//     }
//     sys.addressCount = 0
//     sys.instructions = []
//     sys.regsStackTimeline = []
//     sys.viewInformations = []
//     //sys.lastInstructionExecuted = 0
// }

// Object.prototype.SystemInputTreatement = (input) => {
//     const treatedInput = []
//     let labelForNextInstruction = null

//     input.forEach(element => { // TODO: Fazer a instrução que possui rótulo criar um array com este rótulo e um possível onlyLabel
//         if (element.onlyLabel === true) {
//             labelForNextInstruction = element.label[0]
//             return
//         }

//         // if (labelForNextInstruction !== null) {
//         //     element.label.push( labelForNextInstruction )
//         //     return
//         // }

//         if (element.label && labelForNextInstruction) {
//             element.label.push(labelForNextInstruction)
//             labelForNextInstruction = null
//         }

//         // if (element.label && labelForNextInstruction) {
//         //     element.label = [ element.label, labelForNextInstruction ]
//         //     labelForNextInstruction = null
//         // }

//         if (!element.label && labelForNextInstruction) {
//             element.label = labelForNextInstruction
//             labelForNextInstruction = null
//         }

//         // element.label !== null

//         treatedInput.push( element )
//         labelForNextInstruction = null
//     })

//     return treatedInput.map( (element, index) => {
//         element.index = index
//         return element
//     } )
// }

// Object.prototype.OnlyLabel = (instruction, regsSpace) => {
//     return {
//         address: formatAddress(regsSpace),
//         onlyLabel: true,
//         label: [ instruction.label ]
//     }
// }

// Object.prototype.SetNextInstructionInPc = () => {
//     // const instruction = sys.instructions.find( instruction => instruction.index === sys.instructionExecutedIndex + 1 )
//     // sys.regs.pc = convertHexToDecimal( instruction )
//     sys.regs.pc = convertHexToDecimal(
//         sys.instructions.find( instruction => instruction.index === sys.instructionExecutedIndex + 1 ).address
//     )
// }

// Object.prototype.FindJumpTarget = (index) => {
//     return sys.instructions[index].address
// }

// Object.prototype.NextInstruction = () => {
//     return sys.instructions.find( instruction => instruction.address === convertDecimalToAddressHex( sys.regs.pc ) )
// }

// Object.prototype.Execute = (instruction) => {
//     if (instruction.typing.type === "i") executeTypeI(instruction, sys)
    
//     if (instruction.typing.type === "r") executeTypeR(instruction, sys)
    
//     if (instruction.typing.type === "j") executeTypeJ(instruction, sys)
    
//     sys.instructionExecuted = instruction
//     sys.instructionExecutedIndex = instruction.index
// }

// Object.prototype.Branch = (instruction, op) => {
//     if (op === 'j') 
//         sys.regs.pc = convertHexToDecimal(instruction.address)

    
// }

// export default sys;
