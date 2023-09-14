const students = require('./ArrayOfObj');

const studentResults = students.find((student) => student.firstName === 'Natalia').subjects.map((subject) => ({ [subject.name]: subject.grade >= 60 ? 'Aprovado' : 'Reprovado' }));

console.log(studentResults);