const {brl, usdToBrl} = require('./brlValue');
// console.log(convert);
const usd = 10;

const finalValue = usdToBrl(usd);

console.log(finalValue);
console.log(`valor do dólar: ${brl}`)