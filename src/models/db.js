const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const db = new Sequelize("sampledb", "sampleuser", "samplepass", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

const User = db.define("user", {
  username: { type: DataTypes.STRING(30), unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

const Article = db.define("article", {
  title: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

const Comment = db.define("comment", {
  title: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
  },
});

Article.belongsTo(User, { as: "author" });
User.hasMany(Article, { foreignKey: "authorId" });

Comment.belongsTo(Article, { as: "comment" });
Article.hasMany(Comment, { foreignKey: "articleId" });

Comment.belongsTo(User);
User.hasMany(Comment);

module.exports = {
  db,
  User,
  Article,
  Comment,
};
