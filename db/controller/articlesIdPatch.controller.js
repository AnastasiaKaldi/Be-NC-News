const { updateArticleById } = require("../models/articlesIdPatch.model");

exports.patchArticleById = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;

  if (typeof inc_votes !== "number") {
    return res
      .status(400)
      .json({ error: "Bad request: 'inc_votes' must be a number" });
  }

  updateArticleById(article_id, inc_votes)
    .then((updatedArticle) => {
      if (!updatedArticle) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.status(200).json({ article: updatedArticle });
    })
    .catch((err) => {
      if (err.code === "22P02") {
        res.status(400).json({ error: "Invalid article ID format" });
      } else {
        next(err);
      }
    });
};
