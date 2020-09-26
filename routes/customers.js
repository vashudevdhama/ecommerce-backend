const router = require("express").Router();

const CustomerController = require("../controllers/CustomerController");
const checkToken = require("../middlewares/tokenauth");

router.get("/", checkToken, CustomerController.getCustomerById);

router.put("/phone", checkToken, CustomerController.updateCustomerPhone);

router.put("/address", checkToken, CustomerController.updateCustomerAddress);

router.put(
  "/creditcard",
  checkToken,
  CustomerController.updateCustomerCreditCard
);

module.exports = router;
