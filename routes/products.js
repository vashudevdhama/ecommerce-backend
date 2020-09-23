const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Get all products");
});

router.get("/:productid", (req, res) => {
  res.send("Get product by id");
});

router.get("/incategory/:categoryid", (req, res) => {
  res.send("Get all products in given category");
});

router.get("/:productid/details", (req, res) => {
  res.send("Get product's detials");
});

router.get("/:productid/reivews", (req, res) => {
  res.send("Get a product's reviews");
});

router.post("/:productid/reivews", (req, res) => {
  res.send("Submit a review for the product");
});

module.exports = router;
