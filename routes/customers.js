const router = require("express").Router();

const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.getCustomerById);

router.put("/phone", CustomerController.updateCustomerPhone);

router.put("/address", CustomerController.updateCustomerAddress);

router.put("/creditcard", CustomerController.updateCustomerCreditCard);

module.exports = router;
