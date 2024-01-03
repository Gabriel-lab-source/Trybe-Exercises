// Função que gera um número aleatório:
const generateRandomNumber = () => Math.round(Math.random() * 10);

const conditionalPromise = () => 
  new Promise((resolved, rejected) => {
   setTimeout(() => {
    const randomNumber = generateRandomNumber();
    randomNumber % 2 === 0 ? resolved(`Promise resolvida. O número ${randomNumber} é par.`) : rejected(new Error(`Promise rejeitada. O número ${randomNumber} é ímpar.`))
   }, 1000); 
  });

conditionalPromise().then((resolve) => console.log(resolve)).catch((error) => console.log(error.message))