const router = require("express").Router();

const CartController = require("../controllers/CartControllers");
const checkToken = require("../middlewares/tokenauth");

router.post("/add", checkToken, CartController.postProduct);

router.get("/:cartid", checkToken, CartController.getCartItems);

router.put("/update/:itemid", checkToken, CartController.putCartItem);

router.delete("/empty/:cartid", checkToken, CartController.deleteAllCartItems);

router.delete(
  "/removeproduct/:itemid",
  checkToken,
  CartController.deleteCartItemById
);

module.exports = router;
