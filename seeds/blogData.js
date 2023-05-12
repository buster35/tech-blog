const { Blog } = require("../models/Blog");

//TODO:add date created property for each blog instance
const blogData = [
  {
    name: "Model-View-Controller",
    description: "lorem ipsum......."
  },
  {
    name: "Separation of Concerns",
    description: "lorem ipsum...."
  },
  {
    name: "Object-Relational-Mapping(er)",
    description: "lorem ipsum.."
  },
  {
    name: "Handlebars.js",
    description: "lorem ipsum..."
  },
];

//passing array of instances to seed database in bulk
const blogSeed = () => Blog.bulkCreate(blogData);

module.exports = blogSeed;