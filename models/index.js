const User = require("./User");
const Blog = require("./Blog");

//model associations go here
User.hasMany(Blog, {
});

Blog.belongsTo(User, {
  foreignKey: "user_id"
});

module.exports = { User, Blog };