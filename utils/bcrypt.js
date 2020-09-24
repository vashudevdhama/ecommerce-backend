require("dotenv/config");
const bcrypt = require("bcrypt");
const nest = require("./nest");

export const passwordHash = async (password) => {
  const saltRounds = process.env.BCRYPT_SALT_ROUNDS;
  const [err, passwordHash] = await nest(bcrypt.hash(password, saltRounds));
  if (err) {
    console.log("Error while generating password hash");
    throw Error("Error while generating password hash");
  }
  return passwordHash;
};

export const comparePassword = async (userPassword, inputPassword) => {
  const [err, response] = await nest(
    bcrypt.compare(userPassword, inputPassword)
  );
  if (err && !response) {
    console.log("Error while comparing password", { error: err });
    throw Error("Error while comparing password");
  }
  return response;
};
