const express = require("express");
const fs = require("fs");
const endpointsJson = require("../endpoints.json");

const app = express();

app.get("/api", (req, res) => {
  res.status(200).json({ endpoints: endpointsJson });
});

module.exports = app;
