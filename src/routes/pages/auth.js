const route = require("express").Router();
const { createUser } = require("../../controllers/users");
const passport = require("../../auth/passport");

route.get("/login", (req, res) => res.render("pages/auth/login"));
route.get("/signup", (req, res) => res.render("pages/auth/signup"));

route.post("/signup", async (req, res) => {
  try {
    await createUser(req.body.username, req.body.password);
  } catch (error) {
    throw error;
  }
  res.redirect("/auth/login");
});

route.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/articles",
  })
);
module.exports = route;
