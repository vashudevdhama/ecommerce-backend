const express = require("express");

const CustomersRouter = require("./customers");
const CategoriesRouter = require("./categories");
const ProductsRouter = require("./products");
const OrdersRouter = require("./orders");
const ShoppingcartRouter = require("./shoppingcart");
const AuthRouter = require("./auth");

const router = express.Router();

// Sub-routes
router.use("/auth", AuthRouter);
router.use("/customers", CustomersRouter);
router.use("/categories", CategoriesRouter);
router.use("/products", ProductsRouter);
router.use("/orders", OrdersRouter);
router.use("shoppingcart", ShoppingcartRouter);

// Export base-router
module.exports = router;
