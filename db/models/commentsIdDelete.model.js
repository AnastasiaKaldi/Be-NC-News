const db = require("../connection");

exports.deleteCommentById = (comment_id) => {
  const queryStr = `
    DELETE FROM comments
    WHERE comment_id = $1;
  `;
  return db.query(queryStr, [comment_id]).then(({ rowCount }) => rowCount);
};
