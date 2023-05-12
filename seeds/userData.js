const { User } = require("../models/User");

const userData = [
  {
    username: "",
    email: "jack@email.com",
    password: "abracadabra"
  },
  {
    username: "",
    email: "jill@email.com",
    password: "alakazam"
  },
  {
    username: "",
    email: "jimmy@email.com",
    password: "presto"
  },
  {
    username: "",
    email: "jackie@email.com",
    password: "vuala"
  }
];

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;
