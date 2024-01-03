const students = require('./ArrayOfObj');

const allNameStudents = [];

for (let index = 0; index < students.length; index += 1 ) {
  if(students[index].period === 'Manhã') {
    allNameStudents.push(`${students[index].firstName} ${students[index].lastName}`)
  }
}

console.log(allNameStudents);