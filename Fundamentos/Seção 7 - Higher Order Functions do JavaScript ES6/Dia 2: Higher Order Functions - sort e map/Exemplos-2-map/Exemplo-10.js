const students = require('./ArrayOfObj');

const findStudent = (name, students) => {
  for (let index = 0; index < students.length; index += 1) {
    if (students[index].firstName === name) {
      return students[index];
    }
  }
};

const reportStatus = (name, students) => {
  const getStudent = findStudent(name, students);
  const report = [];
  for (let index = 0; index < getStudent.subjects.length; index += 1) {
    if (getStudent.subjects[index].grade >= 60) {
      report.push(`${getStudent.subjects[index].name} - Aprovado`);
    } else {
      report.push(`${getStudent.subjects[index].name} - Reprovado`);
    }
  }
  return report;
};

console.log(reportStatus('Natalia', students));
