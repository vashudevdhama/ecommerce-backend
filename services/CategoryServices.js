const CategoryModel = require("../models/category");
const ProductModel = require("../models/products");
const nest = require("../utils/nest");

class CategoryService {
  static getALlCategories = async () => {
    let [err, categories] = await nest(CategoryModel.findAll());
    if (err) {
      console.log("Error in getting categories", { error: err });
      throw Error("Error in getting categories");
    }
    return categories;
  };

  static getCategoryById = async (category_id) => {
    let [err, category] = await nest(
      CategoryModel.findOne({ where: { category_id: category_id } })
    );
    if (err) {
      console.log("Error in getting category by id", { error: err });
      throw Error("Error in getting category by id");
    }
    return category;
  };

  static getProductCategories = async (product_id) => {
    let [err, product] = await nest(
      ProductModel.findOne({ where: { product_id: product_id } })
    );
    if (err) {
      console.log("Error in getting product by id", { error: err });
      throw Error("Error in getting product by id");
    }
    let categories;
    [err, categories] = await nest(product.getCategories());
    if (err) {
      console.log("Error in getting categories", { error: err });
      throw Error("Error in getting categories");
    }
    return categories;
  };
}

module.exports = CategoryService;
