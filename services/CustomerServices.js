const CustomerModel = require("../models/customers");
const nest = require("../utils/nest");

class CustomerService {
  static getCustomerById = async (customer_id) => {
    let [err, customer] = await nest(CustomerModel.findByPk(customer_id));
    if (err) {
      console.log("Error in getting customer by id", { error: err });
      throw new Error("Error in getting customer by id");
    }
    return customer;
  };
  static updateCustomerPhone = async (customer_id) => {};
  static updateCustomerAddress = async (customer_id) => {};
  static updateCustomerCreditCard = async (customer_id) => {};
}

module.exports = CustomerService;
