const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

Object.assign(obj, { newKey: obj['value1'] })['value1'];

console.log(obj);
console.log(cloneObj);

delete obj['value1'];

console.log(obj); // { newKey: 'value' }