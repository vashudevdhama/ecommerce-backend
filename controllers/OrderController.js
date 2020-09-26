const nest = require("../utils/nest");
const OrderService = require("../services/OrderServices");
const sendResponse = require("../utils/sendResponse");

const postOrder = async (req, res, next) => {
  const customer_id = res.locals.customer_id;
  res.send("Post an order");
};

const getOrderById = async (req, res, next) => {
  const order_id = req.params.orderid;
  let [err, order] = await nest(OrderService.getOrderById(order_id));
  sendResponse(res, err, order);
  // res.send("Get order by id");
};

const getCustomerOrders = async (req, res, next) => {
  const customer_id = res.locals.customer_id;
  let [err, orders] = await nest(OrderService.getCustomerOrders(customer_id));
  sendResponse(res, err, orders);
  // res.send("Get customer's orders");
};

module.exports = {
  postOrder,
  getOrderById,
  getCustomerOrders,
};
