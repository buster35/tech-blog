const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

//client visits "site".com/"anything -> directed from server.js (app.use(routes)) to here by default; if no other path, routes to homeRoutes, else if a specific route is specified will route to ./api/index.js//
router.use("/", homeRoutes)
router.use("/api", apiRoutes)

//export router here to use elsewhere
module.exports = router;