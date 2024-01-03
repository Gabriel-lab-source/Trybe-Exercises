const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

delete Object.assign(obj, { newKey: obj['value1'] })['value1'];

console.log(obj); // { newKey: 'value' }
console.log(cloneObj);
