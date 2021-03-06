const route = require("express").Router();
const {
  fetchArticles,
  fetchArticleById,
  createArticle,
} = require("../../controllers/articles");

route.get("/", async (req, res) => {
  try {
    const articles = await fetchArticles();

    res.render("pages/articles", { articles });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
});
route.get("/:id", async (req, res) => {
  const articleId = req.params.id;
  if (isNaN(parseInt(articleId))) {
    console.error(new Error("Article ID is not correct number"));
    res.redirect("/");
  }

  try {
    const article = await fetchArticleById(articleId);
    res.render("pages/articles/id", { article });
  } catch (error) {
    throw error;
  }
});
module.exports = route;
