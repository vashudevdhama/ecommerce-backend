const CategoryService = require("../services/CategoryServices");
const nest = require("../utils/nest");
const sendResponse = require("../utils/sendResponse");

const getCategories = async (req, res, next) => {
  let [err, categories] = await nest(CategoryService.getALlCategories());
  sendResponse(res, err, categories);
  // res.send("Get all categories");
};

const getCategoryById = async (req, res, next) => {
  const category_id = req.params.categoryid;
  let [err, category] = await nest(
    CategoryService.getCategoryById(category_id)
  );
  sendResponse(res, err, category);
  // res.send("Get category by id");
};

const getCategoriesOfProduct = async (req, res, next) => {
  const product_id = req.params.productid;
  let [err, categories] = await nest(
    CategoryService.getProductCategories(product_id)
  );
  sendResponse(res, err, categories);
  // res.send("Get product's categories");
};

module.exports = {
  getCategories,
  getCategoryById,
  getCategoriesOfProduct,
};
