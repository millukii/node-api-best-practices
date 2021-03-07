const passport = require("passport");
const { User } = require("../models/db");

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findByPk(userId);
    user.password = undefined;
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

passport.use(require("./strategies/passport-local-strategy"));
module.exports = passport;
