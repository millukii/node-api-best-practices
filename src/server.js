const express = require("express");
const handlebars = require("handlebars");
const hbs = require("express-hbs");
const session = require("express-session");
const passport = require("./auth/passport");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const path = require("path");
const app = express();

app.engine(
  "hbs",
  hbs.express4({
    partialsDir: path.join(__dirname, "../views/partials"),
    layoutsDir: path.join(__dirname, "../views/layouts"),
    defaultLayout: path.join(__dirname, "../views/layouts/main.hbs"),
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));

app.use(
  session({
    secret: "string super secreta",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", express.static(path.join(__dirname, "../public")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/pages/index"));
app.use("/api", require("./routes/api/index"));

module.exports = {
  app,
};
