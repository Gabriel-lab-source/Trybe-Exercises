const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger);
console.log(bigger); // 85