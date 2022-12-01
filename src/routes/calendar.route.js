const router = require("express").Router();
const calendarController = require("../controllers/calendar.controller");

router.get("/", calendarController.getAll);
router.post("/", calendarController.insertOne);
router.delete("/:event", calendarController.removeOne);
router.put("/:event", calendarController.updateOne);

module.exports = router;
