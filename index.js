require("dotenv/config");
const express = require("express");

const sequelize = require("./utils/database");
const nest = require("./utils/nest");
const BaseRouter = require("./routes");

// Models
const Customer = require("./models/customers");
const Product = require("./models/products");
const Cart = require("./models/cart");
const Category = require("./models/category");
const Order = require("./models/order");
const Review = require("./models/reviews");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", BaseRouter);

app.use((req, res) => {
  return res.json({ data: null, error: "not found" });
});

const PORT = Number(process.env.PORT || 3000);

// Model Associations
Customer.hasOne(Cart, { foreignKey: "customer_id" });
// Cusotmer.getCart()
// Customer.setCart()
// Customer.createCart()
Cart.belongsTo(Customer);

Customer.hasMany(Order, { foreignKey: "customer_id" });
// Customer.getOrders()
// Customer.setOrders()
// Customer.addOrder()
// Customer.addOrders()
// Customer.removeOrder()
// Customer.removeOrders()
// Customer.createOrder()
Order.belongsTo(Customer);

Product.hasMany(Review, { foreignKey: "product_id" });
// Product.getReview()
// Product.setReview()
// Product.addReview()
// Product.addReviews()
// Product.removeReview()
// Product.removeReviews()
// Product.createReview()
Review.belongsTo(Product);

Order.belongsToMany(Product, { through: "OrderItems" });
// Order.getProducts()
// Order.setProducts()
// Order.addProduct()
// Order.addProducts()
// Order.removeProduct()
// Order.removeProducts()
// Order.createProduct()
Product.belongsToMany(Order, { through: "OrderItems" });

Cart.belongsToMany(Product, { through: "CartItems" });
// Cart.getProducts()
// Cart.setProducts()
// Cart.addProduct()
// Cart.addProducts()
// Cart.removeProduct()
// Cart.removeProducts()
// Cart.createProduct()
Product.belongsToMany(Cart, { through: "CartItems" });

Category.belongsToMany(Product, { through: "CategoryItems" });
// Category.getProducts()
// Category.setProducts()
// Category.addProduct()
// Category.addProducts()
// Category.removeProduct()
// Category.removeProducts()
// Category.createProduct()
Product.belongsToMany(Category, { through: "CategoryItems" });

const connect = async () => {
  let [err, result] = await nest(sequelize.sync({ force: false }));
  if (err) {
    console.error("Unable to connect to database.", { error: err });
  } else {
    console.log("Connected to database.");
    app.listen(PORT, () => {
      console.log(`Express server started on port ${PORT}`);
    });
  }
};

connect();
