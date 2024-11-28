const db = require("../connection");

exports.insertCommentByArticleId = (article_id, username, body) => {
  const queryStr = `
    INSERT INTO comments (article_id, author, body, created_at, votes)
    VALUES ($1, $2, $3, NOW(), 0)
    RETURNING comment_id, article_id, author, body, created_at, votes;
  `;
  return db
    .query(queryStr, [article_id, username, body])
    .then(({ rows }) => rows[0]);
};
