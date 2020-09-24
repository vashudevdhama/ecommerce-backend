const postLogin = async (req, res, next) => {
  res.send("Login");
};

const postSignup = async (req, res, next) => {
  res.send("Signup");
};

module.exports = {
  postLogin,
  postSignup,
};
