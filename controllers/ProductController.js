const getProducts = async (req, res, next) => {
  res.send("Get all products");
};

const getProductById = async (req, res, next) => {
  res.send("Get product by id");
};

const getProductByCategory = async (req, res, next) => {
  res.send("Get product by category");
};

const getProductDetails = async (req, res, next) => {
  res.send("Get product's details");
};

const getProductReviews = async (req, res, next) => {
  res.send("Get product's reviews");
};

const postProductReviews = async (req, res, next) => {
  res.send("Post product's review");
};

module.exports = {
  getProducts,
  getProductById,
  getProductByCategory,
  getProductDetails,
  getProductReviews,
  postProductReviews,
};
