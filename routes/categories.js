const router = require("express").Router();

const CategoryController = require("../controllers/CategoryController");

router.get("/", CategoryController.getCategories);

router.get("/:categoryid", CategoryController.getCategoryById);

router.get("/inproduct/:productid", CategoryController.getCategoriesOfProduct);

module.exports = router;
