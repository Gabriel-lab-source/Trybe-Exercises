const techList = (arrayOfTechSkills, name) => {
  try {
    if (arrayOfTechSkills.length === 0) throw new Error('Vazio!');
    const sortArrayOfTechSkills = arrayOfTechSkills.sort();
    let arrayOfObj = [];
    for (let techSkill of sortArrayOfTechSkills) {
      arrayOfObj.push({'tech': techSkill, 'name': name});
    }
    return arrayOfObj;
  } catch (error) {
    return error.message;
  }
};

module.exports = techList;