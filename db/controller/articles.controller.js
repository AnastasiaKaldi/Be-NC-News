const { fetchArticles } = require("../models/articles.model");

exports.getArticles = (req, res, next) => {
  fetchArticles()
    .then((articles) => {
      if (!articles) {
        console.error("No articles found!");
        return res.status(404).json({ error: "No articles found" });
      }
      res.status(200).json({ articles });
    })
    .catch((err) => {
      console.error("Error fetching articles:", err);
      next(err);
    });
};
