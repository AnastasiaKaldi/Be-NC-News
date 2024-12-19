const comments = require("../data/test-data/comments");

exports.removeCommentById = (comment_id) => {
  console.log("Searching for comment_id:", comment_id);
  const index = comments.findIndex(
    (comment) => comment.comment_id === Number(comment_id)
  );

  if (index !== -1) {
    comments.splice(index, 1);
    console.log("Deleted comment. Remaining comments:", comments);
    return Promise.resolve(true);
  } else {
    console.log("Comment not found for ID:", comment_id);
    return Promise.resolve(false);
  }
};
