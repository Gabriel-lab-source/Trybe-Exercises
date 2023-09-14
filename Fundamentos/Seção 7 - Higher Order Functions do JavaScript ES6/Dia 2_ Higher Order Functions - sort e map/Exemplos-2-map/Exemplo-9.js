const students = require('./ArrayOfObj');

const allNameStudents = students.filter((student) => (
  student.period === 'Manhã')).map((student) => `${student.firstName} ${student.lastName}`);

console.log(allNameStudents);