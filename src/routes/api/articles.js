const {
  fetchArticles,
  fetchArticleById,
  createArticle,
} = require("../../controllers/articles");

const route = require("express").Router();

route.get("/", async (req, res) => {
  const articles = await fetchArticles();
  res.status(200).json(articles);
});

route.post("/", async (req, res) => {
  await createArticle(req.body.title, req.body.content);

  res.send(articles);
});

route.get("/:id", async (req, res) => {
  const articleId = req.params.id;
  if (isNaN(parseInt(articleId))) {
    console.error(new Error("Article ID is not correct number"));
    res.send(403);
  }

  try {
    const article = await fetchArticleById(articleId);
    res.status(200).json(article);
  } catch (error) {
    throw error;
  }
});

route.get("/:id/comments", async (req, res) => {});

module.exports = route;
