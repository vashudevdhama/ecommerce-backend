const Cart = require("../models/cart");
const CartService = require("../services/CartServices");
const nest = require("../utils/nest");
const sendResponse = require("../utils/sendResponse");

const postProduct = async (req, res, next) => {
  // TODO fetch customer_id using middleware
  const customer_id = res.locals.customer_id;
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const productObject = {
    name,
    price,
    description,
  };
  if (!customer_id) {
    return res.json({ data: null, error: "invalid payload" });
  }
  const [err, response] = await nest(
    CartService.postProductInCart(customer_id, productObject)
  );
  sendResponse(res, err, response);
  // res.send("Add a product in cart");
};

const getCartItems = async (req, res, next) => {
  const cartid = req.params.cartid;
  let [err, cartitems] = await nest(CartService.getCartItems(cartid));
  sendResponse(res, err, cartitems);
  // res.send("Get all products in cart");
};

const putCartItem = async (req, res, next) => {
  //TODO: update cart item by itemid
  res.send("Update item in the cart");
};

const deleteAllCartItems = async (req, res, next) => {
  const cartid = req.params.cartid;
  let [err, response] = await nest(CartService.deleteAllCartItems(cartid));
  sendResponse(res, err, response);
  // res.send("Empty the cart");
};

const deleteCartItemById = async (req, res, next) => {
  const customer_id = res.locals.customer_id;
  const itemid = req.params.itemid;
  let [err, response] = await nest(
    CartService.deleteCartItemByItemId(customer_id, itemid)
  );
  sendResponse(res, err, response);
  // res.send("Remove product form cart");
};

module.exports = {
  postProduct,
  getCartItems,
  putCartItem,
  deleteAllCartItems,
  deleteCartItemById,
};
