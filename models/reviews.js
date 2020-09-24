const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Review = sequelize.define("review", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  review: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Review;
