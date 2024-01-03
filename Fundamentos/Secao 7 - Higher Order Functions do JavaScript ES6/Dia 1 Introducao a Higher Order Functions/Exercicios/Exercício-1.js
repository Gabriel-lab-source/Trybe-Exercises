const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const employeeGenerator = (fullname) => {
  const email = fullname.toLowerCase().split(' ').join('_');
  return { fullname, email: `${email}@trybe.com` };
};

console.log(newEmployees(employeeGenerator));