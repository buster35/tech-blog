const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

//client visits "site".com/"anything -> directed from server.js (app.use(routes)) to here by default; if no other path, routes to homeRoutes, else if a specific route is specified will route to ./api/index.js//

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

// router.get("/", (req, res) => {
//   res.render("homepage")
// })

module.exports = router;