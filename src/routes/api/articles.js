const { fetchArticles, createArticle } = require("../../controllers/articles");

const route = require("express").Router();

route.get("/", async (req, res) => {
  const articles = await fetchArticles();
  res.status(200).json(articles);
});

route.post("/", async (req, res) => {
  await createArticle(req.body.title, req.body.content);

  res.send(articles);
});

route.get("/:id", async (req, res) => {});

route.get("/:id/comments", async (req, res) => {});

module.exports = route;
