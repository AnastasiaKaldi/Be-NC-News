// const db = require("../connection");

// exports.fetchCommentsByArticleId = (article_id) => {
//   const queryStr = `
//     SELECT
//       comment_id,
//       votes,
//       created_at,
//       author,
//       body,
//       article_id
//     FROM comments
//     WHERE article_id = $1
//     ORDER BY created_at DESC;
//   `;

//   return db.query(queryStr, [article_id]).then(({ rows }) => {
//     return rows;
//   });
// };

const comments = require("../data/test-data/comments");

exports.fetchComments = (article_id) => {
  const filteredComments = comments.filter(
    (comment) => comment.article_id === Number(article_id)
  );

  const sortedComments = filteredComments.sort(
    (a, b) => b.created_at - a.created_at
  );

  return Promise.resolve(sortedComments);
};
