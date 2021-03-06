const express = require("express");
const handlebars = require("handlebars");
const hbs = require("express-hbs");
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
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));

app.use("/", express.static(path.join(__dirname, "../public")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/pages/index"));
app.use("/api", require("./routes/api/index"));

module.exports = {
  app,
};
