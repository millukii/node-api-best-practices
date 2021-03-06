//const { ForeignKeyConstraintError } = require("sequelize/types");
const { Articles, Users } = require("../models/db");

async function createArticle(title, content, authorId) {
  if (typeof title != "string" || title.length < 1) {
    throw new Error("Title empty or undefined");
  }
  if (typeof content != "string" || content.length < 1) {
    throw new Error("Content empty or undefined");
  }
  if (typeof authorId != "number") {
    throw new Error("Author must be a number");
  }

  try {
    return await Articles.create({
      title,
      content,
      authorId,
    });
  } catch (error) {
    throw error;
  }
}

async function fetchArticles() {
  try {
    return await Articles.findAll({
      include: [{ model: Users, as: "author", attributes: ["username"] }],
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchArticles,
  createArticle,
};
