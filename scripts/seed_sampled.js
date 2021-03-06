const models = require("../src/models/db");

async function seed() {
  try {
    await models.db.sync({ force: true });
    await models.User.bulkCreate([
      { username: "firstuser", password: "jojojo123" },
      { username: "seconduser", password: "jojojo123" },
    ]);

    await models.Article.bulkCreate([
      {
        title: "Article 1",
        content: "Lorem  ipsum",
        authorId: 1,
      },
    ]);
    await models.Comment.bulkCreate([
      {
        title: "jojo",
        message: `loremp ipsum`,
        userId: 1,
        articleId: 1,
      },
      {
        title: "jojo",
        message: `loremp ipsum`,
        userId: 1,
        articleId: 1,
      },
      {
        title: "jojo",
        message: `loremp ipsum`,
        userId: 1,
        articleId: 1,
      },
      {
        title: "jojo",
        message: `loremp ipsum`,
        userId: 1,
        articleId: 1,
      },
    ]);
  } catch (error) {
    throw error;
  }
}

module.exports = seed();
