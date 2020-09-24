const postProduct = async (req, res, next) => {
  res.send("Add a product in cart");
};

const getCartItems = async (req, res, next) => {
  res.send("Get all products in cart");
};

const putCartItem = async (req, res, next) => {
  res.send("Update item in the cart");
};

const deleteAllCartItems = async (req, res, next) => {
  res.send("Empty the cart");
};

const deleteCartItemById = async (req, res, next) => {
  res.send("Remove product form cart");
};

module.exports = {
  postProduct,
  getCartItems,
  putCartItem,
  deleteAllCartItems,
  deleteCartItemById,
};
