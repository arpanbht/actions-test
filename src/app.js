const express = require("express");
const app = express();
const testRouter = require("./routes/test.route");

app.use(express.json());

app.get("/api/home", (req, res) => {
  res.status(200).json({ message: "Welcome to the homepage!" });
});

app.get("/api/room", (req, res) => {
  res.status(200).json({ message: "Welcome to the room!" });
});

app.use("/api/testing", testRouter);

module.exports = app;
