const { removeCommentById } = require("../models/commentsIdDelete.model");

exports.deleteCommentById = (req, res, next) => {
  const { comment_id } = req.params;

  removeCommentById(comment_id)
    .then((deleted) => {
      if (!deleted) {
        return next({ status: 404, message: "Comment not found" });
      }
      res.status(204).send();
    })
    .catch((err) => {
      next({ status: 500, message: "Failed to delete comment" });
    });
};
