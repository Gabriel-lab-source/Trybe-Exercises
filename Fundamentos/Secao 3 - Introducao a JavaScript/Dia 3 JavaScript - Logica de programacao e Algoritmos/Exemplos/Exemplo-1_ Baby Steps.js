// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

// Portanto, primeiro vamos interpretar o que está sendo pedido, e essa etapa é crucial para solucionar o problema. Se interpretarmos errado, o algoritmo e consequentemente o código estará errado.

// Analisando o enunciado, sabemos que:

// 1 - Devemos utilizar o array fruits;
// 2 - O termo “percorra“ indica uma estrutura de repetição, ou loop - (for);
// 3 - "Somando todos os valores“ mostra que devemos ter uma variável que guarda o valor da soma dos valores - (let sum);
// o termo “caso“ indica uma estrutura condicional, ou if;
// “imprima o valor final“ indica um console.log;

// Pode parecer um pouco bobo, mas, em enunciados complexos, analisar friamente o enunciado nos afasta de cometermos erros e termos que escrever todos os passos seguintes novamente.

// Agora vamos criar o algoritmo, e para isso faremos uso dos baby steps. Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.

// 1 - Adicionar o array;
// 2 - Criar uma variável com valor 0;
// 3 - Criar um loop que percorre o array;
// 4 - Incrementar a variável com o valor correspondente a cada loop;
// 5 - Criar um if com a condição de a variável ser maior que 15;
// 6 - Caso a variável obedeça à condição:
//     1 - Imprimir a variável
// 7 - Caso não obedeça à condição:
//     1 - Imprimir a mensagem “valor menor que 16”.

// No momento, já interpretamos o problema e já criamos um algoritmo, com base nos baby steps, para ele. Como última etapa, vamos codificá-lo, seguindo nosso algoritmo:

// Adicionar o array: 

let fruits = [3, 4, 10, 1, 12];

// Criar uma variável com valor 0:

let sum = 0;

// Criar um loop que percorre o array:

for (let index = 0; index < fruits.length; index += 1) {
  // Incrementar a variável com o valor correspondente a cada loop:
  sum += fruits[index]; 
}

// Criar um if com a condição de a variável ser maior que 15:

if (sum > 15) {
  // Caso a variável obedeça à condição: Imprimir a variável::
  console.log(sum);
} else {
  // Caso não obedeça à condição: Imprimir a mensagem “valor menor que 16”:
  console.log('Valor menor que 16');
}

// Com o tempo e repetição, muitas dessas etapas se tornam automáticas. Porém é extremamente útil sabermos construir um algoritmo sem codificá-lo.

// Quando estiver escrevendo um algoritmo, sempre responda às seguintes perguntas:

// 1 - Eu resolvi o problema?
// 2 - Havia outras maneiras de resolver o problema?
// 3 - A maneira que eu escolhi foi a mais eficiente possível?
// 4 - Seria possível inverter ou retirar algum passo?
// 5 - Se eu fosse um computador, conseguiria entender todas as instruções?

// Lembre-se sempre: se você travar em algum exercício, recomece seu raciocínio com baby steps! Certamente você será capaz de dividir algum passo em outros passos menores. Isso ajudará muito na hora de resolver problemas.