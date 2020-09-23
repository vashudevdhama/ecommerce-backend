const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("create an order");
});

router.get("/:orderid", (req, res) => {
  res.send("Get info about order");
});

router.get("/incustomers", (req, res) => {
  res.send("Get all orders by customers");
});

module.exports = router;
