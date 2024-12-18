const comments = require("../data/test-data/comments");

exports.addComment = (article_id, body, author) => {
  if (!body || !author) {
    return Promise.reject({
      status: 400,
      message: "Request body must include 'body' and 'author'",
    });
  }

  const newComment = {
    body,
    author,
    article_id: Number(article_id),
    votes: 0,
    created_at: Date.now(),
  };

  comments.push(newComment);

  return Promise.resolve(newComment);
};
