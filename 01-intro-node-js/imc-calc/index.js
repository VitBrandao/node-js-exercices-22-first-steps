const readline = require('readline-sync');

const weight = readline.questionInt('Informe seu peso (kg): ');
const height = readline.questionFloat('Informe sua altura (m): ');

const imc = weight / (height * height);

const finalState = require('./finalState');
const imcStatus = finalState(imc);

console.log(`Seu IMC é ${imc.toFixed(2)}, o que indica ${imcStatus}.`);