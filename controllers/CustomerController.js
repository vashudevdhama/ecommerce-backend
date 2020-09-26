const nest = require("../utils/nest");
const CustomerService = require("../services/CustomerServices");
const sendResponse = require("../utils/sendResponse");

const getCustomerById = async (req, res, next) => {
  const customer_id = res.locals.customer_id;
  let [err, customer] = await nest(
    CustomerService.getCustomerById(customer_id)
  );
  sendResponse(res, err, customer);
  // res.send("Get customer by id");
};

const updateCustomerPhone = async (req, res, next) => {
  const customer_id = res.locals.customer_id;
  let [err, customer] = await nest(
    CustomerService.updateCustomerPhone(customer_id)
  );
  sendResponse(res, err, customer);
  // res.send("Update cutomer's phone");
};

const updateCustomerAddress = async (req, res, next) => {
  const customer_id = res.locals.customer_id;
  let [err, customer] = await nest(
    CustomerService.updateCustomerAddress(customer_id)
  );
  sendResponse(res, err, customer);
  // res.send("Update cutomer's address");
};

const updateCustomerCreditCard = async (req, res, next) => {
  const customer_id = res.locals.customer_id;
  let [err, customer] = await nest(
    CustomerService.updateCustomerCreditCard(customer_id)
  );
  sendResponse(res, err, customer);
  // res.send("Update customer's credit card");
};

module.exports = {
  getCustomerById,
  updateCustomerPhone,
  updateCustomerAddress,
  updateCustomerCreditCard,
};
