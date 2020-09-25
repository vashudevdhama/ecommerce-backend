require("dotenv/config");
const jwt = require("jsonwebtoken");

const CustomerModel = require("../models/customers");
const nest = require("../utils/nest");

const checkToken = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    if (token && token.length > 7) {
      token = token.split("Bearer ")[1];
      const jwtPayload = jwt.verify(token, process.env.JWT_SALT);
      const { user_id } = jwtPayload;
      res.setHeader("user_id", user_id);
      let [err, userDetails] = await nest(CustomerModel.findByPk(user_id));
      if (err || userDetails === null) {
        throw Error("User not found");
      }
      next();
    } else {
      throw Error("Please provide valid token");
    }
  } catch (err) {
    console.log("Error in varifying token", { error: err });
    res.json({
      error: `Error verifying token ${err}`,
      data: null,
    });
  }
};

module.exports = checkToken;
