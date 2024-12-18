const { fetchArticleById } = require("../models/articlesId.model");

exports.getArticleById = (req, res, next) => {
  const { article_id } = req.params;

  fetchArticleById(article_id)
    .then((article) => {
      if (!article) {
        return next({ status: 404, message: "Article not found" });
      }
      res.status(200).json({ article });
    })
    .catch((err) => {
      console.error("Error fetching article by ID:", err);
      next({ status: 500, message: "Failed to fetch article" });
    });
};
