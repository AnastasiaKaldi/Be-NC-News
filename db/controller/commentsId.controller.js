const { insertCommentByArticleId } = require("../models/commentsId.model");
exports.postCommentByArticleId = (req, res, next) => {
  const { article_id } = req.params;
  const { username, body } = req.body;

  if (!username || !body) {
    return res
      .status(400)
      .send({ error: "Bad request: Missing required fields" });
  }

  insertCommentByArticleId(article_id, username, body)
    .then((comment) => {
      console.log("Comment inserted:", comment); // Log the inserted comment
      res.status(201).json({ comment });
    })
    .catch((err) => {
      console.error("Error in postCommentByArticleId:", err); // Log the error details
      next(err); // Forward to the error-handling middleware
    });
};
