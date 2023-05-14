const router = require("express").Router();
const userRoutes = require("./userRoutes.js");

//router.use("url tag", route path)
router.use("/users", userRoutes)
router.use("/", userRoutes)

module.exports = router;

