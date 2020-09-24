const postOrder = async (req, res, next) => {
  res.send("Post an order");
};

const getOrderById = async (req, res, next) => {
  res.send("Get order by id");
};

const getCustomerOrders = async (req, res, next) => {
  res.send("Get customer's orders");
};

module.exports = {
  postOrder,
  getOrderById,
  getCustomerOrders,
};
