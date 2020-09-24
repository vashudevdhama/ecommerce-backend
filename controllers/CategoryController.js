const getCategories = async (req, res, next) => {
  res.send("Get all categories");
};

const getCategoryById = async (req, res, next) => {
  res.send("Get category by id");
};

const getCategoriesOfProduct = async (req, res, next) => {
  res.send("Get product's categories");
};

module.exports = {
  getCategories,
  getCategoryById,
  getCategoriesOfProduct,
};
