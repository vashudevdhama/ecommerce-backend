const router = require("express").Router();

const OrderController = require("../controllers/OrderController");
const checkToken = require("../middlewares/tokenauth");

router.post("/", checkToken, OrderController.postOrder);

router.get("/incustomers", checkToken, OrderController.getCustomerOrders);

router.get("/:orderid", checkToken, OrderController.getOrderById);

module.exports = router;
