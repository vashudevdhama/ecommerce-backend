const router = require("express").Router();

const ProductController = require("../controllers/ProductController");
const checkToken = require("../middlewares/tokenauth");

router.get("/", checkToken, ProductController.getProducts);

router.post("/", checkToken, ProductController.postProduct);

router.get("/:productid", checkToken, ProductController.getProductById);

router.get(
  "/incategory/:categoryid",
  checkToken,
  ProductController.getProductByCategory
);

router.get(
  "/:productid/details",
  checkToken,
  ProductController.getProductDetails
);

router.get(
  "/:productid/reivews",
  checkToken,
  ProductController.getProductReviews
);

router.post(
  "/:productid/reivews",
  checkToken,
  ProductController.postProductReviews
);

module.exports = router;
