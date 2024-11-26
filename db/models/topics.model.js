const topics = require("../data/test-data/topics");

exports.fetchTopics = () => {
  return Promise.resolve(topics);
};
