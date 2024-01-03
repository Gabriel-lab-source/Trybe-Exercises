/* const studentRegister = (name, age) => {
  try {
    if (!name || !age) throw new Error('É necessário preencher nome e idade');
    if (age < 18) throw new Error('Você ainda não tem idade para dirigir')
    return `${name}, seja bem vindo!`;
  } catch (error) {
    return error.message;
  }
} */

const validateInfo = (name, age) => {
  if (!name || !age) {
    throw new Error("Todas as informações são necessárias");
  }
};

const validateLegalAge = (age) => {
  if (age < 18) {
    throw new Error(
      "Ops, infelizmente nesse momento você não pode fazer as aulas"
    );
  }
};

const studentRegister = (name, age) => {
  try {
    validateInfo(name, age);
    validateLegalAge(age);
    return `${name}, boas-vindas à AuTrybe!`;
  } catch (error) {
    return error.message;
  }
};
