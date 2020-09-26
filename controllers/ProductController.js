const ProductServices = require("../services/ProductServices");
const nest = require("../utils/nest");
const sendResponse = require("../utils/sendResponse");

const getProducts = async (req, res, next) => {
  let [err, products] = await nest(ProductServices.getProducts());
  sendResponse(res, err, products);
  // res.send("Get all products");
};

const postProduct = async (req, res, next) => {
  const { name, price, description, category } = req.body;
  const productObject = {
    name,
    price,
    description,
    category,
  };
  let [err, product] = await nest(ProductServices.postProduct(productObject));
  sendResponse(res, err, product);
  // res.send("Post new products");
};

const getProductById = async (req, res, next) => {
  const productId = req.params.productid;
  let [err, product] = await nest(ProductServices.getProductById(productId));
  console.log("Err: ", err);
  console.log("Product: ", product);
  sendResponse(res, err, product);
  // res.send("Get product by id");
};

const getProductByCategory = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  let [err, products] = await nest(
    ProductServices.getProductsByCategory(categoryId)
  );
  sendResponse(res, err, products);
  // res.send("Get product by category");
};

const getProductDetails = async (req, res, next) => {
  const productId = req.params.productid;
  let [err, details] = await nest(ProductServices.getProductDetails(productId));
  sendResponse(res, err, details);
  // res.send("Get product's details");
};

const getProductReviews = async (req, res, next) => {
  const productId = req.params.productid;
  let [err, reviews] = await nest(ProductServices.getProductReviews(productId));
  sendResponse(res, err, reviews);
  // res.send("Get product's reviews");
};

const postProductReviews = async (req, res, next) => {
  const { name, review, rating } = req.body;
  const productId = req.params.productId;
  const reviewObject = {
    name,
    review,
    rating,
    productId,
  };
  let [err, isPosted] = await nest(
    ProductServices.postProductReview(reviewObject)
  );
  sendResponse(res, err, isPosted);
  // res.send("Post product's review");
};

module.exports = {
  getProducts,
  postProduct,
  getProductById,
  getProductByCategory,
  getProductDetails,
  getProductReviews,
  postProductReviews,
};
