const { Blog } = require("../models");

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

module.exports = blogData;