const router = require("express").Router();

const OrderController = require("../controllers/OrderController");

router.post("/", OrderController.postOrder);

router.get("/incustomers", OrderController.getCustomerOrders);

router.get("/:orderid", OrderController.getOrderById);

module.exports = router;
