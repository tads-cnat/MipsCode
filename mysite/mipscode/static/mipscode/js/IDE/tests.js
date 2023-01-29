// achar registrador

const regs = {
  general: {
    $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
    $10: 0, $11: 0, $12: 0, $13: 6, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
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
    pc: 5, 
    hi: 0, 
    lo: 0
  }
}

const func = (reg) => {
  for (const type in regs) {
    if (Object.hasOwnProperty.call(regs, type)) {
      const element = regs[type]

      if (element.hasOwnProperty(reg))
        return element[reg]
    }
  } 
}

console.log(func('pc'))
console.log(func('$13'))
