require("dotenv/config");
const jwt = require("jsonwebtoken");
const CustomerModel = require("../models/customers");
const nest = require("../utils/nest");

const checkToken = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    if (token && token.length > 7) {
      token = token.split("Bearer ")[1];
      let [err, jwtPayload] = await nest(
        jwt.verify(token, process.env.JWT_SALT)
      );
      if (err) {
        console.log("Error in verifying token", { error: err });
      }
      const { customer_id } = jwtPayload;
      console.log("JWTPAYLOAD ::: ", jwtPayload);
      res.locals.customer_id = customer_id;
      let userDetails;
      [err, userDetails] = await nest(CustomerModel.findByPk(customer_id));
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
