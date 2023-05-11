const router = require("express").Router();
const apiRoutes = require("./api");

//client visits "site".com/api -> directed from server.js (app.use(routes)) to here
router.use("/api", apiRoutes)

//export router here to use elsewhere
module.exports = router;