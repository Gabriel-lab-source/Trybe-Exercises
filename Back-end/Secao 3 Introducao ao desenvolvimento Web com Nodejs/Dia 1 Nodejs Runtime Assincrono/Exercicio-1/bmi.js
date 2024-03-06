const bmiCondition = require('./bmiCondition');

const readline = require('readline-sync');

const weightInKg = readline.questionFloat('What’s your weight? ');
const heightInCm = readline.question('What’s your height? ');

const handleBMI = (weight, height) => {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = heightInCm / 100;
  const heightSquared = heightInMeters ** 2;
  
  return weightInKg / heightSquared;
};

const handleBMICategory = (bmi) => {
  const conditions = Object.keys(bmiCondition);
  const resultFind = conditions.find((condition) => {
    const { minBMI, maxBMI } = bmiCondition[condition];
    return bmi >= minBMI && bmi <= maxBMI
  });
  return resultFind;
}

const main = () => {
  const bmi = handleBMI(weightInKg, heightInCm);
  const category = handleBMICategory(bmi)
  console.log(`BMI: ${bmi.toFixed(2)}, Category: ${category}`);
};

main();