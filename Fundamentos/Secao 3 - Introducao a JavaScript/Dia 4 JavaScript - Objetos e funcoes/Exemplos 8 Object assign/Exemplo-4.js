const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

const age = 'value1';
console.log(obj[age]);
console.log(cloneObj[age]);
console.log(obj);
console.log(cloneObj);

obj['newValue1'] = obj['value1'];

console.log(obj);

delete obj['value1'];

console.log(obj);
