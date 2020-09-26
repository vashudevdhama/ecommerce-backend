const router = require("express").Router();

const CategoryController = require("../controllers/CategoryController");
const checkToken = require("../middlewares/tokenauth");

router.get("/", checkToken, CategoryController.getCategories);

router.get("/:categoryid", checkToken, CategoryController.getCategoryById);

router.get(
  "/inproduct/:productid",
  checkToken,
  CategoryController.getCategoriesOfProduct
);

module.exports = router;
