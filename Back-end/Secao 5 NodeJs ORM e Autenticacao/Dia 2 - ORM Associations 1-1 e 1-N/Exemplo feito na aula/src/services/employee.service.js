const { Address, Employee } = require('../models/');
const Sequelize = require('sequelize');
const config = require('../config/config');
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);


const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}

const insert = async ({ firstName, lastName, age, city, street, number }) => {
  //Abaixo, um exemplo de Unmanaged Transaction

  // const t = await sequelize.transaction();
  // try {
  //   // Depois executamos as operações
  //   const employee = await Employee.create(
  //     { firstName, lastName, age },
  //     { transaction: t },
  //   );

  //   await Address.create(
  //     { city, street, number, employeeId: employee.id },
  //     { transaction: t },
  //   );

  //   // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
  //   // Com isso, podemos finalizar a transação usando a função `commit`.
  //   await t.commit();
  //   return employee;
  // } catch (e) {
  //   // Se entrou nesse bloco é porque alguma operação falhou.
  //   // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
  //   await t.rollback();
  //   console.log(e);
  //   throw e; // Jogamos o erro para a controller tratar
  // }

  // Abaixo, um exemplo de Managed Transaction

  const result = await sequelize.transaction(async (t) => {
    const employee = await Employee.create({
      firstName, lastName, age,
    }, { transaction: t });

    await Address.create({
      city, street, number, employeeId: employee.id
    }, { transaction: t });
    return employee;
  });
  console.log(result);
  
  return result;
  // Se chegou até aqui é porque as operações foram concluídas com sucesso,
  // não sendo necessário finalizar a transação manualmente.
  // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
// };
};


module.exports = { getAll, getById, insert };