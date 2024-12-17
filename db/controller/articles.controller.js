const { fetchArticles } = require("../models/articles.model");

exports.getArticles = (req, res, next) => {
  fetchArticles()
    .then((articles) => {
      if (!articles || articles.length === 0) {
        return next({ status: 404, message: "No articles found" });
      }
      res.status(200).json({ articles });
    })
    .catch((err) => {
      console.error("Error fetching articles:", err);
      next({ status: 500, message: "Failed to fetch articles" });
    });
};
