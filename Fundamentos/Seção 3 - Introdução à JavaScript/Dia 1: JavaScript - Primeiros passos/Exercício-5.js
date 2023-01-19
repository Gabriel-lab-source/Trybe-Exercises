/* 5) 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

const degreeAngleA = 90;
const degreeAngleB = 45;
const degreeAngleC = 45;
const degreeAngleD = 55;
const degreeAngleE = -30;
const degreeAngleF = 0;

let sumOfABandC = degreeAngleA + degreeAngleB + degreeAngleC;
let sumOfABandD = degreeAngleA + degreeAngleB + degreeAngleD;
let sumOfDEandF = degreeAngleD + degreeAngleE + degreeAngleF;

let anglesABandCareNegativesOrNulls = degreeAngleA <= 0 && degreeAngleB <= 0 && degreeAngleC <= 0;

if(sumOfABandC === 180) {
  console.log('O valor das três constantes formam um triângulo, pois a soma de seus ângulos internos equivalem a 180 graus');
} else if(a <= 0 || b <= 0 || c <= 0) {
  console.log('O valor de uma ou mais das três constantes possuem um valor nulo ( = 0) ou negativo, portanto não formam um triângulo');
} else {
  console.log('O valor das três constantes não formam um triângulo, pois o valor de seus ângulos internos não equivalem a 180 graus');
}

if(d <= 0 || e <= 0 || f <= 0) {
  console.log('O valor de uma ou mais das três constantes possuem um valor nulo ( = 0) ou negativo, portanto a soma de seus ângulos internos não equivalem a 180 graus e consequentemente não formam um triângulo');
} else if(d > 0 || e > 0 || f > 0 && sumOfDEandF !== 180) {
  console.log('O valor das três constantes não possuem valores nulos ( != 0) ou negativos, mas não formam um triângulo já que a soma dos ângulos internos não equivalerem a 180 graus');
} else {
  console.log('O valor das três constantes não possuem valores nulos ( != 0) ou negativos e formam um triângulo, já que a soma dos ângulos internos equivalem a 180 graus');
}

if(a <= 0 || b <= 0 || d <= 0) {
  console.log('O valor de uma ou mais das três constantes possuem um valor nulo ( = 0) ou negativo, portanto a soma de seus ângulos internos não equivalem a 180 graus e consequentemente não formam um triângulo');
} else if(a > 0 || b > 0 || d > 0 && sumOfABandD !== 180) {
  console.log('O valor das três constantes não possuem valores nulos ( != 0) ou negativos, mas não formam um triângulo já que a soma dos ângulos internos não equivalerem a 180 graus');
} else {
  console.log('O valor das três constantes não possuem valores nulos ( != 0) ou negativos e formam um triângulo, já que a soma dos ângulos internos equivalem a 180 graus');
}