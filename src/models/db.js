const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const db = new Sequelize("sampledb", "sampleuser", "samplepass", {
  dialect: "mysql",
  host: "localhost",
});

const Users = db.define("user", {
  username: { type: DataTypes.STRING(30), unique: true, allowNull: false },
  passwords: { type: DataTypes.STRING, allowNull: true },
});

const Articles = db.define("article", {
  title: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

const Comments = db.define("comment", {
  title: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
  },
});

Articles.belongsTo(Users, { as: "author" });
Users.hasMany(Articles, { foreignKey: "authorId" });

Comments.belongsTo(Articles);
Articles.hasMany(Comments);

Comments.belongsTo(Users);
Users.hasMany(Comments);

module.exports = {
  db,
  Users,
  Articles,
  Comments,
};
