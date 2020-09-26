const CustomerModel = require("../models/customers");
const CartModel = require("../models/cart");
const nest = require("../utils/nest");

class CartService {
  static getCartByCustomerId = async (customer_id) => {
    let [err, customer] = await nest(
      CustomerModel.findOne({
        where: { customer_id: customer_id },
      })
    );
    if (err) {
      console.log("Error in finding customer", { error: err });
      throw Error("Error in finding customer");
    }
    let cart;
    [err, cart] = await nest(customer.getCart());
    if (err) {
      console.log("Error in getting cart", { error: err });
      throw Error("Error in getting cart");
    }
    return cart;
  };

  static getCartItems = async (cartid) => {
    let [err, cart] = await nest(CartModel.findByPk(cartid));
    if (err) {
      console.log("Error in finding cart", { error: err });
      throw Error("Error in finding cart");
    }
    let products;
    [err, products] = await nest(cart.getProducts());
    if (err) {
      console.log("Error in getting products", { error: err });
      throw Error("Error in getting products");
    }
    return products;
  };

  static postProductInCart = async (customer_id, productObject) => {
    // const name = productObject.name;
    // const price = productObject.price;
    // const description = productObject.description;
    let [err, customer] = await nest(CustomerModel.findByPk(customer_id));
    if (err) {
      console.log("Error in finding customer", { error: err });
      throw Error("Error in finding customer");
    }
    let cart;
    [err, cart] = await nest(customer.getCart());
    if (err) {
      console.log("Error in finding cart", { error: err });
      throw Error("Error in finding cart");
    }
    let product;
    [err, product] = await nest(cart.createProduct(productObject));
    if (err) {
      console.log("Error in adding product", { error: err });
      throw Error("Error in adding product");
    }
    return product;
  };
  //TODO: update item by itemid.

  static deleteAllCartItems = async (cartid) => {
    let [err, cart] = await nest(CartModel.findByPk(cartid));
    if (err) {
      console.log("Error in finding cart", { error: err });
      throw Error("Error in finding cart");
    }
    let response;
    // [err, response] = await nest(cart.destroy({truncate:true}));
    [err, response] = await nest(cart.removeProducts());
    if (err) {
      console.log("Error in removing all cart items", { error: err });
      throw Error("Error in removing all cart items");
    }
    return response;
  };

  static deleteCartItemByItemId = async (customer_id, itemid) => {
    let [err, customer] = await nest(CustomerModel.findByPk(customer_id));
    if (err) {
      console.log("Error in finding customer", { error: err });
      throw Error("Error in finding customer");
    }
    let cart;
    [err, cart] = await nest(customer.getCart());
    if (err) {
      console.log("Error in finding cart", { error: err });
      throw Error("Error in finding cart");
    }
    let response;
    // [err, response] = await nest(cart.destroy({truncate:true}));
    [err, response] = await nest(
      cart.removeProduct({ where: { product_id: itemid } })
    );
    if (err) {
      console.log("Error in removing cart item", { error: err });
      throw Error("Error in removing cart item");
    }
    return response;
  };
}

module.exports = CartService;
