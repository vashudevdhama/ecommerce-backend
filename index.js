require("dotenv/config");
const express = require("express");

const sequelize = require("./utils/database");
const nest = require("./utils/nest");
const BaseRouter = require("./routes");

// Models
const Customer = require("./models/customers");
const Product = require("./models/products");
const Cart = require("./models/cart");
const CartItem = require("./models/cartitem");
const Category = require("./models/category");
const Order = require("./models/order");
const OrderItem = require("./models/orderitem");
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
Product.belongsTo(Customer, { constraints: true, onDelete: "CASCADE" });
Customer.hasMany(Product);
Customer.hasOne(Cart);
Product.hasMany(Category);
Product.hasMany(Review);
Cart.belongsTo(Customer);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(Customer);
Customer.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

const connect = async () => {
  let err;
  let result;
  [err, result] = await nest(sequelize.sync({ force: true }));
  if (err) {
    console.error("Unable to connect to database.");
  } else {
    console.log("Connected to database.");
    app.listen(PORT, () => {
      console.log(`Express server started on port ${PORT}`);
    });
  }
};

connect();
