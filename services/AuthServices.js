require("dotenv/config");
const jwt = require("jsonwebtoken");

const CustomerModel = require("../models/customers");
const { comparePassword, passwordHash } = require("../utils/bcrypt");
const nest = require("../utils/nest");

class AuthService {
  static logInAndGenerateToken = async (email, password) => {
    let [err, userDetails] = await nest(
      CustomerModel.findOne({
        where: { email: email },
      })
    );
    if (err) {
      console.log("Error in finding user", { error: err });
      throw Error("Error in finding user");
    }
    let isValid;
    [err, isValid] = await nest(
      comparePassword(password, userDetails.hashedPassword)
    );
    if (err) {
      console.log("Error in comparing password", { error: err });
      throw Error("Error comparing password");
    }
    if (!isValid) {
      console.log("Invalid credentials");
      throw new Error("Invalid credentials");
    }
    let token;
    try {
      console.log("USERDETIALS::: ", userDetails.customer_id);
      token = this.generateToken({ customer_id: userDetails.customer_id });
    } catch (err) {
      throw new Error("Error while generating token");
    }
    return token;
  };

  static signUpAndGenerateToken = async (
    name,
    email,
    password,
    address,
    contact_no,
    credit_card
  ) => {
    const customerObject = CustomerModel.build({
      name: name,
      email: email,
      hashedPassword: await passwordHash(password),
      isLoggedIn: true,
      address: address,
      contact_no: contact_no,
      credit_card: credit_card,
    });
    const [err, userData] = await nest(customerObject.save());
    if (err) {
      console.log("Error while registering", { error: err });
      throw Error("Error while registering");
    }
    let token;
    try {
      token = this.generateToken({ user_id: userData.id });
    } catch (err) {
      console.log(err);
      throw new Error("Error while generating token");
    }
    return token;
  };

  static generateToken(payload) {
    try {
      const token = jwt.sign(payload, process.env.JWT_SALT, {
        expiresIn: 86400,
      });
      return token;
    } catch (err) {
      console.log("Error generating new token", { error: err });
      throw Error("Error generating new token");
    }
  }
}

module.exports = AuthService;
