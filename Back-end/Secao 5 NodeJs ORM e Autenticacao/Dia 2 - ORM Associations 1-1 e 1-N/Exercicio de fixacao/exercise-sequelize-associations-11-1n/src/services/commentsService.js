const { Comment } = require('../models');

const getCommentsByAccountId = async (id) => {
  const listOfComments = await Comment.findAll({
    where: { accountId: id },
  });

  return listOfComments;
};

const saveComment = async (id, message) => {
  const createComment = await Comment.create({ 
    message, upvoting: 0, downvoting: 0, accountId: id });
  return createComment;
};

module.exports = {
  getCommentsByAccountId,
  saveComment,
};
