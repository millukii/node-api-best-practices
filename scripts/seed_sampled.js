const models = require("../src/models/db");

async function seed() {
  try {
    await models.db.sync({ force: true });
    await models.Users.bulkCreate([
      { username: "firstuser", password: "jojojo123" },
      { username: "seconduser", password: "jojojo123" },
    ]);

    await models.Articles.bulkCreate([
      {
        title: "Article 1",
        content: "Lorem  ipsum",
        authorId: 1,
      },
    ]);
  } catch (error) {
    throw error;
  }
}

module.exports = seed();
