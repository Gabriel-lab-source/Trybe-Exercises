const students = require('./ArrayOfObj');

const morningStudents = [];

students.forEach((student) => {
  if (student.period === 'Manhã') morningStudents.push(`${student.firstName} ${student.lastName}`)
})

console.log(morningStudents);