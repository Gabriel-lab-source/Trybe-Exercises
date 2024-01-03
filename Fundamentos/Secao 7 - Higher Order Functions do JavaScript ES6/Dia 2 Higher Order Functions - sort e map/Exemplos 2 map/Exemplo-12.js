const students = require('./ArrayOfObj');

const reportStatus = (name, students) => {
  const studentInfo = students.find((student) => student.firstName === name);
  return studentInfo.subjects.map((subject) => (
    `${subject.name} - ${(subject.grade >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Natalia', students));
