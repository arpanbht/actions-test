const Router = require("express").Router;

const testRouter = Router();

testRouter.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

testRouter.get("/greet", (req, res) => {
  const name = req.query.name || "Stranger";
  res.status(200).json({ message: `Hello, ${name}!` });
});

testRouter.get("/goodbye", (req, res) => {
  res.status(200).json({ message: "Goodbye, World!" });
});

module.exports = testRouter;
