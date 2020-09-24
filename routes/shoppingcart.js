const router = require("express").Router();

const CartController = require("../controllers/CartControllers");

router.post("/add", CartController.postProduct);

router.get("/:cartid", CartController.getCartItems);

router.put("/update/:itemid", CartController.putCartItem);

router.delete("/empty/:cartid", CartController.deleteAllCartItems);

router.delete("/removeproduct/:itemid", CartController.deleteCartItemById);

module.exports = router;
