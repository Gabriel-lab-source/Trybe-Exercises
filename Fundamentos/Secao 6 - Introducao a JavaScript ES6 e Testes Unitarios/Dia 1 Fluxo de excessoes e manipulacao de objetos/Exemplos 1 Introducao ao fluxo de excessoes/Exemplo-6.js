const getStudentFinalScore = (grade1, grade2, grade3, grade4) => {
  try {
    checkGrades(grade1, grade2, grade3, grade4);
    const finalScore = (grade1 + grade2 + grade3 + grade4) / 4;
    return `The student final score is: ${finalScore.toFixed(1)}`;
  } catch(error) {
    return error.message;
  }
}

checkGrades = (grade1, grade2, grade3, grade4) => {
  if (typeof grade1 !== 'number' || typeof grade2 !== 'number' || typeof grade3 !== 'number' || typeof grade4 !== 'number' ) {
    throw new Error('Grades must be numbers');
  }
}

console.log(getStudentFinalScore('4', 5.3, 5.6, 8.5));