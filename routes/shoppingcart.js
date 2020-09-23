const router = require("express").Router();

router.post("/add", (req, res) => {
  res.send("Add a product in cart");
});

router.get("/:cartid", (req, res) => {
  res.send("Get all products in cart");
});

router.put("/update/:itemid", (req, res) => {
  res.send("Update item in the cart");
});

router.delete("/empty/:cartid", (req, res) => {
  res.send("Empty the cart");
});

router.delete("/removeproduct/:itemid", (req, res) => {
  res.send("Remove product form cart");
});

module.exports = router;
