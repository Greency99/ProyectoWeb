const router = require("express").Router();

//import routers
const userRouter = require("./users.route");
const calendarRouter = require("./calendar.route");

//define use of route
router.use("/users", userRouter);
router.use("/calendar", calendarRouter);

module.exports = router;
