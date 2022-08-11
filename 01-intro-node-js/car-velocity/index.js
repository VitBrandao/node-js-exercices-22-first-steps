const readline = require('readline-sync');

const distance = readline.questionInt('Digite a distância percorrida (m): ');
const time = readline.questionInt('Digite o tempo (s): ');

const teste = readline.qu

const velocity = distance / time;

const velocityToKmH = velocity * 3.6;

console.log(`A velocidade foi de ${velocityToKmH} km/h.`);