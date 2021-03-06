const route = require("express").Router();

route.use("/articles", require("./articles"));
//route.use("/users", require("./users").route);

module.exports = route;
