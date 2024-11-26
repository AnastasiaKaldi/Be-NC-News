const { getArticleById } = require("../models/articles.model");

// Controller for fetching an article by ID
exports.getArticleById = (req, res, next) => {
  const { article_id } = req.params;
  console.log("Fetching article with ID:", article_id); // Add this to track the ID

  getArticleById(article_id)
    .then((article) => {
      if (!article) {
        const error = new Error("Article not found");
        error.status = 404;
        return next(error); // Pass to the error handling middleware
      }
      console.log("Article found:", article); // Log the article
      res.status(200).json({ article });
    })
    .catch((err) => {
      console.error("Error in getting article:", err); // Log the error
      next(err); // Pass any errors to the error handler
    });
};
