const { getArticleById } = require("../models/articlesId.model");

// Controller for fetching an article by ID
exports.getArticleById = (req, res, next) => {
  const { article_id } = req.params;
  getArticleById(article_id)
    .then((article) => {
      if (!article) {
        const error = new Error("Article not found");
        error.status = 404;
        return next(error); // Pass to the error handling middleware
      }
      res.status(200).json({ article });
    })
    .catch((err) => {
      console.error("Error in getting article:", err);
      next(err); // Pass any errors to the error handler
    });
};
