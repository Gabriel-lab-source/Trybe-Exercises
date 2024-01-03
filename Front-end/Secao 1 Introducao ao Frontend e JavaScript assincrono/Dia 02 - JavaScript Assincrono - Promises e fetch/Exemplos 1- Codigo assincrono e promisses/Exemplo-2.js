// Sintaxe do construtor das promises: 

new Promise((resolve, reject) => {});

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

console.log(resolvedPromise()); // Isso entrega a promise ainda em estado pendente: Promise { <pending> }

resolvedPromise().then((resolve) => console.log(resolve)); // O método then espera que a promise seja resolvida, e então entrega o resultado dentro do parâmetro da callback que ele recebe 

