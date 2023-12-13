// Testes 
const { copyRegs } = require('./toolkit');

describe('copyRegs', () => {
  it('deve criar uma cópia dos registradores corretamente', () => {
    // Crie um objeto de registradores de exemplo
    const sampleRegs = {
      general: { reg1: 10, reg2: 20 },
      floatingPoint: { f1: 3.14, f2: 2.71 },
      especial: { e1: 'foo', e2: 'bar' },
    };

    // Chame a função copyRegs para criar uma cópia
    const copiedRegs = copyRegs(sampleRegs);

    // Verifique se as cópias são iguais aos originais
    expect(copiedRegs.general).toEqual(sampleRegs.general);
    expect(copiedRegs.floatingPoint).toEqual(sampleRegs.floatingPoint);
    expect(copiedRegs.especial).toEqual(sampleRegs.especial);

    // Verifique se currentIndex é null
    expect(copiedRegs.currentIndex).toBeNull();
  });
 
  // caso de falha
   it('deve retornar um objeto vazio se nenhum objeto regs for fornecido', () => {
    // Chama função copyRegs sem fornecer um objeto
    const copiedRegs = copyRegs();

    // Verifique se o resultado é um objeto vazio
    expect(copiedRegs).toEqual({});
  });
});



import { findRegValue } from './toolkit';

describe('fedRedValue', () => {
  it('deve retornar o valor correto para um registrador existente', () =>{
    const regs = {
      general: {
        reg1: 10,
        reg2: 20,
      },

      floatingPoint: {},
      especial: {},
    };

    const regName = 'reg1';
    const regValue = findRegValue(regName, regs);

    expect(regValue).toBe(10);
  });

  it('deve retornar undefined para um registrador inexistente', () => {
    const regs = {
      general: {
        reg1: 10,
        reg2: 20,
      },
      floatingPoint: {},
      especial: {},
    };

    // Um registrador que não existe
    const regName = 'reg3'; 
    const regValue = findRegValue(regName, regs);

    expect(regValue).toBeUndefined();
  });

  it('deve retornar undefined para um registrador inexistente mesmo em um objeto vazio', () => {
    const regs = {
      general: {},
      floatingPoint: {},
      especial: {},
    };

    // Um registrador que não existe
    const regName = 'reg1'; 
    const regValue = findRegValue(regName, regs);

    expect(regValue).toBeUndefined();
  });
});



import { convertDecimalToBin } from './toolkit';

describe('convertDecimalToBin', () => {
  // caso correto esperado
  it('deve converter 10 para "1010"', () => {
    const decimalValue = 10;
    const binaryValue = convertDecimalToBin(decimalValue);

    expect(binaryValue).toBe('1010');
  });

  /* //Ajustar a funpção para o caso de falha
  it('deve falhar ao tentar converter uma string em vez de número', () => {
    const stringValue = 'String em vez de número';
    const binaryValue = convertDecimalToBin(stringValue);

    expect(binaryValue).toBe('1010');
  }); */
});



// Ajeitar o teste para conversão em endereço hexadecimal
/* import { convertDecimalToAddressHex } from './toolkit';

describe('convertDecimalToAddressHex', () => {
  it('deve converter 16 para 0x00400000', () => {
    const decimalValue = 16;
    const hexValue = convertDecimalToAddressHex(decimalValue);
    expect(hexValue).toBe('0x00400000');
  });
});  */
