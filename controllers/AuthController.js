const nest = require("../utils/nest");
const checkToken = require("../middlewares/tokenauth");
const AuthService = require("../services/AuthServices");
const { passwordHash } = require("../utils/bcrypt");

const postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ data: null, error: "invalid payload" });
  }
  const [err, token] = await nest(
    AuthService.logInAndGenerateToken(email, password)
  );
  if (err) {
    return res.json({ data: null, error: err.message });
  }
  return res.json({
    data: {
      jwtToken: token,
    },
    error: null,
  });

  // res.send("Login");
};

const postSignup = async (req, res, next) => {
  const { name, email, password, address, contact_no, credit_card } = req.body;
  if (!name || !email || !password) {
    return res.json({ data: null, error: "invalid payload" });
  }
  const [err, token] = await nest(
    AuthService.signUpAndGenerateToken(
      name,
      email,
      password,
      address,
      contact_no,
      credit_card
    )
  );
  if (err) {
    return res.json({ error: err.message, data: null });
  }
  return res.json({
    data: {
      jwtToken: token,
    },
    error: null,
  });

  // res.send("Signup");
};

module.exports = {
  postLogin,
  postSignup,
};
