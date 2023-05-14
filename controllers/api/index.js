const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const dashboardRoutes = require("./dashboardRoutes.js");

//router.use("url tag", route path)
router.use("/users", userRoutes)
router.use("/dashboard", dashboardRoutes)
router.use("/", userRoutes)

module.exports = router;

