const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const dashboardRoutes = require("./dashboardRoutes");

//router.use("url tag", route path)
router.use("/users", userRoutes)
router.use("/dashboard", dashboardRoutes)

module.exports = router;

