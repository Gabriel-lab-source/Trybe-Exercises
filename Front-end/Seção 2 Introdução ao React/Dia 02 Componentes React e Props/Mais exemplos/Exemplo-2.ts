let arrayOfStrings: string[]; // armazenará uma lista de strings
let arrayOfNumbers: number[]; // armazenará uma lista de numbers
let arrayOfStringsOrNumbers: (string | number)[]; // armazenará uma lista de strings E/OU numbers
let arrayOfObjects: object[]; // armazenará uma lista de objetos

let person: {name: string, age: number };

type User = {
  id: number,
  name: string,
  modules?: string[],
}

let myUser: User;
