const { expect } = require('chai');
const calculaSituacao = require('./calculaSituacao');

describe('Validação da função de médias', () => {
  
  describe('Quando a média for menor do que 7', () => {
    it('retorna reprovado', () => {
      const resposta = calculaSituacao(4);

      expect(resposta).to.be.equals('reprovado');
    });
  });

  describe('Quando a média for maior do que 7', () => {
    it('retorna aprovado', () => {
      const resposta = calculaSituacao(9);

      expect(resposta).to.be.equals('aprovado')
    });
  });

  // Feito para não passar
  describe('Quando a média for igual a 7', () => {
    it('retorna aprovado', () => {
      const resposta = calculaSituacao(7);

      expect(resposta).to.be.equals('aprovado')
    });
  });
});