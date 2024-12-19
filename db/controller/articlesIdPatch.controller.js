const { updateArticleById } = require("../models/articlesIdPatch.model");

exports.patchArticleById = (req, res, next) => {
  const { article_id } = req.params;
  const { votes } = req.body;

  console.log("Request params:", req.params); // Log params
  console.log("Request body:", req.body); // Log body

  updateArticleById(article_id, votes)
    .then((updatedArticle) => {
      if (!updatedArticle) {
        console.error("Article not found during update");
        return next({ status: 404, message: "Article not found" });
      }
      console.log("Updated article:", updatedArticle);
      res.status(200).json({ article: updatedArticle });
    })
    .catch((err) => {
      console.error("Error updating article:", err);
      next(err);
    });
};
