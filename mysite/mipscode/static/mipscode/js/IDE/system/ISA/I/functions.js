export const addi = (rs, imm) => rs + imm

export const addiu = (rs, imm) => rs + uInt(imm)

export const andi = (rs, imm) => rs & imm

export const beq = (rs, rt) => rs === rt

export const bge = (rs, rt) => rs >= rt

export const bgt = (rs, rt) => rs > rt 

export const ble = (rs, rt) => rs <= rt  

export const blt = (rs, rt) => rs < rt 

export const bne = (rs, rt) => rs !== rt

export const bgez = (rs) => rs >= 0

export const bgtz = (rs) => rs > 0 

export const blez = (rs) => rs <= 0  

export const bltz = (rs) => rs < 0 

export const lui = () => {}

export const lw = () => {}

export const ori = (rs, imm) => rs | imm 

export const sb = () => {}

export const slti = (rs, imm) => rs < imm ? 1 : 0 

export const sltiu = (rs, imm) => rs < uInt(imm) ? 1 : 0 

export const sh = () => {}

export const sw = () => {}

export const swc1 = () => {}

export const xori = (rs, imm) => rs ^ imm 
// ...
