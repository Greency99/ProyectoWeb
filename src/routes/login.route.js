const { User } = require("../database/user.schema");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
    let { email, password } = req.body;
    let doc = await User.findOne({ email });

    if (doc) {
        let result = bcrypt.compareSync(password, doc.password);
        if (result) {
            //Todo: generar token
            let token = jwt.sign(
                { id: doc.id, email, _id: doc._id },
                process.env.TOKEN_KEY,
                { expiresIn: 60 * 20 }
            );
            res.send({ token });
        } else {
            res.status(400).send({ error: "Incorrect password" });
        }
    } else {
        res.status(404).send({ error: "User does not exist" });
    }
});
module.exports = router;