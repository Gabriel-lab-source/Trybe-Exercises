const userService = require('../services/user.service');

const error500Message = 'Algo deu errado';

/* Esta função usa o método findAll do Sequelize para buscar todas as linhas da tabela Users
Equivale a fazer a query: SELECT * FROM Users */
const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

/* Esta função usa o método findByPk do Sequelize para buscar um usuário pelo id.
Equivale a fazer a query: SELECT * FROM Users WHERE id=? */
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

/* Esta função usa o método findOne do Sequelize combinado 
com a chave where para buscar por id e email. 
Equivale a fazer a query: SELECT * FROM Users WHERE id=? AND email=? */
const getByIdAndEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await userService.getByIdAndEmail(id, email);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

/* Esta função usa o método create do Sequelize para inserir um objeto na tabela Users
Equivale a fazer a query: INSERT INTO Users (full_name, email, phone_num) VALUES (?, ?, ?) */
const createUser = async (req, res) => {
  try {
    const { fullName, email, phoneNum } = req.body;
    const newUser = await userService.createUser(fullName, email, phoneNum);

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

/* Esta função usa o método update do Sequelize para atualizar um objeto na tabela Users
Equivale a fazer a query: UPDATE Users SET full_name=?, email=?, phone_num=? WHERE id=?*/
const updateUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;
    const updatedUser = await userService.updateUser(id, fullName, email);

    if (!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

/* Esta função usa o método destroy do Sequelize para remover um objeto na tabela Users
Equivale a fazer a query: DELETE FROM Users WHERE id=?*/
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};
