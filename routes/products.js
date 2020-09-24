const router = require("express").Router();

const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.getProducts);

router.get("/:productid", ProductController.getProductById);

router.get("/incategory/:categoryid", ProductController.getProductByCategory);

router.get("/:productid/details", ProductController.getProductDetails);

router.get("/:productid/reivews", ProductController.getProductReviews);

router.post("/:productid/reivews", ProductController.postProductReviews);

module.exports = router;
