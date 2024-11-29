const { deleteCommentById } = require("../models/commentsIdDelete.model");

exports.deleteCommentById = (req, res, next) => {
  const { comment_id } = req.params;

  deleteCommentById(comment_id)
    .then((deletedRowCount) => {
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: "Comment not found" });
      }
      res.status(204).send();
    })
    .catch((err) => {
      if (err.code === "22P02") {
        res.status(400).json({ error: "Invalid comment ID format" });
      } else {
        next(err);
      }
    });
};
