let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

// Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após desenvolver a função, observe a sugestão de resposta a seguir e compare-a com sua solução.

const showStudentSkills = (obj1, obj2) => {

  const student1Skills = Object.keys(obj1);
  const student2Skills = Object.keys(obj2);

  console.log('Estudante 1');

  for (let skills in student1Skills) {
    console.log(`Habilidade: ${student1Skills[skills]} -> Nível: ${obj1[student1Skills[skills]]}`);
  }

  console.log('Estudante 2');

  for (let skills in student2Skills) {
    console.log(`Habilidade: ${student2Skills[skills]} -> Nível: ${obj2[student2Skills[skills]]}`);
  }
};

showStudentSkills(student1, student2);