const { User } = require("../../models/db");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ where: { username: "millukii" } });
    if (user === null) {
      return done(new Error("User not found"));
    }
    if (user.dataValues.password != password) {
      return done(new Error("Password mismatch"));
    }
    user.password = undefined;
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

module.exports = strategy;
