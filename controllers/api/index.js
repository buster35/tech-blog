const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const dashboardRoutes = require("./dashboardRoutes.js");
const postRoutes = require("./postRoutes.js");

//router.use("url tag", route path)
router.use("/users", userRoutes)
router.use("/dashboard", dashboardRoutes)
router.use("/post", postRoutes)

module.exports = router;

