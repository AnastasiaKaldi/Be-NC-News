const articles = require("../data/test-data/articles");

exports.updateArticleById = (article_id, votes) => {
  console.log("article_id:", article_id);
  console.log("votes:", votes);

  if (!votes || typeof votes !== "number") {
    console.error("Votes validation failed");
    return Promise.reject({
      status: 400,
      message: "Request body must include 'votes' as a number",
    });
  }

  const articlesWithIds = articles.map((article, index) => ({
    article_id: index + 1,
    ...article,
  }));

  console.log("Mapped articles:", articlesWithIds);

  const article = articlesWithIds.find(
    (article) => article.article_id === Number(article_id)
  );

  if (article) {
    console.log("Found article:", article);
    article.votes += votes;
    return Promise.resolve(article);
  } else {
    console.error("Article not found");
    return Promise.resolve(null);
  }
};
