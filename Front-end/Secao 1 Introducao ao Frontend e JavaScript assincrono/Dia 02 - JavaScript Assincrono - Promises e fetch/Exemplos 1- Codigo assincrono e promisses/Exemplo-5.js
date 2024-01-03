// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

resolvedPromise()
  .then((response) => {
    console.log(`resolvedPromise: o número gerado é ${response}.`);
  })
  .catch((response) => {
    console.log(`Com a promise resolvida, não irá passar pelo catch`);
  })
  .finally(() => console.log('Fim da execução da primeira promise.'));

// O código não assíncrono será executado antes do retorno da resolvedPromise mesmo estando na linha de baixo

console.log(`Esse número não foi gerado por um código assíncrono: ${generateRandomNumber()}`);
