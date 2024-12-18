const comments = require("../data/test-data/comments");

exports.removeCommentById = (comment_id) => {
  const index = comments.findIndex(
    (comment) => comment.comment_id === Number(comment_id)
  );

  if (index !== -1) {
    comments.splice(index, 1);
    return Promise.resolve(true);
  } else {
    return Promise.resolve(false);
  }
};
