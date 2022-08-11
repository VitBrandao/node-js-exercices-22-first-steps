const { expect } = require('chai');

const getById = require('./allSimpsons');

describe('Testa se os IDs correspondem às personagens', () => {

    it('Teste para Homer', async () => {
      const response = await getById(1);

      expect(response).to.be.equals('Homer Simpson')
    });

    it('Teste para Milhouse', async () => {
      const response = await getById(10);

      expect(response).to.be.equals('Milhouse Van Houten')
    });
});

