const AccountsService = require('../services/accounts.service');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const account = await AccountsService.getById(id);

    if (!account) {
      return res.status(404).json({ message: 'Conta não encontrada' });
    }

    return res.status(200).json(account);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getByIdLazy = async (req, res) => {
  try {
    const { id } = req.params;
    
    const account = await AccountsService.getByIdLazy(id);

    if (!account) {
      return res.status(404).json({ message: 'Conta não encontrada' });
    }

    return res.status(200).json(account);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const saveAccountAndProfile = async (req, res) => {
  try {    
    const save = await AccountsService.saveAccountAndProfile(req.body);

    if (save.message) {
      return res.status(404).json(save);
    }

    return res.status(200).json({ message: 'Conta cadastrada com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getById,
  getByIdLazy,
  saveAccountAndProfile,
};