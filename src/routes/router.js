const router = require("express").Router();

//import routers
const userRouter = require("./users.route");
const calendarRouter = require("./calendar.route");
const loginRouter = require("./login.route");

//define use of route
router.use("/users", userRouter);
router.use("/calendar", calendarRouter);
router.use("/login", loginRouter);

module.exports = router;
