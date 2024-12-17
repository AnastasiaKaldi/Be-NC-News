// const db = require("../connection");

// exports.fetchArticles = () => {
//   const queryStr = `
//     SELECT
//       articles.article_id,
//       articles.title,
//       articles.author,
//       articles.topic,
//       articles.created_at,
//       articles.votes,
//       articles.article_img_url,
//       COUNT(comments.comment_id)::INT AS comment_count
//     FROM articles
//     LEFT JOIN comments
//     ON articles.article_id = comments.article_id
//     GROUP BY articles.article_id
//     ORDER BY articles.created_at DESC;
//   `;

//   return db
//     .query(queryStr)
//     .then(({ rows }) => {
//       return rows;
//     })
//     .catch((err) => {
//       console.error("Error in fetchArticles:", err);
//       throw err;
//     });
// };

const articles = require("../data/test-data/articles");

exports.fetchArticles = () => {
  return Promise.resolve(articles);
};
