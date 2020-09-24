const getCustomerById = async (req, res, next) => {
  res.send("Get customer by id");
};

const updateCustomerPhone = async (req, res, next) => {
  res.send("Update cutomer's phone");
};

const updateCustomerAddress = async (req, res, next) => {
  res.send("Update cutomer's address");
};

const updateCustomerCreditCard = async (req, res, next) => {
  res.send("Update customer's credit card");
};

module.exports = {
  getCustomerById,
  updateCustomerPhone,
  updateCustomerAddress,
  updateCustomerCreditCard,
};
