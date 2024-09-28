class MathStudent {
  private _registration: string;
  private _name: string;
  private _testScore: number[];
  private _homeWork: number[];

  constructor(registration: string, name: string, testScore: number[], homeWork: number[]) {
    this._registration = registration;
    this._name = name;
    if (testScore.length !== 4) {
      throw new Error('Test scores must contain exactly 4 numbers.');
    }
    this._testScore = testScore;
    if (homeWork.length !== 2) {
      throw new Error('Homework scores must contain exactly 2 numbers.');
    }
    this._homeWork = homeWork;
  }

  getStudentTotalScore() {
    const totalTestScore = this._testScore.reduce((acc, curr) => acc + curr, 0);
    const totalHomeWorksScore = this._homeWork.reduce((acc, curr) => acc + curr, 0);
    const totalScore = totalTestScore + totalHomeWorksScore;
    return totalScore;
  }

  getStudentAverageScore() {
    const getStudentTS = this.getStudentTotalScore();
    return getStudentTS/6
  }
}

const mathStudent1 = new MathStudent('4587AGV', 'Claudinho Brasil', [9, 5, 3], [8, 4])

console.log(mathStudent1.getStudentTotalScore());

console.log(mathStudent1.getStudentAverageScore());