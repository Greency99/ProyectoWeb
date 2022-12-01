const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    let token = req.get('x-auth');
    if (token) {
        //console.log(token);
        jwt.verify(token, process.env.TOKEN_KEY, (err, payload) => {
            if (err) {
                if (err.name == "TokenExpiredError") {
                    res.status(401).send({ error: "Token expired" })
                } else {
                    res.status(401).send({ error: "Invalid token" })
                }

                // console.log(err);
                // console.log(err.name);
                return;
            }
            //console.log(payload.email);
            req.userId = payload.id;
            req._id = payload._id;
            req.email = payload.email;
            next();
        })
    } else {
        res.status(401).send({ error: "No token provided" })
        return;
    }
}

module.exports = { auth }