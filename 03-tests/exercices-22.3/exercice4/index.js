/*  Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
Após concluir a escrita do arquivo ela deverá retornar um ok .
Descreva todos os cenários de teste utilizando describes ;
Descreva todos os testes que serão feitos utilizando its ;
Crie as asserções validando se o retorno da função possui o valor e tipo esperado. */


const fs = require('fs').promises;

async function writeContent(name, content) {
    const writing = await fs.writeFile(name, content);

    return 'ok';
};

// console.log(writeContent('my-file.txt', 'Eu estive aqui'));

module.exports = writeContent;