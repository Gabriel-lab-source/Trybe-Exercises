let customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
let lastName = 'Ferreira';

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(customer, newKey, lastName);

console.log(customer);

newKey = 'fullName';
let fullName = customer['firstName'] + ' ' + customer['lastName'];

addProperty(customer, newKey, fullName);
console.log(customer);
