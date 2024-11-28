const db = require("../connection");

exports.updateArticleById = (article_id, inc_votes) => {
  const queryStr = `
    UPDATE articles
    SET votes = votes + $1
    WHERE article_id = $2
    RETURNING *;
  `;
  return db
    .query(queryStr, [inc_votes, article_id])
    .then(({ rows }) => rows[0]);
};
