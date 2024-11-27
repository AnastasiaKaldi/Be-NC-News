const db = require("../connection");

exports.getArticleById = (article_id) => {
  return db
    .query("SELECT * FROM articles WHERE article_id = $1", [article_id])
    .then((result) => {
      if (result.rows.length === 0) {
        throw new Error("Article not found");
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.error("Error in model:", err);
      throw err;
    });
};
