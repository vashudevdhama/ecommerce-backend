const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Get customer by id fetched from token");
});

router.post("/", (req, res) => {
  res.send("Register a customer");
});

router.put("/", (req, res) => {
  res.send("Update a customer");
});

router.post("/login", (req, res) => {
  res.send("Login a customer");
});

router.put("/address", (req, res) => {
  res.send("Update a customer's address");
});

router.put("/creditcard", (req, res) => {
  res.send("Update a customer's creditcard");
});

module.exports = router;
