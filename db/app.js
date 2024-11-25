const express = require("express");
const fs = require("fs");
const endpointsJson = require("../endpoints.json");
const topics = require("../db/data/test-data/topics");

const app = express();

app.get("/api", (req, res) => {
  res.status(200).json({ endpoints: endpointsJson });
});

app.get("/api/topics", (req, res) => {
  res.status(200).json({ topics });
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.status || 500).json({
      error: {
        message: err.message || "Internal Server Error",
      },
    });
  }
});

module.exports = app;
