const sequelize = require("../config/connection");
const userSeed = require("./userData");
const blogSeed = require("./blogData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userSeed();

  await blogSeed();

  //stop process synchronously and with "success" code '0'//
  process.exit(0);
};

seedAll();