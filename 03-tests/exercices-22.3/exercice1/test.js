const { expect } = require('chai');

const verifyNumber = require('./index');

describe('Verifica retornos da função', () => {
  
  describe('Para numeros positivos', () => {
    it('Retorno correto para o número 1', () => {
      const response = verifyNumber(1);

      expect(response).to.be.equals("positivo");
    });
  });

  describe('Para numeros negativos', () => {
    it('Retorno correto para o número -1', () => {
      const response = verifyNumber(-1);

      expect(response).to.be.equals("negativo");
    });
  });

  describe('Para numeros neutros', () => {
    it('Retorno correto para o número 0', () => {
      const response = verifyNumber(0);

      expect(response).to.be.equals("neutro");
    });
  });

  describe('Para valores não numéricos', () => {
    it('Retorno correto para uma string', () => {
      const response = verifyNumber('valor');

      expect(response).to.be.equals("o valor deve ser um número");
    });
  });
})

