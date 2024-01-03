// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

const student = {};

const addProperty = (object, key, value) => {
  object[key] = value;
};

let newKey = 'name';
let newValue = 'Gabriel'

addProperty(student, newKey, newValue);

newKey = 'lastName';
newValue = 'Amirati';

addProperty(student, newKey, newValue);

newKey = 'nameAndSurname';
newValue = student['name'] + ' ' + student['lastName'];

addProperty(student, newKey, newValue);

newKey = 'email';
newValue = 'gabriel_amirati@hotmail.com';

addProperty(student, newKey, newValue);

newKey = 'telefone';
newValue = '9 9550-7450'

addProperty(student, newKey, newValue);

newKey = 'gitHub';
newValue = 'Gabriel-lab-source'

addProperty(student, newKey, newValue);

newKey = 'linkedIn';
newValue = 'Gabriel Francisco Munhoz Amirati'

addProperty(student, newKey, newValue);

console.log(student);