const route = require("express").Router();

route.get("/", async (req, res) => {
  const articles = await fetchArticles();
  res.status(200).json(articles);
});

module.exports = route;
