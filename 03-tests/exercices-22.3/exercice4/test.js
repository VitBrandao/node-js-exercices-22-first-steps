const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const writeContent = require('./index');

describe('Verifica função de escrever no arquivo', () => {

  before(() => {
    sinon.stub(fs, "writeFile").resolves('ok');
  });

  after(() => {
    fs.writeFile.restore();
  });

  it('Verifica se retorna o ok ao escrever meu nome', async () => {
    const response = await writeContent('my-file.txt', 'Brandão');

    expect(response).to.be.equals('ok');
  });
});