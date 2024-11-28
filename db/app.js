const express = require("express");
const fs = require("fs");
const endpointsJson = require("../endpoints.json");
const { getTopics } = require("../db/controller/topics.controller");
const { getArticleById } = require("./controller/articlesId.controller");
const { console } = require("inspector");
const { getArticles } = require("../db/controller/articles.controller");
const {
  getCommentsByArticleId,
} = require("../db/controller/comments.controller");
const {
  postCommentByArticleId,
} = require("../db/controller/commentsId.controller");

const app = express();
app.use(express.json());
app.get("/api", (req, res) => {
  res.status(200).json({ endpoints: endpointsJson });
});
app.get("/api/topics", getTopics);

app.get("/api/articles/:article_id", getArticleById);

app.get("/api/articles", getArticles);

app.get("/api/:article_id/comments", getCommentsByArticleId);

app.post("/api/articles/:article_id/comments", postCommentByArticleId);

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

app.use((err, req, res, next) => {
  console.error("Error Middleware Triggered:", err);
  console.error("Error Stack:", err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "An unknown error occurred",
    },
  });
});

module.exports = app;
