const CommentService = require('../services/commentsService');

const getByIdAndComments = async (req, res) => {
  try {
    const { id } = req.params;
    
    const account = await CommentService.getCommentsByAccountId(id);

    if (!account) {
      return res.status(404).json({ message: 'Conta não encontrada' });
    }

    return res.status(200).json(account);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const saveComment = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  try {    
    await CommentService.saveComment(id, message);

    return res.status(200).json({ message: 'Comentário adicionado com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getByIdAndComments,
  saveComment,
};