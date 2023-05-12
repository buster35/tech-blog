const router = require("express").Router();
const userRoutes = require("./userRoutes");

//router.use("url tag", route path)
router.use("/users", userRoutes)

module.exports = router;

