const OrderModel = require("../models/order");
const CustomerModel = require("../models/customers");
const nest = require("../utils/nest");

class OrderService {
  static postOrder = async (customer_id, orderObject) => {
    let [err, customer] = await nest(CustomerModel.findByPk(customer_id));
    if (err) {
      console.log("Error in getting customer by id", { error: err });
      throw new Error("Error in getting customer by id");
    }
    let order;
    [err, order] = await nest(customer.createOrder(orderObject));
    if (err) {
      console.log("Error in posting order", { error: err });
      throw new Error("Error in posting order");
    }
    return order;
  };
  static getCustomerOrders = async (customer_id) => {
    let [err, customer] = await nest(
      CustomerModel.findByPk(customer_id, { include: orders })
    );
    if (err) {
      console.log("Error in getting customer by id", { error: err });
      throw new Error("Error in getting customer by id");
    }
    // let orders;
    // [err, orders] = await nest(customer.getOrders());
    // if (err) {
    //   console.log("Error in getting customer order", { error: err });
    //   throw new Error("Error in getting customer order");
    // }
    // return orders;
    return customer;
  };
  static getOrderById = async (order_id) => {
    // let [err, order] = await nest(OrderModel.findByPk(order_id));
    // if (err) {
    //   console.log("Error in getting order by id", { error: err });
    //   throw new Error("Error in getting order by id");
    // }
    // let products;
    // [err, products] = await nest(order.getProducts());
    // if (err) {
    //   console.log("Error in getting order items", { error: err });
    //   throw new Error("Error in getting order items");
    // }
    // let customer;
    // [err, customer] = await nest(order.getCustomer());
    // if (err) {
    //   console.log("Error in getting customer details", { error: err });
    //   throw new Error("Error in getting customer details");
    // }
    // let orderDetails = { customer, products };
    // return orderDetails;
    let [err, order] = await nest(
      OrderModel.findByPk(order_id, { include: [product, customer] })
    );
    if (err) {
      console.log("Error in getting order by id", { error: err });
      throw new Error("Error in getting order by id");
    }
    return order;
  };
}

module.exports = OrderService;
