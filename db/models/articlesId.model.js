const articles = require("../data/test-data/articles");

exports.fetchArticleById = (article_id) => {
  const articlesWithIds = articles.map((article, index) => ({
    article_id: index + 1,
    ...article,
  }));

  const article = articlesWithIds.find(
    (article) => article.article_id === Number(article_id)
  );

  return Promise.resolve(article);
};
