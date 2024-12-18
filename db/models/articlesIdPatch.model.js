const articles = require("../data/test-data/articles");

exports.updateArticleById = (article_id, votes) => {
  if (!votes || typeof votes !== "number") {
    return Promise.reject({
      status: 400,
      message: "Request body must include 'votes' as a number",
    });
  }

  const articlesWithIds = articles.map((article, index) => ({
    article_id: index + 1,
    ...article,
  }));

  const article = articlesWithIds.find(
    (article) => article.article_id === Number(article_id)
  );

  if (article) {
    article.votes += votes;
    return Promise.resolve(article);
  } else {
    return Promise.resolve(null);
  }
};
