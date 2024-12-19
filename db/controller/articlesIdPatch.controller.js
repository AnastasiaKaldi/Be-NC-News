const { updateArticleById } = require("../models/articlesIdPatch.model");

exports.patchArticleById = (req, res, next) => {
  const { article_id } = req.params;
  const { votes } = req.body;

  updateArticleById(article_id, votes)
    .then((updatedArticle) => {
      if (!updatedArticle) {
        return next({ status: 404, message: "Article not found" });
      }
      res.status(200).json({ article: updatedArticle });
    })
    .catch(next);
};
