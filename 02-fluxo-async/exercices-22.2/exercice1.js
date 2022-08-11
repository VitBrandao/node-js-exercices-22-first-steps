/* Crie uma função que recebe três parâmetros retorna uma Promise .
Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique pelo terceiro ( (a + b) * c ).
Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
*/

const myFunction = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
    ) reject(new Error("Informe apenas números"));

    const finalResult = ((num1 + num2) * num3);

    if (finalResult < 50) reject(new Error("Valor muito baixo"));

    resolve(finalResult)
  });

  return promise;
}

// Parte 2 - utilizar função com valores gerados aleatoriamente
const var1 = Math.floor(Math.random() * 100);
const var2 = Math.floor(Math.random() * 100);
const var3 = Math.floor(Math.random() * 100);

myFunction(var1, var2, var3)
  .then(result => console.log(`O resultado final é ${result}`))
  .catch(error => console.log(`${error}`))