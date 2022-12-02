const { application } = require("express");
const express = require("express");
const app = express();
const config = require("dotenv").config();
const router = require("./src/routes/router");

const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.use("/api", router);



app.listen(PORT, () => {
  console.log("Server listening on Port " + PORT);
});
