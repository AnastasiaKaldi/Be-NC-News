const {
  insertCommentByArticleId,
} = require("../models/commentsArticleId.model");

exports.postCommentByArticleId = (req, res, next) => {
  const { article_id } = req.params;
  const { username, body } = req.body;
  if (!username || !body) {
    return res
      .status(400)
      .json({ error: "Bad request: Missing required fields" });
  }
  insertCommentByArticleId(article_id, username, body)
    .then((comment) => {
      res.status(201).json({ comment });
    })
    .catch((err) => {
      if (err.code === "23503") {
        res.status(404).json({ error: "Invalid article ID or username" });
      } else if (err.code === "22P02") {
        res.status(400).json({ error: "Invalid article ID format" });
      } else {
        next(err);
      }
    });
};
