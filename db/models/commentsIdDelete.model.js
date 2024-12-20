const db = require("../connection");

exports.removeCommentById = (comment_id) => {
  return db
    .query("DELETE FROM comments WHERE comment_id = $1 RETURNING *;", [
      comment_id,
    ])
    .then((result) => {
      return result.rows.length > 0;
    });
};
