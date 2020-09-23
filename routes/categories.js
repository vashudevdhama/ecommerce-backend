const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("get all categories");
});
router.get("/:categoryid", (req, res) => {
  res.send("get categories by id");
});
router.get("/inproduct/:productid", (req, res) => {
  res.send("get categories of the product");
});

module.exports = router;
