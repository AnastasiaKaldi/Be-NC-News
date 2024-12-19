const { updateArticleById } = require("../models/articlesIdPatch.model");

exports.patchArticleById = (req, res, next) => {
  const { article_id } = req.params;
  const { votes } = req.body;

  console.log("Received PATCH Request Body:", req.body);
  console.log("Votes:", votes, "Type of Votes:", typeof votes);

  updateArticleById(article_id, votes)
    .then((updatedArticle) => {
      if (!updatedArticle) {
        return next({ status: 404, message: "Article not found" });
      }
      res.status(200).json({ article: updatedArticle });
    })
    .catch((err) => {
      console.error("Error updating article:", err);
      next(err);
    });
};
