const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getAll);
router.post("/", userController.insertOne);
router.delete("/:email", userController.removeOne);
router.put("/:email", userController.updateOne);

module.exports = router;
