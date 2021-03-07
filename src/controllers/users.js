const { User } = require("../models/db");

async function createUser(username, password) {
  try {
    return await User.create({
      username,
      password,
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
};
