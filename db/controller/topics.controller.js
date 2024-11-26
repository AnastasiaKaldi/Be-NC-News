const { fetchTopics } = require("../models/topics.model"); // Import the model

exports.getTopics = (req, res, next) => {
  fetchTopics()
    .then((topics) => {
      if (!topics || topics.length === 0) {
        // Handle case where no topics are found
        return next({ status: 404, message: "No topics found" });
      }
      // Send the topics as a response
      res.status(200).json({ topics });
    })
    .catch((err) => {
      // Catch any other errors and forward to middleware
      next({ status: 500, message: "Failed to fetch topics" });
    });
};
