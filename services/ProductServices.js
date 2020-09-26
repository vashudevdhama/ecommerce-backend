const ProductModel = require("../models/products");
const nest = require("../utils/nest");
const ReviewModel = require("../models/reviews");

class ProductService {
  // Get all products
  static getProducts = async () => {
    let [err, products] = await nest(ProductModel.findAll());
    if (err) {
      console.log("Error in getting all products", { error: err });
      throw new Error("Error in getting all products");
    }
    return products;
  };

  // Get product by id
  static getProductById = async (productId) => {
    let [err, product] = await nest(ProductModel.findByPk(productId));
    if (err) {
      console.log("Error in getting product by id", { error: err });
      throw new Error("Error in getting product by id");
    }
    return product;
  };

  // Get products by category
  static getProductsByCategory = async (categoryId) => {
    let [err, products] = await nest(
      ProductModel.findAll({ where: { category_id: categoryId } })
    );
    if (err) {
      console.log("Error in getting product by category", { error: err });
      throw new Error("Error in getting product by category");
    }
    return products;
  };

  // Get product details
  static getProductDetails = async (productId) => {
    let [err, details] = await nest(ProductModel.findByPk(productId));
    if (err) {
      console.log("Error in getting details of product", { error: err });
      throw new Error("Error in getting details of product");
    }
    return details;
  };

  // Post new product
  static postProduct = async (productObject) => {
    const name = productObject.name;
    const price = productObject.price;
    const description = productObject.description;
    const category = productObject.category;
    let [err, product] = await nest(
      ProductModel.create({
        name: name,
        price: price,
        description: description,
        category: category,
      })
    );
    if (err) {
      console.log("Error in posting new product", { error: err });
      throw new Error("Error in posting new product");
    }
    return product;
  };

  // TODO Review it afterwards
  // Update product
  static putProductById = async (productObject) => {
    const productId = productObject.productId;
    const udpatedName = productObject.name;
    const updatedPrice = productObject.price;
    const updatedDescription = productObject.description;
    const updatedCategory = productObject.category;
    let [err, product] = await nest(ProductModel.findByPk(productId));
    if (err) {
      console.log("Error in updating product", { error: err });
      throw new Error("Error in updating product");
    }
    product.name = udpatedName;
    product.price = updatedPrice;
    product.description = updatedDescription;
    product.category = updatedCategory;
    product.count = updatedCount;
    [err, product] = await nest(product.save());
    return product;
  };

  // Get product reviews
  static getProductReviews = async (productId) => {
    let [err, reviews] = await nest(
      ReviewModel.findAll({ where: { productProductId: productId } })
    );
    if (err) {
      console.log("Error in getting product reviews", { error: err });
      throw new Error("Error in getting product reviews");
    }
    return reviews;
  };

  // Post product reviews
  static postProductReview = async (reviewObject) => {
    // const review = ReviewModel.build({
    //   name: reviewObject.name,
    //   review: reviewObject.review,
    //   rating: reviewObject.rating,
    //   productId: reviewObject.productId,
    // });
    // const [err, reviewData] = await nest(ReviewModel.save());
    const [err, reviewData] = await nest(
      ReviewModel.create({
        name: reviewObject.name,
        review: reviewObject.review,
        rating: reviewObject.rating,
        productProductId: reviewObject.productId,
      })
    );
    if (err) {
      console.log("Error in posting product reviews", { error: err });
      throw new Error("Error in posting product reviews");
    }
    return reviewData;
  };
}

module.exports = ProductService;
