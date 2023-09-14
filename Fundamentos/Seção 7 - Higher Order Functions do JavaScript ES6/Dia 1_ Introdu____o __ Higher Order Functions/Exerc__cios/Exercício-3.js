/* const showStudentScore = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
};

const getStudentScore = (correctAnswers, stdAnswers) => {
  let score = 0;
  for (let i = 0; i < correctAnswers.length; i += 1) {
    if (correctAnswers[i] === stdAnswers[i]) score += 1;
    else if (stdAnswers[i] === 'N.A') score += 0;
    else if (correctAnswers[i] !== stdAnswers) score -= 0.5;
  } return score;
}; */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));