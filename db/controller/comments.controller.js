const { fetchComments } = require("../models/comments.model");

exports.getCommentsByArticleId = (req, res, next) => {
  const { article_id } = req.params;

  fetchComments(article_id)
    .then((comments) => {
      if (!comments || comments.length === 0) {
        return next({
          status: 404,
          message: "No comments found for this article",
        });
      }
      res.status(200).json({ comments });
    })
    .catch((err) => {
      console.error("Error fetching comments:", err);
      next({ status: 500, message: "Failed to fetch comments" });
    });
};
