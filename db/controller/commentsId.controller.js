const { addComment } = require("../models/commentsId.model");

exports.postCommentByArticleId = (req, res, next) => {
  const { article_id } = req.params;
  const { body, author } = req.body;

  addComment(article_id, body, author)
    .then((newComment) => {
      res.status(201).json({ comment: newComment });
    })
    .catch((err) => {
      console.error("Error adding comment:", err);
      next({ status: 500, message: "Failed to add comment" });
    });
};
