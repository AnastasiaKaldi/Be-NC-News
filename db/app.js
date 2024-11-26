const express = require("express");
const fs = require("fs");
const endpointsJson = require("../endpoints.json");
const { getTopics } = require("../db/controller/topics.controller");
const { getArticleById } = require("../db/controller/articles.controller");
const { console } = require("inspector");
const app = express();

app.get("/api", (req, res) => {
  res.status(200).json({ endpoints: endpointsJson });
});
app.get("/api/topics", getTopics);

app.get("/api/articles/:article_id", getArticleById);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "An unknown error occurred",
    },
  });
});

module.exports = app;
