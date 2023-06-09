const sequelize = require("../config/connection");
const { User, Blog } = require("../models");
const userData = require("./userData.json");
const blogData = require("./blogData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blog.bulkCreate(blogData);

  //stop process synchronously and with "success" code '0'//
  process.exit(0);
};

seedAll();